import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

/**
 * Builds a keyframes object for the animation.
 * @param {object} from - The initial state.
 * @param {Array<object>} steps - An array of animation steps.
 * @returns {object} The keyframes object.
 */
const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

/**
 * A component that animates text with a blur effect as it comes into view.
 * It can animate by characters, words, or lines.
 */
const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "lines", // Can be 'words', 'characters', or 'lines'
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  // Memoize the splitting of text into elements based on the animateBy prop.
  const elements = useMemo(() => {
    switch (animateBy) {
      case "lines":
        // Split by newline and replace empty lines with a non-breaking space to preserve them.
        return text.split("\n").map((line) => (line === "" ? "\u00A0" : line));
      case "words":
        return text.split(" ");
      case "characters":
      default:
        return text.split("");
    }
  }, [animateBy, text]);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Use IntersectionObserver to detect when the component is in view.
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Unobserve after the animation has been triggered.
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Define default animation properties based on direction.
  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  // Use provided animation values or fall back to defaults.
  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  // Calculate animation timing.
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  // Determine the container tag and its style based on the animation type.
  const Tag = animateBy === "lines" ? "div" : "p";
  const tagStyle = useMemo(
    () =>
      animateBy === "lines"
        ? { display: "block" }
        : { display: "flex", flexWrap: "wrap" },
    [animateBy]
  );

  return (
    <Tag ref={ref} className={className} style={tagStyle}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        spanTransition.ease = easing;

        // For line animations, each span should be a block element.
        const motionSpanStyle = useMemo(
          () => (animateBy === "lines" ? { display: "block" } : {}),
          [animateBy]
        );

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            style={motionSpanStyle}
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {/* Render content, handling spaces for word and character animations. */}
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default BlurText;

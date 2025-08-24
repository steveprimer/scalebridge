import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Unified nav item with hover animation
const NavItem = ({ item, onClick }) => {
  const isHash = item.path.startsWith("/#");
  const Wrapper = isHash ? HashLink : Link;

  return (
    <Wrapper
      smooth={isHash ? true : undefined}
      to={item.path}
      onClick={onClick}
      className="font-heading text-lg"
    >
      <span className="relative overflow-hidden h-6 group cursor-pointer inline-block">
        <span className="block text-gray-400 transition-transform duration-300 group-hover:-translate-y-full">
          {item.name}
        </span>
        <span className="block text-white absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
          {item.name}
        </span>
      </span>
    </Wrapper>
  );
};

// ✅ MOBILE MENU CODE RESTORED
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navLinks = [
    { name: "Benefits", path: "/#benefits" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, scale: 0.95 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-90 backdrop-blur-sm text-white flex flex-col items-center justify-center"
        >
          <motion.ul variants={menuVariants} className="space-y-8 text-center">
            {navLinks.map((item) => (
              <motion.li key={item.name} variants={itemVariants}>
                <NavItem item={item} onClick={() => setMenuOpen(false)} />
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>
              <a
                href="https://cal.com/anson-stephan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading mt-4 inline-block bg-blue-400 text-black font-semibold py-3 px-8 rounded-full text-lg hover:bg-white transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Book a call
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navLinks = [
    { name: "Benefits", path: "/#benefits" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // SVG Icons
  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <nav className="max-w-2xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between border border-blue-400 bg-black bg-opacity-50 backdrop-blur-md rounded-full px-6 py-2 pr-2">
            <Link
              to="/"
              className="font-heading text-2xl font-bold text-blue-400 flex items-center"
            >
              S<span className="text-white">caleBridge</span>
            </Link>

            <ul className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavItem item={item} />
                </li>
              ))}
            </ul>

            <a
              href="https://cal.com/anson-stephan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading hidden md:inline-block bg-blue-400 text-black font-semibold py-2 px-5 rounded-full hover:bg-white transition-colors duration-300"
            >
              Book a call
            </a>

            <button
              className="md:hidden text-white cursor-pointer z-50 p-2 -mr-2"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <CloseIcon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <MenuIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;

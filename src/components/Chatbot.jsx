import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaRegMessage, FaUser } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false); // Chat window toggle
  const [input, setInput] = useState(""); // User input field
  const [chat, setChat] = useState([]); // Chat history (display)
  const [messages, setMessages] = useState([]); // Chat history (for backend)
  const [isTyping, setIsTyping] = useState(false); // Bot typing animation
  const [showPopup, setShowPopup] = useState(false); // AI popup trigger
  const chatEndRef = useRef(null); // Ref to scroll chat to bottom
  const isMobile = window.innerWidth <= 480;
  const chatHeight = isMobile ? "75vh" : "500px";
  const chatWidth = isMobile ? "85vw" : "320px";
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasGreeted, setHasGreeted] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      handleSend(); // call your send function
    }
  };

  const storeInfo = `
Store Name: ScaleBridge

Overview:
ScaleBridge is a modern digital agency helping businesses automate, scale, and convert better online. We build clean websites, set up AI chatbots for customer support, and run personalized outreach campaigns.

Services:
- AI Customer Support Chatbots
- Automation Workflows
- Web Development (Modern, responsive, fast)
- Lead Generation & Outreach Campaigns

Support Info:
We typically respond to inquiries within 24 hours.
You can also schedule a call using the Calendly link on our site.

Mission:
To help service-based and eCommerce businesses save time, convert more, and scale efficiently using automation and AI.
`;

  // Show popup after 8 seconds
  useEffect(() => {
    if (isOpen) {
      setShowPopup(false);
      return; // don’t schedule the teaser when chat is already open
    }

    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPopup(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    if (isOpen && !hasGreeted && !showWelcome) {
      setIsTyping(true);
      const welcomeText =
        "Hey! I’m your ScaleBridge assistant—here to help you automate, improve conversions, or get insights on AI support and outreach. What would you like to do today?";

      setTimeout(() => {
        const botMessage = { sender: "Bot", text: welcomeText };
        setChat([botMessage]);
        setMessages([{ role: "assistant", content: welcomeText }]);
        setIsTyping(false);
        setHasGreeted(true);
      }, 1200);
    }
  }, [isOpen, showWelcome, hasGreeted]);

  // Handle sending user message
  const handleSend = async (customInput) => {
    const messageToSend = customInput || input;
    if (!messageToSend.trim()) return;

    const userMessage = { sender: "You", text: messageToSend };
    const newMessages = [...messages, { role: "user", content: messageToSend }];

    setChat([...chat, userMessage]);
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/chat`, {
        messages: newMessages,
        storeInfo,
      });

      const botText = res.data.reply;
      const botMessage = { sender: "Bot", text: botText };
      setChat((prev) => [...prev, botMessage]);
      setMessages((prev) => [...prev, { role: "assistant", content: botText }]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [
        ...prev,
        { sender: "Bot", text: "That was unexpected." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Typing indicator style
  const waveDotStyle = {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#ffffffff",

    // Match brand color
    display: "inline-block",
    animation: "wave 1.2s infinite ease-in-out",
  };

  const handleSuggestedMessage = (msg) => {
    setChat((prev) => [...prev, { sender: "You", text: msg }]);
    handleSend(msg); // Call your existing message send function
  };

  return (
    <>
      {/* Typing Animation Keyframes */}
      <style>
        {`
    @keyframes wave {
      0%, 60%, 100% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(-8px);
      }
    }

    /* Custom scrollbar for WebKit (Chrome, Edge, Safari) */
    #chat-history::-webkit-scrollbar {
  width: 10px;
}
#chat-history::-webkit-scrollbar-track {
  background: #0f111a;
  border-radius: 5px;
}
#chat-history::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 5px;
  border: 2px solid #0f111a;
}
#chat-history::-webkit-scrollbar-thumb:hover {
  background: #3b82f6;
}

/* Firefox */
#chat-history {
  scrollbar-width: thin;
  scrollbar-color: #2563eb #0f111a;
}

  `}
      </style>

      {/* Popup Chat Teaser */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            backgroundColor: "#0f111a",
            padding: "12px 16px",
            borderRadius: "12px",
            boxShadow: "0 12px 32px rgba(37,99,235,0.4)",
            maxWidth: "260px",
            fontSize: "14px",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            lineHeight: 1.2,
            color: "#cfd8ff",
            border: "1px solid #2563eb",
            cursor: "default",
          }}
        >
          <p style={{ margin: 0 }}>
            Need help improving conversions or automating support?
          </p>
          <button
            onClick={() => {
              setShowPopup(false);
              setIsOpen(true);
            }}
            style={{
              alignSelf: "flex-start",
              background: "none",
              border: "none",
              padding: 0,
              color: "#22d3ee",
              fontSize: "13px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Open Chat
          </button>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#001f74ff",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 4px 16px rgba(0, 2, 4, 0.6)",
        }}
      >
        <div style={{ position: "relative", width: "28px", height: "28px" }}>
          <RiCloseLargeFill
            size={28}
            color="#ffffff"
            style={{
              position: "absolute",
              inset: 0,
              strokeWidth: 1.6,

              stroke: "#ffffff",
              fontSize: "32px",
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.3s ease, transform 0.3s ease",
              transform: isOpen ? "scale(1)" : "scale(0.8)",
            }}
          />

          <FaRegMessage
            size={28}
            color="#ffffff"
            style={{
              position: "absolute",
              inset: 0,
              stroke: "#ffffff",
              strokeWidth: 25,
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "scale(0.5)" : "scale(1)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Background Blur Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)} // optional: clicking outside closes chat
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // optional darken
            zIndex: 9997, // just below chat window (9998)
            transition: "all 0.3s ease",
          }}
        />
      )}

      {/* Chat Window */}
      <div
        style={{
          position: "fixed",
          bottom: "90px",
          right: "2%",
          width: chatWidth,
          height: isOpen ? chatHeight : "0px",
          background: "linear-gradient(145deg, #0f111a, #1f2a55)",
          color: "#ffffff",
          border: "1.5px solid #2563eb",

          boxShadow: "0 0 18px rgba(37,99,235,0.5)",

          borderRadius: "15px",
          padding: isOpen ? "1rem 1rem 0.3rem" : "0 1rem",
          zIndex: 9998,
          display: "flex",
          flexDirection: "column",

          overflow: "hidden",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.3s ease",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {!showWelcome && (
          <div
            onClick={() => setShowWelcome(true)}
            style={{
              position: "absolute",
              top: "27px", // ⬅️ Increased from 12px
              left: "12px",
              cursor: "pointer",
              fontSize: "18px",
              color: "#fff",
            }}
            title="Back"
          >
            <MdArrowBackIosNew />
          </div>
        )}

        {/* Chat Messages */}
        {showWelcome ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "1rem",
              gap: "0.75rem",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "30px", color: "#fff" }}>
              How can we help you today?
            </h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>
              Let us know if you have any questions.
            </p>
            <button
              onClick={() => setShowWelcome(false)}
              style={{
                backgroundColor: "#C4008F",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              Chat with us
            </button>
          </div>
        ) : (
          <>
            {/* Chat Messages */}
            <style>
              {`
    .chatbot-badge {
      will-change: transform, opacity;
      backface-visibility: hidden;
    }
  `}
            </style>

            <AnimatePresence>
              {isOpen && !showWelcome && (
                <motion.div
                  className={"chatbot-badge"}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                  style={{
                    alignSelf: "center",
                    backgroundColor: "#2563eb",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.4)",

                    padding: "10px 24px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    // boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                    marginBottom: "14px",
                    zIndex: 9999,
                  }}
                >
                  AI Support
                </motion.div>
              )}
            </AnimatePresence>

            <div
              id="chat-history"
              style={{
                flex: 1,
                overflowY: "auto",
                marginBottom: "0.5rem",
                padding: "0.5rem",
                borderRadius: "6px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                boxShadow: "0 0   8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={
                    msg.sender === "Bot"
                      ? { y: 30, scale: 0.8, opacity: 0 }
                      : false
                  }
                  animate={
                    msg.sender === "Bot"
                      ? { y: 0, scale: 1, opacity: 1 }
                      : false
                  }
                  transition={
                    msg.sender === "Bot"
                      ? {
                          duration: 0.5,
                          ease: [0.25, 0.8, 0.25, 1], // custom ease-in-out, techy feel
                        }
                      : {}
                  }
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.sender === "You" ? "flex-end" : "flex-start",
                    alignItems: "flex-end",
                    marginBottom: "12px",
                  }}
                >
                  {/* Avatar for Bot */}
                  {msg.sender !== "You" && (
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#C4008F",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "8px",
                      }}
                    >
                      <FaRegMessage color="#fff" size={16} />
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    style={{
                      backgroundColor:
                        msg.sender === "You" ? "#1d4ed8" : "#1f2a55",
                      color: "#ffffff",

                      padding: "10px 14px",
                      borderRadius: "16px",
                      maxWidth: "75%",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      whiteSpace: "pre-wrap",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    {msg.text}
                  </div>

                  {/* Avatar for User */}
                  {msg.sender === "You" && (
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#C4008F",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "8px",
                      }}
                    >
                      <FaUser color="#fff" size={16} />
                    </div>
                  )}
                </motion.div>
              ))}

              <div ref={chatEndRef} />
              {/* Typing Animation */}
              {isTyping && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    marginBottom: "12px",
                  }}
                >
                  {/* Avatar Icon */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#C4008F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                    }}
                  >
                    <FaRegMessage color="#fff" size={16} />
                  </div>

                  {/* Typing Bubble with Wave Animation */}
                  <div
                    style={{
                      backgroundColor: "#1f2a55",
                      padding: "10px 14px",
                      borderRadius: "16px",
                      display: "flex",
                      gap: "4px",
                    }}
                  >
                    <div style={{ ...waveDotStyle, animationDelay: "0s" }} />
                    <div style={{ ...waveDotStyle, animationDelay: "0.2s" }} />
                    <div style={{ ...waveDotStyle, animationDelay: "0.4s" }} />
                  </div>
                </div>
              )}
              {/* Suggested Questions */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                {[
                  "How can ScaleBridge improve my conversion rate?",

                  "Do you offer AI-powered customer support chatbots?",

                  "What are your pricing and packages?",
                  "How long does onboarding take?",
                ].map((q, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSend(q)}
                    style={{
                      backgroundColor: "#1f2a55",
                      color: "#f4f4f4ff",
                      border: "1px solid rgba(37,99,235,0.4)",

                      padding: "6px 10px",
                      borderRadius: "12px",
                      fontSize: "13px",
                      cursor: "pointer",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                      transition: "background 0.3s",
                      // filter: "brightness(1.1)",
                    }}
                  >
                    {q}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            {/* Message Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                style={{
                  flex: 1, // allows the input to grow
                  padding: "0.5rem 0.75rem",
                  borderRadius: "10px",
                  // border: "1px solid #ccc",
                  backgroundColor: "#1f2a55",
                  border: "1px solid #2563eb",
                  color: "#ffffff",

                  minWidth: 0, // important for flex shrinking!
                }}
              />
              <button
                onClick={() => handleSend(input)}
                style={{
                  background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                  color: "#fff",
                  boxShadow: "0 3px 6px rgba(37,99,235,0.5)",

                  border: "none",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  flexShrink: 0, // prevents it from shrinking or wrapping
                }}
              >
                ➤
              </button>
            </div>
          </>
        )}
        <p
          style={{
            fontSize: "10px",
            color: "#ffffffff",
            textAlign: "center",
            marginTop: "0.2rem",
          }}
        >
          Powered by{" "}
          <a
            href="https://scalebridge.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#22d3ee" }}
          >
            ScaleBridge
          </a>
        </p>
      </div>
    </>
  );
}

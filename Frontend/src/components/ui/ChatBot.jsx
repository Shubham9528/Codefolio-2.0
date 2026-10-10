import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Smile,
  Image as ImageIcon,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "I'm doing well, thank you! How can I help you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = {
      role: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Assuming Backend is running on port 4000 based on .env
      const response = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg.content }),
      });

      const data = await response.json();

      const botMsg = {
        role: "assistant",
        content: data.answer || "Sorry, I couldn't process that.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error. Please try again later." + error,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-top">
              <div className="chatbot-avatar-c">C</div>
              <button
                className="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <h3 className="chatbot-title">Codefolio Chatbot</h3>
            <p className="chatbot-subtitle">
              Ask anything about me.
            </p>
          </div>

          {/* Messages Body */}
          <div className="chatbot-body" data-lenis-prevent="true" onWheel={(e) => e.stopPropagation()}>
            <div className="chatbot-message user-message">
              <div className="chatbot-bubble">Hello, how are you doing?</div>
              <div className="chatbot-time">08:15 AM</div>
            </div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-message ${msg.role === "user" ? "user-message" : "bot-message"}`}
              >
                {msg.role === "assistant" && (
                  <div className="chatbot-bot-avatar">
                    <img
                      src="https://i.pravatar.cc/150?img=47"
                      alt="Assistant"
                    />
                  </div>
                )}
                <div className="chatbot-msg-content">
                  {msg.role === "assistant" && (
                    <div className="chatbot-msg-name">Assistant</div>
                  )}
                  <div className="chatbot-bubble">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                  <div className="chatbot-time">{msg.time}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message bot-message">
                <div className="chatbot-bot-avatar">
                  <img src="https://i.pravatar.cc/150?img=47" alt="Assistant" />
                </div>
                <div className="chatbot-msg-content">
                  <div className="chatbot-msg-name">Assistant</div>
                  <div className="chatbot-bubble typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input-area">
            <button className="chatbot-icon-btn">
              <Smile size={20} />
            </button>
            <input
              type="text"
              placeholder="Reply ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="chatbot-icon-btn">
              <ImageIcon size={20} />
            </button>
            <button
              className="chatbot-send-btn"
              onClick={handleSend}
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button className="chatbot-toggle-btn" onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}

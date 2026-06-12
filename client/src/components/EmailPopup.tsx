/**
 * Email Capture Popup — "Get 10% Off Your First Order"
 * Triggers after 8 seconds on page or on exit-intent (mouse leaves viewport)
 * Stores dismissal in localStorage so it doesn't annoy repeat visitors
 * Collects email for future integration with Mailchimp/GHL/etc.
 */
import { useState, useEffect, useCallback } from "react";
import { X, Gift, Mail } from "lucide-react";

const STORAGE_KEY = "mc_email_popup_dismissed";
const POPUP_DELAY_MS = 8000; // Show after 8 seconds

export default function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const dismiss = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }, 300);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Store email locally (can be integrated with Mailchimp/GHL later)
    const existingEmails = JSON.parse(localStorage.getItem("mc_collected_emails") || "[]");
    existingEmails.push({ email: email.trim(), timestamp: new Date().toISOString() });
    localStorage.setItem("mc_collected_emails", JSON.stringify(existingEmails));

    setSubmitted(true);
    setTimeout(() => dismiss(), 4000);
  };

  useEffect(() => {
    // Check if already dismissed in last 7 days
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const daysSince = (Date.now() - parseInt(dismissed)) / (1000 * 60 * 60 * 24);
      if (daysSince < 7) return;
    }

    // Timer-based trigger
    const timer = setTimeout(() => setIsVisible(true), POPUP_DELAY_MS);

    // Exit-intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        opacity: isClosing ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div
        style={{
          background: "#FFFCF7",
          borderRadius: "12px",
          maxWidth: "420px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          transform: isClosing ? "scale(0.95)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Gold accent bar */}
        <div style={{ height: "4px", background: "linear-gradient(90deg, #C8860A, #F5C842, #C8860A)" }} />

        {/* Close button */}
        <button
          onClick={dismiss}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#8B7355",
            padding: "4px",
          }}
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div style={{ padding: "2rem 2rem 1.75rem", textAlign: "center" }}>
          {!submitted ? (
            <>
              {/* Icon */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C8860A, #F5C842)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}>
                <Gift size={26} color="#1A1208" />
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.5rem",
                color: "#2C1E0A",
                marginBottom: "0.5rem",
                lineHeight: "1.3",
              }}>
                Get 10% Off Your First Order
              </h3>

              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.9rem",
                color: "#6B5535",
                marginBottom: "1.5rem",
                lineHeight: "1.5",
              }}>
                Join our list for exclusive flavors, seasonal specials, and a welcome discount on handcrafted gourmet caramels.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ position: "relative" }}>
                  <Mail size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#8B7355" }} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.75rem 0.75rem 2.5rem",
                      border: "1.5px solid #E8DFD0",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontFamily: "'Source Sans 3', sans-serif",
                      background: "white",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    background: "#C8860A",
                    color: "#FFFCF7",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    fontFamily: "'Source Sans 3', sans-serif",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  CLAIM MY 10% DISCOUNT
                </button>
              </form>

              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.75rem",
                color: "#A08B6D",
                marginTop: "0.75rem",
              }}>
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </>
          ) : (
            <>
              {/* Success state */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #2E7D32, #4CAF50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
                fontSize: "1.5rem",
              }}>
                ✓
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.4rem",
                color: "#2C1E0A",
                marginBottom: "0.5rem",
              }}>
                Welcome to the Family!
              </h3>

              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.9rem",
                color: "#6B5535",
                lineHeight: "1.5",
              }}>
                Your 10% discount code: <strong style={{ color: "#C8860A", fontSize: "1.1rem" }}>WELCOME10</strong><br />
                Use it on your next order. Happy caramel shopping!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

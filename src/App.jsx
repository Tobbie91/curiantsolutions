import { useEffect, useState } from "react";
import logo from "./assets/logo.png"; 

export default function App() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 200);
  }, []);

  // Generate random floating particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
  }));

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #fffdf5, #fdf8e3)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* 🟡 Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-20px",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "rgba(201,162,39,0.28)",
            borderRadius: "50%",
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        ></div>
      ))}

      {/* CARD */}
      <div
        style={{
          background: "#ffffff",
          padding: "60px 40px",
          maxWidth: "520px",
          width: "100%",
          borderRadius: "16px",
          border: "1px solid #eadfb3",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          textAlign: "center",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "85px",
            marginBottom: "20px",
            filter: "drop-shadow(0px 0px 8px rgba(201,162,39,0.5))",
            animation: "shimmer 3s infinite",
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            color: "#c9a227",
            fontSize: "30px",
            marginBottom: "5px",
            fontWeight: 700,
          }}
        >
          CURIANET SOLUTIONS
        </h1>

        {/* TAGLINE */}
        <h3
          style={{
            color: "#555",
            marginBottom: "25px",
            fontWeight: 600,
          }}
        >
          Secure. Scalable. Smart.
        </h3>

        {/* MESSAGE */}
        <p
  style={{
    color: "#444",
    lineHeight: "1.6",
    fontSize: "16px",
    marginBottom: "25px",
  }}
>
  <strong>Our website is currently being upgraded.</strong>
  <br />
  We’re enhancing our platform to deliver a faster, smarter and more secure experience.
  <br />
  All Curianet services remain fully operational during this update.
</p>


        {/* CONTACT */}
        <div style={{ color: "#555", fontSize: "14px", lineHeight: "1.5" }}>
          <div>📧 hello@curianet.com</div>
          <div>📞 +234 813 516 9538</div>
          <div>🌍 www.curianet.com</div>
        </div>
      </div>

      {/* GLOBAL ANIMATIONS */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-120vh) scale(1.35); opacity: 0; }
        }

        @keyframes shimmer {
          0% { filter: drop-shadow(0px 0px 3px rgba(201,162,39,0.2)); }
          50% { filter: drop-shadow(0px 0px 15px rgba(201,162,39,0.7)); }
          100% { filter: drop-shadow(0px 0px 3px rgba(201,162,39,0.2)); }
        }
      `}</style>
    </div>
  );
}

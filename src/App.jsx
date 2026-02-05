import { useEffect, useState } from "react";

export default function App() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [noPos, setNoPos] = useState({ top: "50%", left: "60%" });

  /* PASSWORD CHECK */
  const checkPassword = () => {
    if (password === "Golu") {
      setAuthorized(true);
    } else {
      setError("Wrong password 😜");
    }
  };

  /* NO BUTTON RUNAWAY */
  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    setNoPos({ left: x + "px", top: y + "px" });
  };

  /* WHATSAPP REDIRECT */
  const handleYes = () => {
    const phone = "917008362009"; // your number
    const message = encodeURIComponent(
      "Yes, I will be your Valentine"
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };


  /* HEARTS */
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 6000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: pink;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        .center {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        h1 {
          color: #c2185b;
          margin-bottom: 20px;
        }

        input {
          padding: 10px;
          border-radius: 6px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .btn {
          padding: 12px 25px;
          font-size: 18px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }

        .yes {
          background: #e91e63;
          color: white;
        }

        .no {
          background: white;
          color: #e91e63;
          position: absolute;
        }

        .buttons {
          display: flex;
          gap: 20px;
        }

        .heart {
          position: absolute;
          bottom: -20px;
          font-size: 20px;
          animation: float linear forwards;
          opacity: 0.8;
        }

        @keyframes float {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-110vh);
            opacity: 0;
          }
        }

        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>

      {!authorized ? (
        <div className="center">
          <h1>Enter Password 💌</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          <button className="btn yes" onClick={checkPassword}>
            Enter
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      ) : (
        <div className="center">
          <h1>Will you be my Valentine? 💖</h1>
          <div className="buttons">
            <button className="btn yes" onClick={handleYes}>
              Yes
            </button>
            <button
              className="btn no"
              style={{ top: noPos.top, left: noPos.left }}
              onClick={moveNoButton}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}

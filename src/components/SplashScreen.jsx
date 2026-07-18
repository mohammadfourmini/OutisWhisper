import { useEffect, useState } from "react";
import "./SplashScreen.css";

function SplashScreen({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        onFinish();
      }, 500);

    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash ${hide ? "hide" : ""}`}>
      <h1>OUTIS SFM</h1>

      <p>Initializing Secure Channel...</p>

      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default SplashScreen;
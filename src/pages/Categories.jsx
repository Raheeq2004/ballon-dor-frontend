import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ballImage from "../assets/ball.png";

function Categories() {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 43,
    seconds: 10,
  });

  useEffect(() => {
    const closingDate = new Date("2026-12-31T23:59:59");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = closingDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className="categories-page">
      <Navbar />

      <div className="category-tabs">
        <button onClick={() => navigate("/nominees/men")}>MEN'S BALLON D'OR</button>
        <button onClick={() => navigate("/nominees/women")}>WOMEN'S BALLON D'OR</button>
        <button onClick={() => navigate("/nominees/yachine")}>YACHINE TROPHY</button>
        <button onClick={() => navigate("/nominees/kopa")}>KOPA TROPHY</button>
      </div>

      <main className="categories-main">
        <p className="select-text">SELECT YOUR 2026</p>
        <h1 className="winner-title">BALLON D'OR WINNER</h1>

        <section className="countdown-box">
          <h3>VOTING CLOSES IN</h3>

          <div className="countdown-timer">
            <div>
              <span>{formatNumber(timeLeft.days)}</span>
              <p>DAYS</p>
            </div>

            <strong>:</strong>

            <div>
              <span>{formatNumber(timeLeft.hours)}</span>
              <p>HOURS</p>
            </div>

            <strong>:</strong>

            <div>
              <span>{formatNumber(timeLeft.minutes)}</span>
              <p>MINUTES</p>
            </div>

            <strong>:</strong>

            <div>
              <span>{formatNumber(timeLeft.seconds)}</span>
              <p>SECONDS</p>
            </div>
          </div>

          <p className="countdown-note">
            Voting will be disabled when the countdown ends. Results remain visible in real time.
          </p>
        </section>

        <button
  className="results-btn"
  onClick={() => navigate("/results")}
>
  VIEW LIVE RESULTS
</button>


        <img src={ballImage} alt="Golden Ball" className="golden-ball-img" />
      </main>

      <Footer />
    </div>
  );
}

export default Categories;
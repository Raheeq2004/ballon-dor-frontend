import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import vinicius from "../assets/vinicius.jpg";

function NomineeProfile() {
  const [hasVoted, setHasVoted] = useState(false);
  const navigate = useNavigate();

  const handleVote = () => {
    if (!hasVoted) {
      alert("Your vote has been submitted successfully!");
      setHasVoted(true);
    }
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="category-tabs">

  <button onClick={() => navigate("/nominees/men")}>
    MEN'S BALLON D'OR
  </button>

  <button onClick={() => navigate("/nominees/women")}>
    WOMEN'S BALLON D'OR
  </button>

  <button onClick={() => navigate("/nominees/yachine")}>
    YACHINE TROPHY
  </button>

  <button onClick={() => navigate("/nominees/kopa")}>
    KOPA TROPHY
  </button>

</div>

        <div className="container">

          <div className="profile-path">
            <span>NOMINEES</span>
            <span>›</span>
            <span>PLAYER PROFILE</span>
          </div>

          <div className="row g-4 align-items-stretch">

            <div className="col-lg-5">
              <div className="player-image-box">

                <img
                  src={vinicius}
                  alt="Vinicius"
                  className="player-image"
                />

                <div className="nominee-rank">
                  <h2>03</h2>
                  <p>NOMINEE #</p>
                </div>

              </div>
            </div>

            <div className="col-lg-7">

              <div className="player-main-info">

                <h1>
                  VINÍCIUS JR.
                  <span className="verified-badge">✔</span>
                </h1>

                <p className="player-role">
                  FORWARD | REAL MADRID & BRAZIL
                </p>

                <div className="player-details">

                  <div>
                    <h5>12 July 2000</h5>
                    <span>DATE OF BIRTH</span>
                  </div>

                  <div>
                    <h5>1.76 m</h5>
                    <span>HEIGHT</span>
                  </div>

                  <div>
                    <h5>Right Footed</h5>
                    <span>FOOT</span>
                  </div>

                  <div>
                    <h5>Brazil</h5>
                    <span>NATIONALITY</span>
                  </div>

                </div>

                <div className="stats-box">

                  <div className="stat-item">
                    <h3>1,250,876</h3>
                    <p>VOTES</p>
                  </div>

                  <div className="stat-item">
                    <h3>210+</h3>
                    <p>GOALS</p>
                  </div>

                  <div className="stat-item">
                    <h3>160+</h3>
                    <p>ASSISTS</p>
                  </div>

                  <div className="stat-item">
                    <h3>14+</h3>
                    <p>TROPHIES</p>
                  </div>

                  <div className="stat-item">
                    <h3>380+</h3>
                    <p>MATCHES</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="vote-progress-box">

            <div className="vote-left">
              <h2>32%</h2>
              <p>OF TOTAL VOTES</p>
            </div>

            <div className="vote-bar">
              <div className="vote-fill"></div>
            </div>

            <div className="vote-right">
              <p>Vote counts are updated in real-time.</p>
              <p>Keep supporting your favorite nominee!</p>
            </div>

          </div>

          <div className="row g-4 mt-2">

            <div className="col-lg-5">

              <div className="about-box">

                <h3>ABOUT</h3>

                <p>
                  A dynamic and electrifying forward known for his
                  exceptional speed, skill, and attacking flair.
                  Vinícius Jr. continues to inspire the next generation.
                </p>

                <div className="about-info">
                  <p><span>CLUB</span> Real Madrid</p>
                  <p><span>POSITION</span> Forward</p>
                  <p><span>NATIONAL TEAM</span> Brazil</p>
                  <p><span>JERSEY NUMBER</span> 7</p>
                </div>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="highlights-box">

                <h3>CAREER HIGHLIGHTS</h3>

                <ul>
                  <li>2024 - UEFA Champions League Winner</li>
                  <li>2023 - La Liga Champion</li>
                  <li>2022 - UEFA Super Cup Winner</li>
                  <li>2021 - Copa América Winner</li>
                </ul>

              </div>

            </div>

          </div>

          <div className="vote-button-box">

            <button
              className={`vote-button ${hasVoted ? "voted" : ""}`}
              onClick={handleVote}
              disabled={hasVoted}
            >
              {hasVoted ? "VOTED" : "VOTE NOW"}
            </button>

            <p>You can vote only once</p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default NomineeProfile;
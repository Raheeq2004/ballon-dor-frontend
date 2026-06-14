import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import messi from "../assets/messi.jpg";
import salah from "../assets/salah.jpg";
import vinicius from "../assets/vinicius.jpg";
import lewandowski from "../assets/lewandowski.jpg";
import debruyne from "../assets/debruyne.jpg";
import benzema from "../assets/benzema.jpg";
import mbappe from "../assets/mbappe.jpg";
import haaland from "../assets/haaland.jpg";


import bonmati from "../assets/bonmati.jpg";
import caroline from "../assets/Caroline.jpg";
import sam from "../assets/Sam.jpg";
import wendie from "../assets/Wendie.jpg";
import alexia from "../assets/alexia.jpg";
import beth from "../assets/beth.jpg";
import ada from "../assets/Ada.jpg";
import sophia from "../assets/Sophia.jpg";

import martiniez from "../assets/martiniez.jpg";
import courtois from "../assets/Courtois.jpg";
import alisson from "../assets/Alisson.jpg";
import ederson from "../assets/Ederson.jpg";
import mike from "../assets/Mike.jpg";
import marc from "../assets/Marc.jpg";
import donnarumma from "../assets/Donnarumma.jpg";
import jan from "../assets/jan.jpg";

import jude from "../assets/jude.jpg";
import gavi from "../assets/Pablo.jpg";
import musiala from "../assets/jamal.jpg";
import pedri from "../assets/pedri.jpg";
import yamal from "../assets/lamine.jpg";
import wirtz from "../assets/wirtz.jpg";
import endrick from "../assets/Endrick.jpg";
import arda from "../assets/Arda.jpg";

function NomineeProfile() {
  const [hasVoted, setHasVoted] = useState(false);
  const [player, setPlayer] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const imageMap = {
  // MEN
  "Lionel Messi": messi,
  "Mohamed Salah": salah,
  "Vinicius Jr.": vinicius,
  "Robert Lewandowski": lewandowski,
  "Kevin De Bruyne": debruyne,
  "Karim Benzema": benzema,
  "Kylian Mbappe": mbappe,
  "Erling Haaland": haaland,

  // WOMEN
  "Aitana Bonmatí": bonmati,
  "Caroline Graham": caroline,
  "Sam Kerr": sam,
  "Wendie Renard": wendie,
  "Alexia Putellas": alexia,
  "Beth Mead": beth,
  "Ada Hegerberg": ada,
  "Sophia Smith": sophia,

  // YACHINE
  "Emiliano Martínez": martiniez,
  "Thibaut Courtois": courtois,
  "Alisson Becker": alisson,
  "Ederson Moraes": ederson,
  "Mike Maignan": mike,
  "Marc-André Ter Stegen": marc,
  "Gianluigi Donnarumma": donnarumma,
  "Jan Oblak": jan,

  // KOPA
  "Jude Bellingham": jude,
  "Pablo Gavi": gavi,
  "Jamal Musiala": musiala,
  "Pedri González": pedri,
  "Lamine Yamal": yamal,
  "Florian Wirtz": wirtz,
  "Endrick Felipe": endrick,
  "Arda Güler": arda,
};

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/nominees/${id}`
        );

        setPlayer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayer();
  }, [id]);

  const handleVote = async () => {
  if (hasVoted) return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login before voting.");
    navigate("/auth");
    return;
  }

  try {
    const response = await axios.post(
      `http://localhost:5000/api/nominees/${id}/vote`,
      {
        user_id: user.id,
      }
    );

    setPlayer(response.data.nominee);
    setHasVoted(true);

    alert(response.data.message);
  } catch (error) {
    console.error(error);

    if (error.response && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert("Something went wrong. Please try again.");
    }

    setHasVoted(true);
  }
};

  if (!player) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="category-tabs">
          <button onClick={() => navigate("/nominees/men")}>MEN'S BALLON D'OR</button>
          <button onClick={() => navigate("/nominees/women")}>WOMEN'S BALLON D'OR</button>
          <button onClick={() => navigate("/nominees/yachine")}>YACHINE TROPHY</button>
          <button onClick={() => navigate("/nominees/kopa")}>KOPA TROPHY</button>
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
                <img src={imageMap[player.name]} alt={player.name} className="player-image" />

                <div className="nominee-rank">
                  <h2>{String(player.id).padStart(2, "0")}</h2>
                  <p>NOMINEE #</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="player-main-info">
                <h1>
                  {player.name.toUpperCase()}
                  <span className="verified-badge">✔</span>
                </h1>

                <p className="player-role">
                  {player.position?.toUpperCase()} | {player.club?.toUpperCase()} & {player.nationality?.toUpperCase()}
                </p>

                <div className="player-details">
                  <div>
                    <span>DATE OF BIRTH</span>
                    <h5>{player.date_of_birth}</h5>
                  </div>

                  <div>
                    <span>HEIGHT</span>
                    <h5>{player.height}</h5>
                  </div>

                  <div>
                    <span>FOOT</span>
                    <h5>{player.foot}</h5>
                  </div>

                  <div>
                    <span>NATIONALITY</span>
                    <h5>{player.nationality}</h5>
                  </div>
                </div>

                <div className="stats-box">
                  <div className="stat-item">
                    <h3>{player.votes}</h3>
                    <p>VOTES</p>
                  </div>

                  <div className="stat-item">
                    <h3>{player.goals}</h3>
                    <p>GOALS</p>
                  </div>

                  <div className="stat-item">
                   <h3>{player.assists}</h3>
                    <p>ASSISTS</p>
                  </div>

                  <div className="stat-item">
                    <h3>{player.trophies}</h3>
                    <p>TROPHIES</p>
                  </div>

                  <div className="stat-item">
                    <h3>{player.matches}</h3>
                    <p>MATCHES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vote-progress-box">
            <div className="vote-left">
              <h2>0%</h2>
              <p>OF TOTAL VOTES</p>
            </div>

            <div className="vote-bar">
              <div className="vote-fill"></div>
            </div>

            <div className="vote-right">
              <p>Vote counts are updated from the database.</p>
              <p>Keep supporting your favorite nominee!</p>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-lg-5">
              <div className="about-box">
                <h3>ABOUT</h3>

               <p>{player.about}</p>

                <div className="about-info">
                  <p><span>CLUB</span> {player.club}</p>
                  <p><span>POSITION</span> {player.position}</p>
                  <p><span>NATIONAL TEAM</span> {player.nationality}</p>
                  <p><span>JERSEY NUMBER</span> {player.jersey_number}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="highlights-box">
                <h3>CAREER HIGHLIGHTS</h3>
                <ul>
                  <li>{player.achievements}</li>
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
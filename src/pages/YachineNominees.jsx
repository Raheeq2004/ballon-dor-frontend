import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import martiniez from "../assets/martiniez.jpg";
import courtois from "../assets/Courtois.jpg";
import alisson from "../assets/Alisson.jpg";
import ederson from "../assets/Ederson.jpg";
import mike from "../assets/Mike.jpg";
import marc from "../assets/Marc.jpg";
import donnarumma from "../assets/Donnarumma.jpg";
import jan from "../assets/jan.jpg";

function YachineNominees() {
  const navigate = useNavigate();

  const [nominees, setNominees] = useState([]);

  const imageMap = {
    "Emiliano Martínez": martiniez,
    "Thibaut Courtois": courtois,
    "Alisson Becker": alisson,
    "Ederson Moraes": ederson,
    "Mike Maignan": mike,
    "Marc-André Ter Stegen": marc,
    "Gianluigi Donnarumma": donnarumma,
    "Jan Oblak": jan,
  };

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const response = await axios.get("https://ballon-dor-backend-production.up.railway.app/api/nominees");

        const yachineNominees = response.data.filter(
          (player) => player.category_id === 3
        );

        setNominees(yachineNominees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNominees();
  }, []);

  return (
    <>
      <Navbar />

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

      <div className="men-page">
        <h1 className="nominees-title">NOMINEES</h1>

        <div className="container">
          <div className="row g-4">
            {nominees.map((player, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={player.id}>
                <div
                  className="nominee-card"
                  onClick={() => navigate(`/nominee/${player.id}`)}
                >
                  <div className="nominee-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <img
                    src={imageMap[player.name]}
                    alt={player.name}
                    className="nominee-image women-image"
                  />

                  <div className="nominee-info">
                    <p className="first-name">{player.name.split(" ")[0]}</p>

                    <h3 className="last-name">
                      {player.name.split(" ").slice(1).join(" ")}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default YachineNominees;
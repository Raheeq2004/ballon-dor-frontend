import { useEffect, useState } from "react";
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


import { useNavigate } from "react-router-dom";



function MenNominees() {
  const navigate = useNavigate();

  const [nominees, setNominees] = useState([]);

useEffect(() => {
  const fetchNominees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/nominees");

      const menNominees = response.data.filter(
        (player) => player.category_id === 1
      );

      setNominees(menNominees);
    } catch (error) {
      console.error(error);
    }
  };

  fetchNominees();
}, []);


const imageMap = {
  "Lionel Messi": messi,
  "Mohamed Salah": salah,
  "Vinicius Jr.": vinicius,
  "Robert Lewandowski": lewandowski,
  "Kevin De Bruyne": debruyne,
  "Karim Benzema": benzema,
  "Kylian Mbappe": mbappe,
  "Erling Haaland": haaland,
};

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
  className="nominee-image"
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

export default MenNominees;
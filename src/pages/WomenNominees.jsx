import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import bonmati from "../assets/bonmati.jpg";
import caroline from "../assets/Caroline.jpg";
import sam from "../assets/Sam.jpg";
import wendie from "../assets/Wendie.jpg";
import alexia from "../assets/alexia.jpg";
import beth from "../assets/beth.jpg";
import ada from "../assets/Ada.jpg";
import sophia from "../assets/Sophia.jpg";

function WomenNominees() {
  const navigate = useNavigate();
  const nominees = [
    { id: "01", firstName: "Aitana", lastName: "Bonmatí", image: bonmati },
    { id: "02", firstName: "Caroline", lastName: "Graham", image: caroline },
    { id: "03", firstName: "Sam", lastName: "Kerr", image: sam },
    { id: "04", firstName: "Wendie", lastName: "Renard", image: wendie },
    { id: "05", firstName: "Alexia", lastName: "Putellas", image: alexia },
    { id: "06", firstName: "Beth", lastName: "Mead", image: beth },
    { id: "07", firstName: "Ada", lastName: "Hegerberg", image: ada },
    { id: "08", firstName: "Sophia", lastName: "Smith", image: sophia },
  ];

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
            {nominees.map((player) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={player.id}>
               <div
  className="nominee-card"
  onClick={() => navigate(`/nominee/${player.id}`)}
>
                  <div className="nominee-number">{player.id}</div>

                  <img
                    src={player.image}
                    alt={player.lastName}
                    className="nominee-image women-image"
                  />

                  <div className="nominee-info">
                    <p className="first-name">{player.firstName}</p>
                    <h3 className="last-name">{player.lastName}</h3>
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

export default WomenNominees;
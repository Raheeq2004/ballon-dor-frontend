import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import jude from "../assets/jude.jpg";
import gavi from "../assets/Pablo.jpg";
import musiala from "../assets/jamal.jpg";
import pedri from "../assets/pedri.jpg";
import yamal from "../assets/lamine.jpg";
import wirtz from "../assets/wirtz.jpg";
import endrick from "../assets/Endrick.jpg";
import arda from "../assets/Arda.jpg";

function KopaNominees() {
  const navigate = useNavigate();
  const nominees = [
    { id: "01", firstName: "Jude", lastName: "Bellingham", image: jude },
    { id: "02", firstName: "Pablo", lastName: "Gavi", image: gavi },
    { id: "03", firstName: "Jamal", lastName: "Musiala", image: musiala },
    { id: "04", firstName: "Pedri", lastName: "González", image: pedri },
    { id: "05", firstName: "Lamine", lastName: "Yamal", image: yamal },
    { id: "06", firstName: "Florian", lastName: "Wirtz", image: wirtz },
    { id: "07", firstName: "Endrick", lastName: "Felipe", image: endrick },
    { id: "08", firstName: "Arda", lastName: "Güler", image: arda },
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

export default KopaNominees;
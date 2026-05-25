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
  const nominees = [
    { id: "01", firstName: "Emiliano", lastName: "Martínez", image: martiniez },
    { id: "02", firstName: "Thibaut", lastName: "Courtois", image: courtois },
    { id: "03", firstName: "Alisson", lastName: "Becker", image: alisson },
    { id: "04", firstName: "Ederson", lastName: "Moraes", image: ederson },
    { id: "05", firstName: "Mike", lastName: "Maignan", image: mike },
    { id: "06", firstName: "Marc-André", lastName: "Ter Stegen", image: marc },
    { id: "07", firstName: "Gianluigi", lastName: "Donnarumma", image: donnarumma },
    { id: "08", firstName: "Jan", lastName: "Oblak", image: jan },
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

export default YachineNominees;
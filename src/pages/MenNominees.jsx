import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import debruyne from "../assets/debruyne.jpg";
import benzema from "../assets/benzema.jpg";
import mbappe from "../assets/mbappe.jpg";
import haaland from "../assets/haaland.jpg";
import messi from "../assets/messi.jpg";
import salah from "../assets/salah.jpg";
import vinicius from "../assets/vinicius.jpg";
import lewandowski from "../assets/lewandowski.jpg";

function MenNominees() {
  const navigate = useNavigate();

  const nominees = [
    {
      id: "01",
      firstName: "Kevin",
      lastName: "De Bruyne",
      image: debruyne,
    },
    {
      id: "02",
      firstName: "Karim",
      lastName: "Benzema",
      image: benzema,
    },
    {
      id: "03",
      firstName: "Kylian",
      lastName: "Mbappé",
      image: mbappe,
    },
    {
      id: "04",
      firstName: "Erling",
      lastName: "Haaland",
      image: haaland,
    },
    {
      id: "05",
      firstName: "Lionel",
      lastName: "Messi",
      image: messi,
    },
    {
      id: "06",
      firstName: "Mohamed",
      lastName: "Salah",
      image: salah,
    },
    {
      id: "07",
      firstName: "Vinícius Jr.",
      lastName: "Vinícius Jr",
      image: vinicius,
    },
    {
      id: "08",
      firstName: "Robert",
      lastName: "Lewandowski",
      image: lewandowski,
    },
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
                    className="nominee-image"
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

export default MenNominees;
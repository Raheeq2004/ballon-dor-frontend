import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import collageImage from "../assets/3333.png";
import beinLogo from "../assets/bein.jpg";
import HublotLogo from "../assets/Hublot.jpg";
import qatarLogo from "../assets/qatar.jpg";
import uafeLogo from "../assets/uafe.jpg";
import sportLogo from "../assets/sport.jpg";
import blackLogo from "../assets/black.jpg";
import redLogo from "../assets/red.jpg";
import adidasLogo from "../assets/adidas.jpg";
import fifaLogo from "../assets/fifa.jpg";
import pumaLogo from "../assets/puma.jpg";
import nnbbcLogo from "../assets/nnbbc.jpg";
import orangeLogo from "../assets/orange.jpg";


function Home() {
  const navigate = useNavigate();

const handleVoteClick = () => {
  navigate("/auth");
};
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-main">
        <section className="home-hero">
          <h2 className="choose-title">Choose</h2>
          <h1 className="greatness-title">GREATNESS</h1>
          <p className="home-subtitle">THIS IS WHERE LEGENDS ARE CHOSEN.</p>
        </section>

        <section className="welcome-section">
          <div className="welcome-text">
            <h2>WELCOME TO BALLON D'OR</h2>

            <p>
              The Ballon d'Or is the most prestigious individual award in
              football, celebrating the finest talent, dedication, and
              excellence in the sport.
            </p>

            <p>
              Our platform brings together fans, experts, and football lovers
              from around the world to honor the players who shine above the
              rest.
            </p>

            <p>
              Each year, the world's most exceptional players compete for this
              coveted prize, making it a symbol of greatness on the global
              stage.
            </p>

            <p>
              Join us as we celebrate the passion, skill, and unforgettable
              moments that define the beautiful game.
            </p>
          </div>

          <div className="welcome-image">
            <img src={collageImage} alt="Ballon D'or visual collage" />
          </div>
        </section>

        <section className="partners-section">
  <h2>OUR PARTNERS</h2>

  <div className="partners-logos">
  <img src={blackLogo} alt="Partner logo" />
  <img src={sportLogo} alt="Partner logo" />
  <img src={redLogo} alt="Partner logo" />
  <img src={HublotLogo} alt="Hublot logo" />
  <img src={qatarLogo} alt="Qatar logo" />

  <img src={uafeLogo} alt="UEFA logo" />
   <img src={pumaLogo} alt="puma logo" />
  <img src={beinLogo} alt="beIN logo" />
  <img src={adidasLogo} alt="Adidas logo" />
  <img src={fifaLogo} alt="FIFA logo" />
   <img src={nnbbcLogo} alt="nnbbc logo" />
    <img src={orangeLogo} alt="orange logo" />
</div>

 <button className="vote-now-btn" onClick={handleVoteClick}>
  <span className="btn-line"></span>

  <span className="btn-text">VOTE NOW</span>

  <span className="btn-line"></span>
</button>
</section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
import { useNavigate } from "react-router-dom";
import landingImage from "../assets/landing.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-page"
      onClick={() => navigate("/home")}
    >
      <img
        src={landingImage}
        alt="Landing"
        className="landing-image"
      />

      <div className="landing-content">
        <h1>BALLON D'OR</h1>
        <h2>2026</h2>
        
      </div>
    </div>
  );
}

export default Landing;
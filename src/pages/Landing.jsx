import { useNavigate } from "react-router-dom";
import landingImage from "../assets/banner.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page" onClick={() => navigate("/home")}>
      <img src={landingImage} alt="Ballon d'Or 2026" className="landing-image" />
    </div>
  );
}

export default Landing;





import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import landingImage from "../assets/banner.png";
import logo from "../assets/logo.png";

function Landing() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page" onClick={() => navigate("/home")}>
      {loading && (
        <div className="landing-loader">
          <img src={logo} alt="Ballon d'Or Logo" />
        </div>
      )}

      <img
        src={landingImage}
        alt="Ballon d'Or 2026"
        className={`landing-image ${!loading ? "show-landing" : ""}`}
      />
    </div>
  );
}

export default Landing;
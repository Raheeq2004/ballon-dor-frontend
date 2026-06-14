import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const handleLogoClick = () => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/categories");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <div className="main-navbar">
      <div className="navbar-brand" onClick={handleLogoClick}>
        <img src={logo} alt="Ballon d'Or Logo" />
        <h1>BALLON D'OR</h1>
      </div>

      <div className="navbar-links">
        <button className="about-btn" onClick={() => navigate("/about")}>
          ABOUT
        </button>

        {isLoggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            LOGOUT
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
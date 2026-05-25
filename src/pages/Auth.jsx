import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("isLoggedIn", "true");

  // temporary admin testing
  if (isLogin) {
    navigate("/admin");
  } else {
    navigate("/categories");
  }
};

  return (
       <div>

    <Navbar />
    <div className="auth-page">

      <div className="auth-container">

        <h1 className="auth-title">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h1>

        <p className="auth-subtitle">
          {isLogin
            ? "Welcome back to Ballon D'Or."
            : "Create your account to get started."}
        </p>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <div className="mb-4">
              <label className="form-label">FULL NAME</label>

              <input
                type="text"
                className="form-control auth-input"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="form-label">EMAIL ADDRESS</label>

            <input
              type="email"
              className="form-control auth-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">PASSWORD</label>

            <input
              type="password"
              className="form-control auth-input"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="form-label">
                CONFIRM PASSWORD
              </label>

              <input
                type="password"
                className="form-control auth-input"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
          </button>

        </form>

        <p className="switch-text">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="switch-btn"
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>

        </p>

      </div>

    </div>
   <Footer />

  </div>
  );
}

export default Auth;
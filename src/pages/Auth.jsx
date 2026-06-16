import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

if (!email || !password) {
  alert("Please enter email and password");
  return;
}

  try {

    if (!isLogin) {

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await axios.post(
        "https://ballon-dor-backend-production.up.railway.app/api/auth/register",
        {
          full_name: fullName,
          email,
          password,
        }
      );

      console.log(response.data);

      localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/categories");

    } else {

      const response = await axios.post(
        "https://ballon-dor-backend-production.up.railway.app/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/categories");
      }

    }

  } catch (error) {

    console.error(error);

    alert("Authentication Failed");

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
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>
            </div>
          )}

          <div className="mb-4">
            <label className="form-label">EMAIL ADDRESS</label>

            <input
  type="email"
  className="form-control auth-input"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
          </div>

          <div className="mb-4">
            <label className="form-label">PASSWORD</label>

            <input
  type="password"
  className="form-control auth-input"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
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
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
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
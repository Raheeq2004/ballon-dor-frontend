import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Categories from "./pages/Categories";
import MenNominees from "./pages/MenNominees";
import WomenNominees from "./pages/WomenNominees";
import YachineNominees from "./pages/YachineNominees";
import KopaNominees from "./pages/KopaNominees";
import NomineeProfile from "./pages/NomineeProfile";
import AdminDashboard from "./pages/AdminDashboard";
import Results from "./pages/Results";
import About from "./pages/About";


import blueBall from "./assets/blueball.png";
import trophyImg from "./assets/gass.png";
import earthImg from "./assets/earth.png";
import rightImg from "./assets/right.png";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/nominees/men" element={<MenNominees />} />
        <Route path="/nominees/women" element={<WomenNominees />} />
        <Route path="/nominees/yachine" element={<YachineNominees />} />
        <Route path="/nominees/kopa" element={<KopaNominees />} />
        <Route path="/nominee/:id" element={<NomineeProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
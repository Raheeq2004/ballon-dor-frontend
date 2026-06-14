import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import mensAward from "../assets/mtrophy.png";
import womensAward from "../assets/wtrophy.png";
import yachineAward from "../assets/yachine.png";
import kopaAward from "../assets/kopa.png";

function About() {
  const [clubs, setClubs] = useState([]);

 useEffect(() => {
  const fetchClubs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/clubs");
      setClubs(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  fetchClubs();
}, []);

  const categories = [
    {
      title: "MEN'S BALLON D'OR",
      image: mensAward,
      text: "Celebrating the best male footballers in the world.",
    },
    {
      title: "WOMEN'S BALLON D'OR",
      image: womensAward,
      text: "Honoring the top female footballers and their achievements.",
    },
    {
      title: "YACHINE TROPHY",
      image: yachineAward,
      text: "Recognizing the best goalkeeper performances.",
    },
    {
      title: "KOPA TROPHY",
      image: kopaAward,
      text: "Highlighting the brightest young football talents.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="about-page">
        

        <section className="about-section">
          <h1>ABOUT BALLON D'OR 2026</h1>
          <p>
            Ballon d'Or 2026 is a modern football voting platform where users
            can explore nominees, view detailed player profiles, vote once per
            category, and follow live results powered by the database.
          </p>
        </section>

        

        <section className="clubs-section">
          <h2>FEATURED CLUBS</h2>

          <div className="clubs-grid">
           {clubs.map((club) => (
  <div className="club-card" key={club.name}>
    <img src={club.badge} alt={club.name} />
    <h3>{club.name}</h3>
    <p>{club.league}</p>
    <p>{club.country}</p>
    <p>{club.stadium}</p>
  </div>
))}
          </div>
        </section>

        <section className="award-section">
          <h2>AWARD CATEGORIES</h2>

          <div className="award-grid">
            {categories.map((category) => (
              <div className="award-card" key={category.title}>
                <img src={category.image} alt={category.title} />
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="how-section">
          <h2>HOW IT WORKS</h2>

          <div className="steps-grid">
            <div>
              <span>1</span>
              <h3>CREATE ACCOUNT</h3>
              <p>Register or login to access voting.</p>
            </div>

            <div>
              <span>2</span>
              <h3>CHOOSE CATEGORY</h3>
              <p>Select the award category you want.</p>
            </div>

            <div>
              <span>3</span>
              <h3>CAST YOUR VOTE</h3>
              <p>Vote for one nominee in each category.</p>
            </div>

            <div>
              <span>4</span>
              <h3>TRACK RESULTS</h3>
              <p>Watch live results update from the database.</p>
            </div>
          </div>
        </section>

    <section className="contact-section">
  <h2>CONTACT US</h2>

  <div className="contact-card-single">
    <div className="contact-item">
      <h3>Email</h3>
      <p>support@ballondor2026.com</p>
    </div>

    <div className="contact-item">
      <h3>Location</h3>
      <p>Paris, France</p>
    </div>

    <div className="contact-item">
      <h3>Platform</h3>
      <p>Ballon d'Or Voting System</p>
    </div>
  </div>
</section>
      </div>
      <Footer />
    </>
  );
}

export default About;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import blueBall from "../assets/blueball.png";
import trophyImg from "../assets/gass.png";
import earthImg from "../assets/earth.png";
import rightImg from "../assets/right.png";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <section className="about-hero">
          <h1>ABOUT US</h1>
          <p>Celebrating Football Excellence</p>
        </section>

        <section className="about-intro">
  <div className="about-image-box">
    <img src={blueBall} alt="Golden football" />
  </div>

  <div className="about-text">
    <h2>WHO WE ARE</h2>
    <p>
      We are a digital football voting platform created to celebrate the
      greatest players across different award categories.
    </p>
    <p>
      The platform allows users to browse nominees, view player profiles, cast
      votes, and follow live results in a simple and transparent way.
    </p>
    <p>
      Our goal is to make the Ballon d'Or experience more interactive by giving
      fans a voice while keeping the voting process clear, organized, and easy
      to use.
    </p>
  </div>
</section>

<section className="about-mission">
  <h2>OUR MISSION</h2>

  <div className="mission-line-grid">
    <div className="mission-item">
      <img src={trophyImg} alt="Promote excellence" />
      <h3>Promote Excellence</h3>
      <p>
        We celebrate outstanding football performances and highlight the
        players who show talent, dedication, and achievement.
      </p>
    </div>

    <div className="mission-item">
      <img src={earthImg} alt="Connect fans" />
      <h3>Connect Fans</h3>
      <p>
        We bring football fans together by allowing them to participate in the
        voting journey and support their favorite nominees.
      </p>
    </div>

    <div className="mission-item">
      <img src={rightImg} alt="Ensure transparency" />
      <h3>Ensure Transparency</h3>
      <p>
        We provide a clear voting experience where results can be viewed and
        compared through a live results page.
      </p>
    </div>
  </div>
</section>

        <section className="how-it-works">
          <h2>HOW IT WORKS</h2>

          <div className="steps-grid">
            <div>
              <span>1</span>
              <h3>REGISTER / LOGIN</h3>
              <p>Create your account or login.</p>
            </div>

            <div>
              <span>2</span>
              <h3>BROWSE NOMINEES</h3>
              <p>Explore nominees in each category.</p>
            </div>

            <div>
              <span>3</span>
              <h3>CAST YOUR VOTE</h3>
              <p>Vote for your favorite nominee.</p>
            </div>

            <div>
              <span>4</span>
              <h3>LIVE RESULTS</h3>
              <p>View real-time voting progress.</p>
            </div>
          </div>
        </section>

        <section className="about-categories">
  <h2>OUR CATEGORIES</h2>

  <div className="category-line-list">
    <div className="category-line-item">
      <span>🏆</span>
      <p>MEN’S<br />BALLON D’OR</p>
    </div>

    <div className="category-line-item">
      <span>🏆</span>
      <p>WOMEN’S<br />BALLON D’OR</p>
    </div>

    <div className="category-line-item">
      <span>🧤</span>
      <p>YACHINE<br />TROPHY</p>
    </div>

    <div className="category-line-item">
      <span>⚽</span>
      <p>KOPA<br />TROPHY</p>
    </div>
  </div>
</section>

<section className="support-line-box">
  <div className="support-icon">✉</div>

  <div>
    <h2>WE’RE HERE FOR YOU</h2>
    <p>
      Have questions, suggestions, or need support? Feel free to contact us
      anytime. Your feedback helps us improve the experience.
    </p>
  </div>
</section>
      </div>

      <Footer />
    </>
  );
}

export default About;
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="Ballon D'Or logo" />
        <span>BALLON D'OR <strong>2026</strong></span>
      </div>

      <p className="footer-copy">© 2026 Ballon d'Or. All Rights Reserved.</p>

      <div className="social-media">
  <a href="#"><i className="fab fa-facebook-f"></i></a>
  <a href="#"><i className="fab fa-twitter"></i></a>
  <a href="#"><i className="fab fa-instagram"></i></a>
  <a href="#"><i className="fab fa-linkedin-in"></i></a>
  <a href="#"><i className="fab fa-youtube"></i></a>
</div>
    </footer>
  );
}

export default Footer;
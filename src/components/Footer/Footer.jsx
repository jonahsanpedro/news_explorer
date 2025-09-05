import "./Footer.css";
import github from "../../images/github.svg";
import fb from "../../images/fb.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2024 Supersite, Powered by News API</p>
      <NavLink to="/" className="footer-home__button">
        Home
      </NavLink>
      <a
        href="https://tripleten.com/"
        className="footer-tripleten__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        TripleTen
      </a>
      <img src={github} alt="GitHub Logo" className="footer-github__icon" />
      <img src={fb} alt="Facebook Logo" className="footer-fb__icon" />
    </footer>
  );
}

export default Footer;

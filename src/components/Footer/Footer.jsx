import "./Footer.css";
import github from "../../images/github.svg";
import LinkedIn from "../../images/LinkedIn.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2025 Supersite, Powered by News API</p>
      <nav className="footer__buttons">
        <div className="footer__left-spacer">
          <NavLink to="/" className="footer__home-button">
            Home
          </NavLink>
          <a
            href="https://tripleten.com/"
            className="footer__tripleten-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__right-spacer">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__github-button"
          >
            <img src={github} alt="GitHub Logo" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__linkedin-button"
          >
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;

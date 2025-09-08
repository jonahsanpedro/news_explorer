import "./Footer.css";
import github from "../../images/github.svg";
import LinkedIn from "../../images/LinkedIn.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2025 Supersite, Powered by News API</p>
      <div className="footer__buttons">
        <div className="footer__left-spacer">
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
        </div>
        <div className="footer__right-spacer">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub Logo"
              className="footer-github__icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn Logo"
              className="footer-fb__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

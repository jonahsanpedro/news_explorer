import "./Header.css";
import NewsExplorer from "../../images/NewsExplorer.svg";
import { useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import logoutIcon from "../../images/logout.svg";

function Header({
  isLoggedIn,
  user,
  handleLoginClick,
  handleRegistrationClick,
  handleLogout,
}) {
  const [activeModal, setActiveModal] = useState("");

  const location = useLocation();

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img
          src={NewsExplorer}
          alt="News Explorer Logo"
          className="header__logo"
        />
      </NavLink>
      <div className="header__right">
        <NavLink
          to="/"
          className={`header__home-button ${
            location.pathname === "/" ? " header__home-button--active" : ""
          }`}
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/saved-news"
            className={`header__link ${
              location.pathname === "/saved-news" ? "header__link_active" : ""
            }`}
          >
            Saved articles
          </NavLink>
        )}
        {isLoggedIn ? (
          <button
            className="header__username-button"
            type="button"
            onClick={handleLogout}
          >
            {user?.username}
            <img
              src={logoutIcon}
              alt="Logout"
              className="header__logout-icon"
            />
          </button>
        ) : (
          <button
            className="header__signin-button"
            type="button"
            onClick={handleLoginClick}
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

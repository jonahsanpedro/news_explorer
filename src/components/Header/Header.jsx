import "./Header.css";
import menuIcon from "../../images/menu.svg";
import NewsExplorer from "../../images/NewsExplorer.svg";
import { useLocation, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logoutIcon from "../../images/logout.svg";

function Header({
  isLoggedIn,
  user,
  handleLoginClick,
  handleRegistrationClick,
  handleLogout,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const location = useLocation();
  const homeTextRef = useRef(null);
  const savedTextRef = useRef(null);
  const barRef = useRef(null);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    let activeTextRef = location.pathname === "/" ? homeTextRef : savedTextRef;
    if (activeTextRef.current) {
      const rect = activeTextRef.current.getBoundingClientRect();
      const parentRect =
        activeTextRef.current.parentNode.parentNode.getBoundingClientRect();
      setBarStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [location.pathname, isLoggedIn]);

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img
          src={NewsExplorer}
          alt="News Explorer Logo"
          className="header__logo"
        />
      </NavLink>
      <div className="header__right" style={{ position: "relative" }}>
        <NavLink
          to="/"
          className={`header__home-button${
            location.pathname === "/" ? " header__home-button--active" : ""
          }`}
        >
          <span ref={homeTextRef}>Home</span>
        </NavLink>
        {(isLoggedIn || location.pathname === "/saved-news") && (
          <NavLink
            to="/saved-news"
            className={`header__link${
              location.pathname === "/saved-news" ? " header__link_active" : ""
            }`}
          >
            <span ref={savedTextRef}>Saved articles</span>
          </NavLink>
        )}
        {/* Animated underline bar */}
        <div
          ref={barRef}
          className="header__active-bar"
          style={{
            position: "absolute",
            bottom: 0,
            left: barStyle.left,
            width: barStyle.width,
            height: 3,
            background: location.pathname === "/saved-news" ? "black" : "white",
            borderRadius: 2,
            transition:
              "left 0.3s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1), background 0.3s",
            zIndex: 2,
          }}
        />
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
        <button
          className="header__menu-btn"
          aria-label="Menu"
          onClick={() => setDrawerOpen(true)}
        >
          <img src={menuIcon} alt="menu" style={{ width: 24, height: 24 }} />
        </button>
        {/* Mobile Drawer Markup */}
        {drawerOpen && (
          <div className="header__drawer">
            <NavLink
              to="/"
              className="header__drawer-logo-link"
              onClick={() => setDrawerOpen(false)}
            >
              <img
                src={NewsExplorer}
                alt="News Explorer Logo"
                className="header__drawer-logo"
              />
            </NavLink>
            <button
              className="header__drawer-close"
              aria-label="Close Menu"
              onClick={() => setDrawerOpen(false)}
            >
              &times;
            </button>
            <nav className="header__drawer-nav">
              <NavLink
                to="/"
                className="header__drawer-link"
                onClick={() => setDrawerOpen(false)}
              >
                Home
              </NavLink>
            </nav>
            <button
              className="header__drawer-signin"
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                handleLoginClick();
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

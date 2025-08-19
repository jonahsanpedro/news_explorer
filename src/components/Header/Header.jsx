import "./Header.css";
import NewsExplorer from "../../images/NewsExplorer.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={NewsExplorer}
        alt="News Explorer Logo"
        className="header__logo"
      />
      <p>This is the start of your final project.</p>
    </header>
  );
}

export default Header;

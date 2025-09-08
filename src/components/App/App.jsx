import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { simulateLogin, simulateRegistration } from "../../utils/auth.js";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Login from "../LoginModal/LoginModal.jsx";
import Register from "../RegisterModal/RegisterModal.jsx";
import NewsSection from "../NewsSection/NewsSection.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import SavedNews from "../SavedNews/SavedNews.jsx";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal.jsx";

function App() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  // Expose savedArticles for debugging
  window.savedArticles = savedArticles;
  const [hasSearched, setHasSearched] = useState(false);
  const [lastSearchKeyword, setLastSearchKeyword] = useState("");
  // Save article handler
  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => {
      if (prev.some((a) => a.url === article.url)) return prev;
      // Use lastSearchKeyword for all saved articles
      const keyword = lastSearchKeyword || article.keyword || "General";
      return [...prev, { ...article, keyword }];
    });
    // Update window.savedArticles for debugging
    setTimeout(() => {
      window.savedArticles = savedArticles;
    }, 0);
  };
  const location = useLocation();

  const handleLoginClick = () => {
    console.log("Login button clicked!");
    setActiveModal("login");
  };

  console.log("Current activeModal:", activeModal);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegistrationClick = () => {
    setActiveModal("register");
  };

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }
    console.log("Attempting login with:", { email, password });
    try {
      const data = await simulateLogin(email, password);
      setIsLoggedIn(true);
      setUser(data.user);
      setActiveModal(""); // Close modal on success
      setError(null); // Clear previous errors
      console.log("Login successful:", data);
    } catch (error) {
      console.log("Catch block hit for login");
      setError(error);
      // Do NOT close modal on error
      if (error instanceof Error) {
        console.error("Login failed (Error object):", error.message, error);
      } else {
        console.error("Login failed (string or other):", error);
      }
    }
  };

  const handleRegistration = async ({ email, password, username }) => {
    if (!email || !password || !username) {
      console.error("Email, password, and username are required");
      return;
    }
    console.log("Attempting registration with:", { email, password, username });
    try {
      const result = await simulateRegistration(email, password, username);
      setActiveModal(""); // Close modal on success
      setError(null); // Clear previous errors
      setShowSuccessModal(true); // Show success modal
      console.log("Registration successful:", result);
    } catch (error) {
      console.log("Catch block hit for registration");
      setError(error);
      // Do NOT close modal on error
      if (error instanceof Error) {
        console.error(
          "Registration failed (Error object):",
          error.message,
          error
        );
      } else {
        console.error("Registration failed (string or other):", error);
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveModal("");
    setError(null);
    setArticles([]);
    setSavedArticles([]);
    setIsLoading(false);
    setHasSearched(false);
  };

  const handleRemoveArticle = (article) => {
    console.log("handleRemoveArticle called with:", article);
    setSavedArticles((prev) => {
      console.log("Current savedArticles:", prev);
      const filtered = prev.filter((a) => {
        const match = a.url === article.url;
        if (match) {
          console.log("Removing article:", a);
        }
        return !match;
      });
      console.log("Filtered savedArticles:", filtered);
      return filtered;
    });
  };

  // Wrap setArticles to set hasSearched and store last search keyword
  const setArticlesAndSearch = (newArticles, keyword) => {
    setArticles(newArticles);
    setHasSearched(true);
    if (keyword) setLastSearchKeyword(keyword);
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <div
            className={
              location.pathname === "/saved-news"
                ? "saved-news__background"
                : "background__image"
            }
          >
            <Header
              handleLoginClick={handleLoginClick}
              isLoggedIn={isLoggedIn}
              user={user}
              handleRegistrationClick={handleRegistrationClick}
              handleLogout={handleLogout}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    error={error}
                    setArticles={setArticlesAndSearch}
                    setIsLoading={setIsLoading}
                    setLastSearchKeyword={setLastSearchKeyword}
                    lastSearchKeyword={lastSearchKeyword}
                  />
                }
              />
              <Route
                path="/saved-news"
                element={
                  <SavedNews
                    isLoggedIn={isLoggedIn}
                    user={user}
                    savedArticles={savedArticles}
                    handleRemoveArticle={handleRemoveArticle}
                  />
                }
              />
            </Routes>
          </div>
          {location.pathname !== "/saved-news" && (
            <>
              <NewsSection
                isLoading={isLoading}
                articles={articles}
                error={error}
                isLoggedIn={isLoggedIn}
                handleSaveArticle={handleSaveArticle}
                handleRemoveArticle={handleRemoveArticle}
                savedArticles={savedArticles}
                hasSearched={hasSearched}
              />
              <About />
            </>
          )}
          <Footer />
        </div>
        <RegistrationSuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          onSignIn={() => {
            setShowSuccessModal(false);
            setActiveModal("login");
          }}
        />
        <Login
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          handleLogin={handleLogin}
          handleRegistrationClick={handleRegistrationClick}
          onSwitch={handleRegistrationClick}
          activeModal={activeModal}
        />
        <Register
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          handleRegistration={handleRegistration}
          handleLoginClick={handleLoginClick}
          activeModal={activeModal}
          registrationError={error}
        />
      </div>
    </>
  );
}

export default App;

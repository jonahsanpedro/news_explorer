import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { simulateLogin, simulateRegistration } from "../../utils/auth.js";
import Main from "../Main/Main.jsx";
import Login from "../LoginModal/LoginModal.jsx";
import Register from "../RegisterModal/RegisterModal.jsx";
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
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
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
      setLoginError(""); // Clear previous login errors
      console.log("Login successful:", data);
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : error);
      setActiveModal("login"); // Keep login modal open on error
      console.error("Login failed:", error);
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
      setActiveModal("");
      setRegisterError("");
      setShowSuccessModal(true);
      console.log("Registration successful:", result);
    } catch (error) {
      setRegisterError(error instanceof Error ? error.message : error);
      setActiveModal("register");
      console.error("Registration failed:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveModal("");
    setLoginError("");
    setRegisterError("");
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
                : "main__background-image"
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
                    setArticles={setArticlesAndSearch}
                    setIsLoading={setIsLoading}
                    setLastSearchKeyword={setLastSearchKeyword}
                    lastSearchKeyword={lastSearchKeyword}
                    articles={articles}
                    handleSaveArticle={handleSaveArticle}
                    handleRemoveArticle={handleRemoveArticle}
                    hasSearched={hasSearched}
                    savedArticles={savedArticles}
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
              {/* <NewsSection
                isLoading={isLoading}
                articles={articles}
                isLoggedIn={isLoggedIn}
                handleSaveArticle={handleSaveArticle}
                handleRemoveArticle={handleRemoveArticle}
                savedArticles={savedArticles}
                hasSearched={hasSearched}
              /> */}
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
          error={loginError}
          setError={setLoginError}
        />
        <Register
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          handleRegistration={handleRegistration}
          handleLoginClick={handleLoginClick}
          activeModal={activeModal}
          error={registerError}
          setError={setRegisterError}
        />
      </div>
    </>
  );
}

export default App;

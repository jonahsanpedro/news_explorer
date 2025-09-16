import "./NewsSection.css";
import Preloader from "../Preloader/Preloader.jsx";
import NewsList from "../NewsList/NewsList.jsx"; // Import NewsList
import notfound from "../../images/notfound.svg";
import "./NothingFound.css";

function NewsSection({
  isLoading,
  articles,
  error,
  isLoggedIn,
  handleSaveArticle,
  handleRemoveArticle,
  savedArticles,
  hasSearched,
}) {
  const hasResults = Array.isArray(articles) && articles.length > 0;
  return (
    <>
      <section className="news-section__container">
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : hasResults ? (
          <NewsList
            articles={articles}
            isLoggedIn={isLoggedIn}
            error={error}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
            showTitle={hasResults}
            isSavedNewsPage={false}
            savedArticles={savedArticles}
          />
        ) : hasSearched ? (
          <div className="nothing-found">
            <img
              src={notfound}
              alt="Nothing found"
              className="nothing-found__image"
            />
            <h2 className="nothing-found__title">Nothing found</h2>
            <p className="nothing-found__subtitle">
              Sorry, but nothing matched your search terms.
            </p>
          </div>
        ) : null}
      </section>
    </>
  );
}

export default NewsSection;

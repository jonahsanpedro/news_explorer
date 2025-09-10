import "./SavedNews.css";

import NewsList from "../NewsList/NewsList.jsx";

function SavedNews({ isLoggedIn, user, savedArticles, handleRemoveArticle }) {
  if (!isLoggedIn) {
    return (
      <div className="saved-news__not-logged-in">
        Please log in to view your saved news articles.
      </div>
    );
  }

  // Extract keywords from saved articles
  const keywords = savedArticles.map((a) => a.keyword).filter(Boolean);
  const uniqueKeywords = [...new Set(keywords)];
  const topKeywords = uniqueKeywords.slice(0, 2);
  const otherCount = uniqueKeywords.length - topKeywords.length;
  const keywordsText =
    otherCount > 0
      ? `${topKeywords.join(", ")}, and ${otherCount} other`
      : uniqueKeywords.join(", ");

  return (
    <section className="saved-news__container">
      <h2 className="saved-news__title">Saved articles</h2>
      <p className="saved-news__username">
        {user?.username}, you have {savedArticles.length} saved articles
      </p>
      {uniqueKeywords.length > 0 && (
        <p className="saved-news__keywords-title">
          By keywords:{" "}
          <span className="saved-news__keywords-list">{keywordsText}</span>
        </p>
      )}
      {Array.isArray(savedArticles) && savedArticles.length > 0 ? (
        <NewsList
          articles={savedArticles}
          isLoggedIn={isLoggedIn}
          handleRemoveArticle={handleRemoveArticle}
          isSavedNewsPage={true}
        />
      ) : (
        <p className="saved-news__no-articles">No saved articles yet.</p>
      )}
    </section>
  );
}

export default SavedNews;

import "./NewsList.css";
import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function NewsList({
  articles,
  isLoggedIn,
  error,
  handleSaveArticle,
  handleRemoveArticle,
  isSavedNewsPage,
  showTitle,
  savedArticles,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  // Only show 'No articles found.' if error prop is set
  if (typeof error !== "undefined" && error) {
    return <p>No articles found.</p>;
  }

  if (!Array.isArray(articles) || articles.length === 0) {
    return null;
  }

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < articles.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="news-list-container">
      {showTitle && <h1 className="news-section__title">Search results</h1>}
      <div className="news-list">
        {visibleArticles.map((article, index) => (
          <NewsCard
            key={article.url || article.id || index}
            article={article}
            isLoggedIn={isLoggedIn}
            error={error}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
            isSavedNewsPage={isSavedNewsPage}
            isArticleSaved={savedArticles?.some((a) => a.url === article.url)}
          />
        ))}
      </div>
      {hasMoreArticles && (
        <button onClick={handleShowMore} className="show-more__button">
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsList;

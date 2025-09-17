import "./NewsCard.css";
import { useEffect, useState } from "react";
import cardsave from "../../images/cardsave.svg";
import cardsaved from "../../images/cardsaved.svg";
import cardsavedhover from "../../images/cardsavedhover.svg";
import { simulateSaveArticle } from "../../utils/api";

import removesaved from "../../images/removesaved.svg";
import removehover from "../../images/removehover.svg";

export function NewsCard({
  article,
  isLoggedIn,
  handleSaveArticle,
  handleRemoveArticle,
  isSavedNewsPage,
  isArticleSaved,
}) {
  const [cardSaved, setCardSaved] = useState(isArticleSaved);
  const [saveMessage, setSaveMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCardSaved(isArticleSaved);
  }, [isArticleSaved]);

  const handleSave = async () => {
    if (!cardSaved && isLoggedIn) {
      const result = await simulateSaveArticle(article);
      if (result.success) {
        setCardSaved(true);
        setSaveMessage(result.message);
        if (handleSaveArticle) {
          handleSaveArticle(article);
        }
      }
    } else if (cardSaved && isLoggedIn) {
      setCardSaved(false);
      setSaveMessage("");
      if (handleRemoveArticle) {
        console.log("Unsave button clicked (SearchPage)", article);
        handleRemoveArticle(article);
      }
    } else {
      setCardSaved(false);
      setSaveMessage("");
    }
  };

  // Format publishedAt as 'Month Day, Year'
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        {isSavedNewsPage && article.keyword && (
          <span className="news-card__keyword-badge">{article.keyword}</span>
        )}
        <img src={article.urlToImage} alt={article.title} />
        {!isSavedNewsPage && (
          <>
            <button
              onClick={handleSave}
              className="save__button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={
                  cardSaved ? cardsaved : isHovered ? cardsavedhover : cardsave
                }
                alt={cardSaved ? "Unsave" : "Save"}
              />
            </button>
            {!isLoggedIn && isHovered && (
              <div className="news-card__signin-message">
                Sign in to save articles
              </div>
            )}
          </>
        )}
        {isLoggedIn && isSavedNewsPage && (
          <>
            <button
              onClick={() => {
                console.log("Remove button clicked (SavedNewsPage)", article);
                handleRemoveArticle(article);
              }}
              className="save__button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={isHovered ? removehover : removesaved}
                alt="Remove saved article"
              />
            </button>
            {isHovered && (
              <div className="news-card__remove-message">Remove from saved</div>
            )}
          </>
        )}
      </div>
      <p className="news-card__date">{formattedDate}</p>
      <h1 className="news-card__title">{article.title}</h1>
      <p className="news-card__description">{article.description}</p>
      <footer className="news-card__footer">
        <p className="news-card__source">{article.source.name}</p>
        {cardSaved && (
          <span className="news-card__saved-message">{saveMessage}</span>
        )}
      </footer>
    </div>
  );
}

export default NewsCard;

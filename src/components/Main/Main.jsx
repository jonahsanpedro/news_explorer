import "./main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsSection from "../NewsSection/NewsSection";
import About from "../About/About";

function Main({
  isLoading,
  setIsLoading,
  setLastSearchKeyword,
  lastSearchKeyword,
  articles,
  isLoggedIn,
  handleSaveArticle,
  handleRemoveArticle,
  hasSearched,
  savedArticles,
  setArticles,
}) {
  const handleSetArticles = (articles, keyword) => {
    setArticles(articles, keyword);
  };
  return (
    <main className="main">
      <h1 className="main__title">What&apos;s going on in the world?</h1>
      <p className="main__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm
        setArticles={handleSetArticles}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        setLastSearchKeyword={setLastSearchKeyword}
        lastSearchKeyword={lastSearchKeyword}
      />
      <NewsSection
        isLoading={isLoading}
        articles={articles}
        isLoggedIn={isLoggedIn}
        handleSaveArticle={handleSaveArticle}
        handleRemoveArticle={handleRemoveArticle}
        savedArticles={savedArticles}
        hasSearched={hasSearched}
      />
      <About />
    </main>
  );
}

export default Main;

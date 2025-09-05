import "./main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({
  setArticles,
  isLoading,
  setIsLoading,
  setLastSearchKeyword,
  lastSearchKeyword,
}) {
  const handleSetArticles = (articles, keyword) => {
    setArticles(articles, keyword);
  };
  return (
    <main className="main">
      <h2 className="main__title">What's going on in the world?</h2>
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
    </main>
  );
}

export default Main;

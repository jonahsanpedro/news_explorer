import "./SearchForm.css";
import { useState } from "react";
import { newsApiBaseUrl, params } from "../../utils/constants";

function SearchForm({ setArticles, setIsLoading, setLastSearchKeyword }) {
  const [error, setError] = useState("");

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    setLastSearchKeyword(searchTerm);
    if (!searchTerm.trim()) {
      setError("Please enter a keyword");
      setIsLoading(false);
      return;
    }

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    try {
      const response = await fetch(
        `${newsApiBaseUrl}?${new URLSearchParams(
          params(searchTerm, sevenDaysAgo, new Date())
        )}`
      );
      const data = await response.json();

      console.log(
        "Articles received:",
        data.articles,
        "Type:",
        typeof data.articles,
        "IsArray:",
        Array.isArray(data.articles)
      );

      if (!Array.isArray(data.articles)) {
        setArticles([]);
        // setError("No articles found.");
        setIsLoading(false);
        return;
      }
      setArticles(data.articles, searchTerm);
      setError("");
      setIsLoading(false);
    } catch (error) {
      setError("An error occurred while fetching news.");
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e.target.search.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      {error && <div className="search-form__error">{error}</div>}
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        name="search"
        required
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

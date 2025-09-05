export const params = (userSearchTerm, sevenDaysAgo, todaysDate) => ({
  q: userSearchTerm,
  apiKey: "77f03068e53445189b5f7d1fb39eb79f",
  from: sevenDaysAgo,
  to: todaysDate,
  pageSize: 100,
});

export const mockNewsData = [
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Jane Smith",
    title: "Sample News Article 1",
    description: "This is a sample description for testing...",
    url: "https://example.com/article1",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-15T10:30:00Z",
    content: "Sample content for the article...",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Sample News Article 2",
    description: "This is another sample description for testing...",
    url: "https://example.com/article2",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-16T10:30:00Z",
    content: "Sample content for the second article...",
  },
  {
    source: { id: "al-jazeera", name: "Al Jazeera" },
    author: "Alice Johnson",
    title: "Sample News Article 3",
    description: "This is yet another sample description for testing...",
    url: "https://example.com/article3",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-17T10:30:00Z",
    content: "Sample content for the third article...",
  },
  //create 3 more fake articles
  {
    source: { id: "al-jazeera", name: "Al Jazeera" },
    author: "Alice Johnson",
    title: "Sample News Article 4",
    description: "This is yet another sample description for testing...",
    url: "https://example.com/article4",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-17T10:30:00Z",
    content: "Sample content for the fourth article...",
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Jane Smith",
    title: "Sample News Article 5",
    description: "This is a sample description for testing...",
    url: "https://example.com/article5",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-18T10:30:00Z",
    content: "Sample content for the article...",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Sample News Article 6",
    description: "This is another sample description for testing...",
    url: "https://example.com/article6",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-19T10:30:00Z",
    content: "Sample content for the second article...",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Sample News Article 7",
    description: "This is another sample description for testing...",
    url: "https://example.com/article7",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-19T10:30:00Z",
    content: "Sample content for the second article...",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Sample News Article 8",
    description: "This is another sample description for testing...",
    url: "https://example.com/article8",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-19T10:30:00Z",
    content: "Sample content for the second article...",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "John Doe",
    title: "Sample News Article 9",
    description: "This is another sample description for testing...",
    url: "https://example.com/article9",
    urlToImage: "https://picsum.photos/400/272",
    publishedAt: "2024-01-19T10:30:00Z",
    content: "Sample content for the second article...",
  },
];

export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const testUsers = [
  { email: "test@example.com", password: "password123", username: "TestUser" },
  { email: "user@example.com", password: "userpass", username: "UserOne" },
  { email: "email@email.com", password: "password", username: "JohnDoe" },
  { email: "asdf@asdf.com", password: "asdf", username: "asdf" },
];

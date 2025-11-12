# Final Project - News Explorer

For my final project I created a responsive React application that will allow users to create a login requiring an email, username and password. After successful registration users can search for the latest news articles, save your favorites, and manage them with authentication.

This application is structured with reusable functional components such as Header, Navigation, SearchForm, NewsCard and Footer as well as reusable modals for login and registration. My appliation also uses React Router for navigation between the home page (using "/" path) and the saved news page (using "/saved-news path). News articles are fetched from the News API, when submitting your search in the search form a preloader will render on the page while the results render. If users have registered successfully on News Explorer, they will have the ability to also save the articles that are rendered and will store them their own personal saved news page.
[Main Section and Search Form Rendered](/src/images/mainandsearchform.jpg)

[Github Repository](https://github.com/jonahsanpedro/news_explorer)
[Github Pull Request](https://github.com/jonahsanpedro/news_explorer/pull/1)
[Github Pages](https://jonahsanpedro.github.io/news_explorer/#/)

# News Explorer - summary

News Explorer React Application

Built a responsive news aggregator using React (functional components) with Vite/CRA, implementing modular file structures and reusable components including App, Header, Navigation, NewsCard, Preloader, and modals for login and registration.

Integrated React Router to manage multiple routes (/ for main news and /saved-news) with functional navigation links.

Implemented API interactions with NewsAPI, including keyword search, request validation, preloader animation, dynamic article rendering with “Show More” functionality, and error handling; simulated backend responses for login, token validation, and saving/deleting articles.

Styled UI to match Figma designs using component-based CSS, and deployed the frontend on Netlify/GitHub Pages.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

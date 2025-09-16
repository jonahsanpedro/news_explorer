import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader__container">
      <section className="circle-preloader"></section>
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;

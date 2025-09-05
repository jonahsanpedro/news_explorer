import about from "../../images/about.jpg";
import "./about.css";

function About() {
  return (
    <div className="about">
      <img src={about} className="about__image" alt="About the author" />
      <div className="about__content">
        <h3 className="about__title">About the author</h3>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
      </div>
    </div>
  );
}

export default About;

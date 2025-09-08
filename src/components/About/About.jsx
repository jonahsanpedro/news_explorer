import about from "../../images/drum.jpeg";
import "./about.css";

function About() {
  return (
    <div className="about">
      <img src={about} className="about__image" alt="About the author" />
      <div className="about__content">
        <h3 className="about__title">About the author</h3>
        <p className="about__description">
          My name is Jonah. I'm a frontend developer with a passion for creating
          intuitive and dynamic user experiences. I enjoy turning complex
          problems into simple, beautiful, and functional designs. When I'm not
          coding, you'll find me listening to music, playing drums, watching my
          favorite sports teams or enjoying the company of friends and family.
        </p>
      </div>
    </div>
  );
}

export default About;

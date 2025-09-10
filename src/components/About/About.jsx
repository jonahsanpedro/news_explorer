import about from "../../images/drum.jpeg";
import "./about.css";

function About() {
  return (
    <section className="about">
      <img src={about} className="about__image" alt="About the author" />
      <div className="about__content">
        <h3 className="about__title">About the author</h3>
        <p className="about__description">
          My name is Jonah. I&apos;m a frontend developer with a passion for
          creating intuitive and dynamic user experiences. I enjoy turning
          complex problems into simple, beautiful, and functional designs. When
          I&apos;m not coding, you&apos;ll find me listening to music, playing
          drums, watching my favorite sports teams or enjoying the company of
          friends and family.
        </p>
      </div>
    </section>
  );
}

export default About;

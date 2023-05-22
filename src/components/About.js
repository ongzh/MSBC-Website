import "../styles/About.css";
import load1 from "../data/about/load1.jpg";
import load2 from "../data/about/load2.jpg";
import load3 from "../data/about/load3.jpg";
import load4 from "../data/about/load4.jpg";
import ScrollAnimation from "react-scroll-animation-wrapper";

function About() {
  return (
    <div
      id="about"
      style={{
        padding: "5%",
        backgroundColor: "rgba(250,250,250,0.7)",
      }}
    >
      <h2 className="section-header" tabIndex="0">
        About Us
      </h2>
      <div className="about-container">
        <div className="about-info">
          <h1 id="filler-text">
            Welcome to McGill Universty's student-run Boxing Club.
          </h1>
          <p>
            We are a student-run SSMU club that aims to bring together both
            boxers and aspiring boxers of McGill University. The club was
            established in 2012 to provide training for students in a safe and
            social environment. We conduct training twice a week at the McGill
            Gym and <strong>people of all skill levels are welcome!</strong>
          </p>
        </div>
        <ScrollAnimation
          animateIn="fade-in-r-to-l"
          className="about-img-container"
          offset={0}
        >
          <img src={load1} alt="training 1"></img>
          <img src={load2} alt="training 2"></img>
          <img src={load3} alt="training 3"></img>
          <img src={load4} alt="training 4"></img>
        </ScrollAnimation>
      </div>
      <div className="page-divider"></div>
    </div>
  );
}

export default About;

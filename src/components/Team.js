import "../styles/Team.css";
// Keeping these here for reference
// import fed from "../data/team/fed.png";

import kevin from "../data/team2/kevin.png";
import sami2 from "../data/team2/sami2.jpeg";
import alex from "../data/team2/alex.jpg";
import alessia from "../data/team2/alessia.jpeg";
import fed from "../data/team2/fed2.jpeg";
import russel from "../data/team2/russel.jpeg";
import christy from "../data/team2/christy.jpeg";
import ScrollAnimation from "react-scroll-animation-wrapper";

const Profile = ({ role, src, alt, title, name, experience, major }) => {
  return (
    <div className={{ role }.role + "-profile-container"}>
      <img
        src={src}
        alt={alt}
        className={{ role }.role + "-profile-container_picture"}
      />

      <div className="profile-info">
        <h3 style={{ color: "crimson", marginBottom: 0 }}>{name}</h3>
        <h3>{title}</h3>
        <p>{experience}</p>
        <p>{major}</p>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div
      id="team"
      style={{ padding: "5%", backgroundColor: "rgba(230, 230, 230, 0.5)" }}
    >
      <h1 className="section-header" tabIndex="0">
        Meet the Team
      </h1>
      <div className="coach-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="coach"
            src={fed}
            alt="fed"
            title="Coach"
            name="Federico Sanchez"
            experience="Former Professional Boxer"
            major="U3 Kinesiology"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="coach"
            src={sami2}
            alt=""
            title="Coach"
            name="Sami Azhari"
            experience="Underdog Boxing"
            major="U3 Kinesiology"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="coach"
            src={alex}
            alt="Alex"
            title="Coach"
            name="Alexander Moghadam"
            experience="Amateur Boxer"
            major="U1 Desautel"
          />
        </ScrollAnimation>
      </div>
      <div className="exec-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="exec"
            src={russel}
            alt=""
            title="VP Finance"
            name="Russell Chen"
            major="U3 Accounting"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="exec"
            src={kevin}
            alt="Kev"
            title="VP Events"
            name="Kevin Liu"
            major="U1 CS"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="exec"
            src={alessia}
            alt="Alessia"
            title="VP Communications"
            name="Alessia Chehab"
            major="U2 IT & Entrepreneurship"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="exec"
            src={christy}
            alt="Christy"
            title="VP Events"
            name="Christy Abou Jaoude"
            major="U2 Finance"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Team;

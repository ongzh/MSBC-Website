import "../styles/Team.css";
// Keeping these here for reference
// import fed from "../data/team/fed.png";

import kevin from "../data/team3/kevin2024.png";
import albert from "../data/team3/albert.png"
import jack from "../data/team3/jack.png"
import alex from "../data/team2/alex.jpg";
import youdas from "../data/team3/youdas.png";
import salim from "../data/team3/salim.png";
import fed from "../data/team2/fed2.jpeg";
import russel from "../data/team2/russel.jpeg";
import sarah from "../data/team3/sarah.png";
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

function Team2024() {
  return (
    <div
      id="team"
      style={{ padding: "5%", backgroundColor: "rgba(230, 230, 230, 0.5)" }}
    >
      <h1 className="section-header" tabIndex="0">
        Meet the 2024-2025 Team
      </h1>
      <div className="coach-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="coach"
            src={fed}
            alt="fed"
            title="Head Coach & President"
            name="Federico Sanchez"
            experience="Former Professional Boxer"
            major="U4 Kinesiology"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="coach"
            src={alex}
            alt="Alex Moghadam"
            title="Coach"
            name="Alexander Moghadam"
            experience="Amateur Boxer - Hard Knox"
            major="U2 Honours in Investment Management"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="coach"
            src={youdas}
            alt=""
            title="Coach & Vice President"
            name="Youdas Yessad"
            experience="Amateur Boxer - P4P"
            major="U2 Soft. Eng."
          />
        </ScrollAnimation>
      </div>
      <div className="exec-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="coach"
            src={albert}
            alt="Albert Choi"
            title="Coach"
            name="Albert Choi"
            experience="Amateur Boxer - Underdog"
            major="U3 Kinesiology"
            
          />
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="coach"
            src={jack}
            alt="Jack Petko"
            title="Coach"
            name="Jack Petko"
            experience="Amateur Boxer"
            major="U1 Honours Econ. & Finance"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="coach"
            src={salim}
            alt="Salim"
            title="Coach"
            name="Salim Tarbouche"
            experience="Amateur Boxer - Underdog"
            major="U1 Physiology"
          />
        </ScrollAnimation>
        
      </div>
      <div className="exec-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="exec"
            src={sarah}
            alt="Sarah Ramonjavelo"
            title="VP Marketing"
            name="Sarah Ramonjavelo"
            major="U3 Chem. Eng."
            
          />
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="exec"
            src={kevin}
            alt="Kev"
            title="VP Finance"
            name="Kevin Liu"
            major="U1 Computer Science"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="exec"
            src={russel}
            alt="Russel Chen"
            title="External Consultant"
            name="Russel Chen"
            major="U4 Accounting"
          />
        </ScrollAnimation>
       
        
      </div>
    </div>
  );
}

export default Team2024;

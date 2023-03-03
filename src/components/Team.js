import "../styles/Team.css"
import fed from "../data/team/fed.png"
import vic from "../data/team/vic.jpg"
import rus from "../data/team/rus.jpg"
import ong from "../data/team/ong.jpg"
import est from "../data/team/est.jpg"


const Profile = ({role, src, alt, title,name, experience, description }) => {
    return (
      <div className={{role}.role+"-profile-container"}>
        
        <img src={src} alt={alt} className={{role}.role+"-profile-picture"} />
        
        <div className="profile-info">
          <h4 style={{color:"crimson", marginBottom:0}}>{name}</h4>
          <h4>{title}</h4>
          <p>{experience}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  

  

function Team(){
    return <div id="team" style={{padding: "5%", backgroundColor:"rgba(230, 230, 230, 0.5)"}}>
         <h1 className="section-header">Meet the Team</h1>
        <div className="coach-container">
        <Profile
        role="coach"
        src= {fed}
        alt="fed"
        title="Coach"
        name="Federico Sanchez"
        experience="Former Professional Boxer"
        description="U2 Kinesiology"
      />
      <Profile
        role="coach"
        src= {vic}
        alt=""
        title="Coach + VP Marketing"
        name="Vicknesh Suresh"
        experience="Amateur Kickboxer"
        description="U2 CS & BIO"
      />
      </div>
      <div className="exec-container">
      <Profile
        role="exec"
        src= {rus}
        alt=""
        title="VP Finance"
        name="Russell Chen"
        description="U2 Accounting"
      />
      <Profile
        role="exec"
        src=  {ong}
        alt=""
        title="President (Retired)"
        name="Anthony Ong"
        description="U4 CS & ECON"
      />
      <Profile
        role="exec"
        src= {est}
        alt=""
        title="VP Communications"
        name="Esther Gao"
        description="U5+ LAW"
      />
      </div>
    </div>;
}

export default Team;
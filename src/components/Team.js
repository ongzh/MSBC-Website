import "../styles/Team.css"
import fed from "../data/team/fed.png"
import vic from "../data/team/vic.jpg"
import rus from "../data/team/rus.jpg"
import ong from "../data/team/ong.jpg"
import est from "../data/team/est.jpg"


const Profile = ({role, src, alt, title,name, experience, major }) => {
    return (
      <div className={{role}.role+"-profile-container"}>
        
        <img src={src} alt={alt} className={{role}.role+"-profile-picture"} />
        
        <div className="profile-info">
          <h4 style={{color:"crimson", marginBottom:0}}>{name}</h4>
          <h4>{title}</h4>
          <p>{experience}</p>
          <p>{major}</p>
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
        major="U2 Kinesiology"
      />
      <Profile
        role="coach"
        src= {vic}
        alt=""
        title="Coach + VP Marketing"
        name="Vicknesh Suresh"
        experience="Amateur Kickboxer"
        major="U2 CS & BIO"
      />
      </div>
      <div className="exec-container">
      <Profile
        role="exec"
        src= {rus}
        alt=""
        title="VP Finance"
        name="Russell Chen"
        major="U2 Accounting"
      />
      <Profile
        role="exec"
        src=  {ong}
        alt=""
        title="President"
        name="Anthony Ong"
        major="U4 CS & ECON"
      />
      <Profile
        role="exec"
        src= {est}
        alt=""
        title="VP Communications"
        name="Esther Gao"
        major="U5+ LAW"
      />
      </div>
    </div>;
}

export default Team;
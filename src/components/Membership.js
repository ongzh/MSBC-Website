import waiver from "../data/files/insurance.pdf";
import "../styles/Membership.css";
import members_pic from "../data/schedule.jpg";
import ScrollAnimation from "react-scroll-animation-wrapper";

//var interestForm = "https://forms.gle/AJnkozFkwJMctmRs9"

function Membership() {
  return (
    <div
      id="membership"
      style={{
        padding: "5%",
        color: "black",
        npmbackgroundImage:
          "linear-gradient(rgb(250, 250, 250),rgb(230,230,230))",
      }}
    >
      <h2 className="section-header" tabIndex="0">
        Fall 2022-Winter 2023 Membership
      </h2>
      <div className="membership-container">
        <div className="membership-info-container">
          <h3>Membership fees</h3>
          <ul>
            <li className="bag-list-logo">
              Membership fees are $55 per semester or $100 for two semesters.
            </li>
            <li className="bag-list-logo">
              As a member, you are able to order training equipment through us
              at a discount rate! Talk to one of our execs for more info.
            </li>
            <li className="bag-list-logo" style={{ color: "crimson" }}>
              {" "}
              Due to the increase in costs of room booking at the McGill Gym,
              post-covid, there has been an increase in prices of our membership
              fees in 2022.{" "}
            </li>
          </ul>
          <h3>Required documents</h3>
          <ul>
            <li className="bag-list-logo">
              Before you attend your first training session, please fill up the
              following <a href={waiver}>waiver form</a> and send it in to{" "}
              <a href="mailto:mcgillboxingclub@ssmu.ca">
                mcgillboxingclub@ssmu.ca
              </a>
              . Note that you have to submit the waiver form annually.
            </li>
          </ul>
        </div>

        <div className="member-pic-container">
          <ScrollAnimation animateIn="fade-in" offset={0}>
            <img src={members_pic} alt="" className="members-pic"></img>
          </ScrollAnimation>
          <p>Check out our new Hayabusa training gear!</p>
        </div>
      </div>
      <div className="page-divider"></div>
    </div>
  );
}

export default Membership;

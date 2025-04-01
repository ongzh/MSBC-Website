// import schedule from "../data/membership.jpg";
import members_pic2023 from "../data/membership2.jpg";
import members_pic2025 from "../data/members2025.jpg";
import "../styles/Schedule.css";
import ScrollAnimation from "react-scroll-animation-wrapper";

function Schedule() {
  return (
    <div
      id="schedule"
      style={{
        padding: "5%",
        backgroundColor: "rgba(250, 250, 250, 0.7)",
      }}
    >
      <h1 className="section-header" tabIndex="0">
        Training Schedule
      </h1>
      <p>
        We try our best to update this schedule regularly. Follow us on social
        media for the latest updates! Our training schedule is usually only
        finalized 1-2 weeks <strong>after</strong> the start of the semester.
      </p>
      <div id="schedule-container">
        <div id="schedule-img-container">
          <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
            <img
              src={members_pic2023}
              alt="training session at the gym"
              id="schedule-img"
            >
            </img>
            <img
              src={members_pic2025}
              alt="training session at the gym"
              id="schedule-img"
            >
            </img>
          </ScrollAnimation>
          <p>Training session at the McGill Gym,  Fall 2023(Above) Winter 2025(Below)</p>
        </div>

        <div id="schedule-info-container">
          <div id="schedule-info">
            <h2> Fall 2024</h2>
            <ul className="semester-schedule">
              <li>Fridays: 4:30P.M.- 6:00P.M. </li>
              <li>Sundays: 4:30P.M. - 6:30P.M.</li>
              <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
            </ul>
            <br />
            <h2> Winter 2025</h2>
            <ul className="semester-schedule">
              <li>Fridays: 4:30P.M.- 6:00P.M.</li>
              <li>Sundays: 4:30P.M. - 6:30P.M.</li>
              <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

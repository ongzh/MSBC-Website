import schedule from "../data/membership.jpg";
import "../styles/Schedule.css";


function Schedule(){
    return <div id="schedule" style={{padding: "5%", backgroundColor: "rgba(250, 250, 250, 0.7)"}}>
        <h1 className="section-header">Training Schedule</h1>
        <p>We try our best to update this schedule regularly. Follow us on social media for the latest updates! Our training schedule is usually only finalized 1-2 weeks <strong>after</strong> the start of the semester.</p>
        <div id="schedule-container">
            
            <div id="schedule-img-container">
            <img src={schedule} alt="" id="schedule-img"></img>
            <p>Training session at the McGill Gym, circa Fall 2022</p>
            </div>
            
            <div id='schedule-info-container'>
            <div id="schedule-info"> 
            <h2>Fall 2022</h2>
            <ul className="semester-schedule">
                <li>Fridays: 3.00P.M.- 4.30P.M. (Starting Sept 23)</li>
                <li>Sundays: 3.30P.M. - 5.30P.M.</li>
                <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
            </ul>
            <br></br>
            <h2> Winter 2023</h2>
            <ul className="semester-schedule">
                <li>Thursdays: 4.45P.M.- 6.15P.M. (Starting Jan 19)</li>
                <li>Sundays: 4.00P.M. - 6.00P.M.</li>
                <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
            </ul>
            </div>
            </div>
        </div>
        
    </div>;


}

export default Schedule
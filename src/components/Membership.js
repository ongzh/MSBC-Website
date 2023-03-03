import waiver from "../data/insurance.pdf"
import "../styles/Membership.css"
import members_pic from "../data/membership.jpg"


//var interestForm = "https://forms.gle/AJnkozFkwJMctmRs9"

function Membership(){
    return <div id="membership" style={{padding: "5%", color: "black", npmbackgroundImage:"linear-gradient(rgb(250, 250, 250),rgb(230,230,230))"}}>
    <h1 className="section-header">Fall 2022-Winter 2023 Membership</h1>
    <div className="membership-container">
    
    <div className='membership-info'>
    <h2 >Membership fees</h2>
        <ul>
            <li className="bag-list-logo">Membership fees are $55 per semester or $100 for two semesters.</li>
            <li className="bag-list-logo" style={{color: "crimson"}}> Due to the increase in costs of room booking at the McGill Gym, post-covid, there has been an increase in prices of our membership fees in 2022. </li>
        </ul>
    <h2>Documents</h2>
    <ul>
        <li className="bag-list-logo">Before you attend your first training session, please fill up the following <a href={waiver}>waiver form</a> and send it in to <a href="mailto:mcgillboxingclub@ssmu.ca">mcgillboxingclub@ssmu.ca</a>. Note that you have to submit the waiver form annually.</li>
    </ul>
    </div>

    <div style={{alignItems: "center"}}>
    <img src={members_pic} alt="" className="members-pic"></img>
    <p>Training session at the McGill Gym, circa Fall 2022</p>
    </div>

    </div>
</div>;
}

export default Membership;
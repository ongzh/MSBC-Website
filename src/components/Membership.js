import waiver from "../data/insurance.pdf"


//var interestForm = "https://forms.gle/AJnkozFkwJMctmRs9"

function Membership(){
    return <div id="membership" style={{padding: "5%", color: "black", npmbackgroundImage:"linear-gradient(rgb(250, 250, 250),rgb(230,230,230))"}}>
    <h1 className="section-header">Fall 2022-Winter 2023 Membership</h1>
    <br/>
    <h2>Membership fees</h2>
        <ul style={{fontSize: "1.25rem"}}>
            <li>Membership fees are $55 per semester or $100 for two semesters.</li>
            <li style={{color: "crimson"}}> Due to the increase in costs of room booking at the McGill Gym, post-covid, there has been an increase in prices of our membership fees in 2022. </li>
        </ul>
    <h2>Documents</h2>
    <ul style={{fontSize: "1.25rem"}}>
        <li>Before you attend your first training session, please fill up the following <a href={waiver}>waiver form</a> and send it in to <a href="mailto:mcgillboxingclub@ssmu.ca">mcgillboxingclub@ssmu.ca</a>. Note that you have to submit the waiver form annually.</li>
    </ul>

    
    
</div>;
}

export default Membership;
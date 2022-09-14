import waiver from "../data/insurance.pdf"


var interestForm = "https://forms.gle/AJnkozFkwJMctmRs9"

function Membership(){
    return <div id="membership" style={{padding: "5%", color: "black", npmbackgroundImage:"linear-gradient(rgb(250, 250, 250),rgb(230,230,230))"}}>
    <h1 style={{fontFamily: "Georgia, serif", fontSize: "calc(10px + 3vw)", textAlign: "center", color: "crimson"}}>Fall 2022-Winter 2023 Membership</h1>
    <br/>
    <p style={{fontFamily: "Georgia, serif", fontSize: "20px", textAlign: "center", color: "black"}}>Before you attend your first training session, please fill up the following <a href={interestForm}> interest form</a> as well as this year's <a href={waiver}>waiver form</a> and send in to mcgillboxingclub@ssmu.ca
    </p>
    
    
</div>;
}

export default Membership;
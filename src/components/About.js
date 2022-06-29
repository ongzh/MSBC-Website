import {Carousel} from "react-bootstrap";
import displays from "./Displays"

function display_boxers(){
    return <div>
        <Carousel controls={true}>
            {displays.map(({src}) => <Carousel.Item interval={3500}><img src={src} alt={""} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "70vw", height: "auto", overflow: "hidden"}}/> </Carousel.Item>)}
        </Carousel>
    </div>;
}

function About() {
    const intro = "We are a student-run club that aims to bring together both boxers and aspiring boxers of McGill University and provide trainings in a safe and social environment. The club is co-ed and people of all skill levels are welcome! ";

    return <div id="about"  style={{padding: "5%",backgroundImage:  "linear-gradient(to bottom, rgb(30,30,30) 55%, rgb(220,220, 220) 45%)"}}>
        <h1 style={{fontSize: "calc(15px + 3vw)", paddingBottom: "2%", fontFamily: "Georgia, serif", color: 'crimson'}}>About Us</h1>
        <br/>
        {display_boxers()}
        <br/>
        <p style={{fontSize: "2vw", fontFamily: "Georgia, cursive", textAlign: "center", color:"black"}}>{intro}</p>
    </div>;
}

export default About;
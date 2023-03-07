import { AiOutlineFacebook, AiOutlineMail, AiOutlineInstagram} from "react-icons/ai";
import logo from "../data/logo.png";
import "../styles/Footer.css"
/*
<Container style={{height: "calc(110px + 15vh)"}} fluid>
            <br/>
            <Row><img src={logo} alt="" className="footer-logo" roundedCircle></img></Row>
            <br/>
            <Row>
                <div style={{paddingLeft: "6vw"}}><a href="https://www.facebook.com/groups/146481348826920"><FaFacebookSquare color="#6bbcff" size="6vh"/></a></div>
                <div><a href="https://www.instagram.com/mcgillssmuboxing/"><FaInstagramSquare size="6vh" color="#E1306C"/></a></div>
                <div style={{paddingRight: "6vw"}}><a href="mailto:mcgillboxingclub@ssmu.ca"><AiOutlineMail size="6vh" color="#6bbcff" /></a></div>
            </Row>
        </Container>
*/
function Footer() {
   
    return <div className="footer"style={{backgroundColor: 'rgba(30,30,30,1)'}}> 
            <img src={logo} alt="" className="footer-logo"></img>
            <div className="media-container">
        
                <a className= "media-icon" href="https://www.facebook.com/groups/146481348826920"><AiOutlineFacebook className="media-icon-img" /></a>
                <a className= "media-icon" href="https://www.instagram.com/mcgillssmuboxing/"><AiOutlineInstagram className="media-icon-img"/></a>
                <a className= "media-icon" href="mailto:mcgillboxingclub@ssmu.ca"><AiOutlineMail className="media-icon-img" /></a>
            
            </div>
        <div id='copyright'>
            &copy; McGill Student Boxing Club 2022
        </div>
        <div id='credits'>
            Designed & Developed by <span id='ozh'> OZH</span>
        </div>
       
    </div>;
}

export default Footer;
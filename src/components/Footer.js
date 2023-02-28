import { Col, Container, Row, Image} from "react-bootstrap";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
import logo from "../data/logo.png";

function Footer() {
    const fixed_logo = {
        width: "125px",
        height: "100px",
        margin: "0 auto",
    };
    return <div style={{backgroundColor: 'rgba(30,30,30,1)'}}> 
        <Container style={{height: "calc(110px + 15vh)"}} fluid>
            <br/>
            <Row><Image src={logo} style={fixed_logo} roundedCircle></Image></Row>
            <br/>
            <Row>
                <Col align="center" style={{paddingLeft: "6vw"}}><a href="https://www.facebook.com/groups/146481348826920"><FaFacebookSquare color="#6bbcff" size="6vh"/></a></Col>
                <Col align="center"><a href="https://www.instagram.com/mcgillssmuboxing/"><FaInstagramSquare size="6vh" color="#E1306C"/></a></Col>
                <Col align="center" style={{paddingRight: "6vw"}}><a href="mailto:mcgillboxingclub@ssmu.ca"><AiOutlineMail size="6vh" color="#6bbcff" /></a></Col>
            </Row>
        </Container>
        <div id='copyright'>
            &copy; McGill Student Boxing Club 2022
        </div>
        <div id='credits'>
            Designed & Developed by <span id='ozh'> OZH</span>
        </div>

       
    </div>;
}

export default Footer;
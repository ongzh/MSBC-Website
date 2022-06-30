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
    return <div style={{backgroundImage:"linear-gradient(rgb(60, 60, 60),rgb(30,30,20))"}}> 
        <Container style={{height: "calc(110px + 15vh)"}} fluid>
            <br/>
            <Row><Image src={logo} style={fixed_logo} roundedCircle></Image></Row>
            <br/>
            <Row>
                <Col align="center" style={{paddingLeft: "5vw"}}><a href="https://www.facebook.com/groups/146481348826920"><FaFacebookSquare color="#6bbcff" size="5vh"/></a></Col>
                <Col align="center"><a href="https://www.instagram.com/therealmcgillfightclub/"><FaInstagramSquare size="5vh" color="#E1306C"/></a></Col>
                <Col align="center" style={{paddingRight: "5vw"}}><a href="mailto:mcgillboxingclub@ssmu.ca"><AiOutlineMail size="5vh" color="#6bbcff" /></a></Col>
            </Row>
        </Container>
        <div align="center">
            &copy; McGill Student Boxing Club 2022
        </div>
        <br/>
    </div>;
}

export default Footer;
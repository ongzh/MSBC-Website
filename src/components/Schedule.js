import schedule from "../data/schedule.jpg";
import { Card, Row, Col } from 'react-bootstrap';

const styles = {
    card: {
      backgroundColor: 'rgba(230,230,230, 0.5)',
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      height: '100%'
    },
    cardText:{
        color: 'black',
    }
}

function Schedule(){
    return <div id="schedule" style={{padding: "5%", backgroundColor: "rgba(250, 250, 250, 0.7)"}}>
        <h1 style={{fontFamily: "Georgia, serif", fontSize: "calc(15px + 3vw)", textAlign: "center", color: "crimson"}}>Schedule</h1>
        <br/>
        <p style={{fontSize: "23px", color: "crimson"}}><strong> Current Schedule (Updated Fall 2022). </strong>
        </p>
       
        <Card className="m-2 border-0 shadow" style={styles.card}>
            <Row>
            <Col>
              <Card.Body>
              <Card.Text as="h4" style={styles.cardText}>
              <h2 style={{fontFamily: "Georgia, serif"}}>Membership fees</h2>
        <ul style={{fontSize: "20px"}}>
            <li>Membership fees are $55 per semester or $100 for two semesters.</li>
            <li style={{color: "crimson"}}> Due to an increase in costs of room booking at the McGill Gym, there has been an increase in prices of our membership fees. </li>
        </ul>
        <h2 style={{fontFamily: "Georgia, serif"}}>Fall 2021</h2>
        <ul style={{fontSize: "20px"}}>
            <li>Friday: 3.00P.M.- 4.30P.M.</li>
            <li>Sunday: 3.30P.M. - 5.30P.M.</li>
            <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
        </ul>
        <h2 style={{fontFamily: "Georgia, serif"}}>Winter 2022</h2>
        <ul style={{color:"crimson", fontSize: "20px"}}>
            <li>
            T.B.A. January 2023
            </li>
        </ul>
              </Card.Text>
              </Card.Body>
            </Col>
                <Col className="d-none d-lg-block">
                    <Card.Img src={schedule} style={styles.cardImage}/>
                </Col>
            </Row>
        </Card>


        
    </div>;


}

export default Schedule
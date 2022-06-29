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
        <p style={{fontSize: "23px", color: "crimson"}}><strong> *Schedule and location for Fall 2022 will be updated in late August. </strong>
        </p>
        <p style={{fontSize: "20px", color: "black"}}>We usually train twice a week, on Wednesdays and Sundays. As of right now, classes are located outdoors at Jeanne-Mance Park and will take place weather permitting (we are currently waiting on the green light for indoor classes).
        </p>
        <Card className="m-2 border-0 shadow" style={styles.card}>
            <Row>
            <Col>
              <Card.Body>
              <Card.Text as="h4" style={styles.cardText}>
              <h2 style={{fontFamily: "Georgia, serif"}}>Membership fees</h2>
        <ul style={{fontSize: "20px"}}>
            <li>Membership fees are $45 per semester or $80 for two semesters.</li>
            <li style={{color: "crimson"}}> Due to uncertainty of the Fall 2021 semester, we would be collecting fees of $10 per month instead </li>
        </ul>
        <h2 style={{fontFamily: "Georgia, serif"}}>Fall 2021</h2>
        <ul style={{fontSize: "20px"}}>
            <li>Wednesday: 4.00P.M.- 6.00P.M.</li>
            <li>Sunday: 3.00P.M. - 5.00P.M.</li>
            <li>Location: Jeanne-Mance Park (Right behind the McGill Gym)</li>
        </ul>
        <h2 style={{fontFamily: "Georgia, serif"}}>Winter 2022</h2>
        <ul style={{color:"crimson", fontSize: "20px"}}>
            <li>
            Due to the current Covid-19 situation, all boxing club activities are on hold for Winter 2022. Do join our facebook group to get the latest updates.
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
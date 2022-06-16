import schedule from "../data/schedule.jpg";
import { Card, Row, Col } from 'react-bootstrap';

const styles = {
    card: {
      backgroundColor: 'rgb(33,33,33)',
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      height: '100%'
    }
}

function Schedule(){
    return <div id="schedule" style={{padding: "5%", backgroundColor:"rgb(15,15,15)"}}>
        <h1 style={{fontFamily: "Georgia, serif", fontSize: "calc(15px + 3vw)", textAlign: "center", color: "red"}}>Schedule</h1>
        <br/>
        <p style={{fontSize: "20px"}}>We usually train twice a week, on Wednesdays and Sundays. As of right now, classes are located outdoors at Jeanne-Mance Park and will take place weather permitting (we are currently waiting on the green light for indoor classes).
        </p>
        <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>
            <Col>
              <Card.Body>
              <Card.Text as="h4" style={styles.cardText}>
              <h2 style={{fontFamily: "Georgia, serif"}}>Membership fees</h2>
        <ul>
            <li>Membership fees are $45 per semester or $80 for two semesters.</li>
            <li style={{color: "red"}}> Due to uncertainty of the Fall 2021 semester, we would be collecting fees of $10 per month instead </li>
        </ul>
        <h2 style={{fontFamily: "Georgia, serif"}}>Fall 2021</h2>
        <ul>
            <li>Wednesday: 4.00P.M.- 6.00P.M.</li>
            <li>Sunday: 3.00P.M. - 5.00P.M.</li>
            <li>Location: Jeanne-Mance Park (Right behind the McGill Gym)</li>
        </ul>
        <h2 style={{fontFamily: "Georgia, serif"}}>Winter 2022</h2>
        <ul style={{color:"red"}}>
            <li>
            Due to the current Covid-19 situation, all boxing club activities are on hold for Winter 2022. Do join our facebook group to get the latest updates.
            </li>
        </ul>
              </Card.Text>
              </Card.Body>
            </Col>
                <Col>
                    <Card.Img src={schedule} style={styles.cardImage}/>
                </Col>
            </Row>
        </Card>


        
    </div>;


}

export default Schedule
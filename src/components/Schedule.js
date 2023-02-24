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
        <h1 style={{fontSize: "calc(15px + 3vw)", textAlign: "center", color: "crimson"}}>Schedule</h1>
        <br/>
        <h2 style={{fontSize: "23px", color: "crimson"}}><strong> Current Schedule (Updated Winter 2023). </strong>
        </h2>
        
        <Card className="m-2 border-0 shadow" style={styles.card}>
            <Row>
            <Col>
              <Card.Body>
              <Card.Text style={styles.cardText}>
              
            <h2>Fall 2022</h2>
            <ul style={{fontSize: "20px"}}>
                <li>Friday: 3.00P.M.- 4.30P.M. (Starting Sept 23)</li>
                <li>Sunday: 3.30P.M. - 5.30P.M.</li>
                <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
            </ul>
            <h2> Winter 2023</h2>
            <ul style={{fontSize: "20px"}}>
                <li>Thursday: 4.45P.M.- 6.15P.M. (Starting Jan 19)</li>
                <li>Sunday: 4.00P.M. - 6.00P.M.</li>
                <li>Location: Spin Room (Inside the McGill Gym, B2)</li>
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
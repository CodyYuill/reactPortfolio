import "../App.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Headshot from "../assets/headshot.jpg";

let styles = {
    img: {
        width: "50%",
        display: "inline-block"
    },
    text: {
        display: "inline-block",
        fontSize: "20px",
        textAlign: "center"
    },
    card: {
        padding: "20px"
    }
}

function About() {
    return (
        <>
        <Container>
            <Card bg="dark" style={styles.card}>
                <Row className="align-items-center"> 
                    <Col>
                        <Image src={Headshot} className="float-left" fluid></Image>
                    </Col>
                    <Col>
                        <p style={styles.text}>An aspiring Full-Stack developer currently taking Carleton University’s coding bootcamp. Also Graduated from Algonquin College’s Game Development program in March 2020.</p>
                    </Col>
                </Row>
            </Card>
        </Container>
        </>
    );
}

export default About;

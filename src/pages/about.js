import "../App.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
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
    }
}

function About() {
    return (
        <>
        <Container>
            <Row className="align-items-center">
                <Col>
                    <Image src={Headshot} className="float-left" fluid></Image>
                </Col>
                <Col>
                    <p style={styles.text}>I’m a young aspiring Full-Stack developer currently taking Carleton University’s coding bootcamp. Also Graduated from Algonquin College’s Game Development program in March 2020.</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default About;

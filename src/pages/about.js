import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Headshot from "../assets/headshot.jpg";
import Resume from "../assets/CodyYuill_Resume.pdf";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let styles = {
    img: {
        width: "50%",
        display: "inline-block",
    },
    text: {
        display: "inline-block",
        fontSize: "20px",
        textAlign: "center",
    },
    card: {
        padding: "20px",
    },
    contactInfo: {
        marginTop: "15px",
        marginRight: "45px",
        marginLeft: "45px",
        fontSize: "25px",
        display: "inline-block",
        alignItems: "center",
        alignText: "center",
    },
    resumeBtn: {
        fontSize: "19px",
    },
    container: {
        alignItems: "center",
        alignText: "center",
    },
};

function About() {
    return (
        <>
            <Container>
                <Card bg="dark" style={styles.card}>
                    <Row className="align-items-center">
                        <Col sm={12} md={6}>
                            <Image
                                src={Headshot}
                                className="float-left"
                                fluid
                            ></Image>
                        </Col>
                        <Col>
                            <p style={styles.text}>
                                An aspiring Full-Stack developer currently
                                taking Carleton University’s coding bootcamp.
                                Also Graduated from Algonquin College’s Game
                                Development program in March 2020.
                            </p>
                            <p style={styles.contactInfo}>
                                <FontAwesomeIcon icon={["fab", "github"]} />
                                <a
                                    href="https://github.com/CodyYuill"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    /CodyYuill
                                </a>
                            </p>
                            <p style={styles.contactInfo}>
                                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                                <a
                                    href="https://linkedin.com/in/CodyYuill"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    /CodyYuill
                                </a>
                            </p>
                            <p style={styles.contactInfo}>
                                <FontAwesomeIcon icon="envelope" />{" "}
                                codyyuill@hotmail.com
                            </p>
                            <p style={styles.contactInfo}>
                                <FontAwesomeIcon icon="mobile-alt" />{" "}
                                (613)222-2982
                            </p>
                            <a href={Resume} download>
                                <Button variant="info" style={styles.resumeBtn}>
                                    <FontAwesomeIcon icon="file-download" />{" "}
                                    Resume
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
}

export default About;

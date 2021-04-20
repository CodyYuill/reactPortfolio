import Resume from "../assets/CodyYuill_Resume.pdf"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let styles = {
    contactInfo:{
        marginRight: "15px",
        marginLeft: "10px",
        fontSize: "25px",
        display: "inline-block"
    },
    resumeBtn:{
        fontSize: "19px"
    },
    container: {
        alignItems: "center",
        alignText:"center"
    }
}

function Contact() {
    return (
        <>
            <Container>
                <Col style={styles.container}>
                    <p style={styles.contactInfo}>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        <a
                            href="https://github.com/CodyYuill"
                            target="_blank"
                            rel="noreferrer"
                            >
                            {" "}/CodyYuill
                        </a>
                    </p>
                    <p style={styles.contactInfo}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        <a
                            href="https://linkedin.com/in/CodyYuill"
                            target="_blank"
                            rel="noreferrer"
                            >
                            {" "}/CodyYuill
                        </a>
                    </p>
                    <p style={styles.contactInfo}>
                        <FontAwesomeIcon icon="envelope" /> codyyuill@hotmail.com
                    </p>
                    <p style={styles.contactInfo}>
                        <FontAwesomeIcon icon="mobile-alt" /> (613)222-2982
                    </p>
                    <a href={Resume} download>
                        <Button variant="info" style={styles.resumeBtn}>
                        <FontAwesomeIcon icon="file-download" /> Resume
                        </Button>
                    </a>
                </Col>
            </Container>
        </>
    );
}

export default Contact;

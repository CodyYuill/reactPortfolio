import Resume from "../assets/CodyYuill_Resume.pdf"
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let styles = {
    contactInfo:{
        marginRight: "15px",
        margiLeft: "10px",
        fontSize: "25px",
        display: "inline-block"
    },
    resumeBtn:{
        fontSize: "19px"
    }
}

function Contact() {
    return (
        <>
            <Container>
                    <Row>
                        <p style={styles.contactInfo}>
                            {/* <i className="fab fa-github-square"></i> */}
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
                            <FontAwesomeIcon icon="envelope" />
                            {" "}
                            codyyuill@hotmail.com
                        </p>
                        <p style={styles.contactInfo}>
                            <FontAwesomeIcon icon="mobile-alt" /> (613)222-2982
                        </p>
                        <p>
                            <a href={Resume} download>
                                <button className="btn btn-info" style={styles.resumeBtn}>
                                <FontAwesomeIcon icon="file-download" /> Resume
                                </button>
                            </a>
                        </p>
                    </Row>
            </Container>
        </>
    );
}

export default Contact;

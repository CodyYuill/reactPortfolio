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
    maxWidth: "350px",
    maxHeight: "350px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    display: "inline-block",
    fontSize: "18px",
  },
  card: {
    padding: "20px",
    width: "50%",
    minWidth: "400px",
    margin: "0 auto",
    marginTop: "20px",
  },
  contactInfo: {
    marginTop: "15px",
    marginRight: "45px",
    fontSize: "25px",
    display: "inline-block",
    alignItems: "center",
    alignText: "center",
    textAlign: "center",
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
            <Col sm={12} className="align-items-center">
              <Image
                className="align-items-center"
                style={styles.img}
                src={Headshot}
              ></Image>
            </Col>
            <Col>
              <Row className="align-items-center">
                <p style={styles.contactInfo}>
                  <a
                    href="https://github.com/CodyYuill"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={["fab", "github"]}
                    />
                  </a>
                  <span
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                  ></span>
                  <a
                    href="https://linkedin.com/in/CodyYuill"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={["fab", "linkedin"]}
                    />
                  </a>
                </p>
              </Row>
              <p style={styles.text}>
                Full stack web developer using knowledge of game development to
                create mobile first environments largely focused on UI/UX.
                Recently earned a certificate in full stack development from
                Carleton University, developing skills in Javascript, CSS, API???s
                and responsive web design. I???ve experienced working in agile
                environments during a recent project where I worked in a group
                of three to create a single page web-app that allows users to
                search a song by title and artist to receive various information
                about the song, such as the lyrics and album name. With each new
                project I strive to write clean understandable code while
                focusing on creating a good UX. I look forward to applying my
                skills to a quality-driven team to create engaging and memorable
                experiences on the web.
              </p>
              <p style={styles.contactInfo}>
                <FontAwesomeIcon icon="envelope" /> codyyuill48@gmail.com
              </p>
              <p style={styles.contactInfo}>
                <FontAwesomeIcon icon="mobile-alt" /> (613)222-2982
              </p>
              <a href={Resume} style={styles.contactInfo} download>
                <Button variant="info" style={styles.resumeBtn}>
                  <FontAwesomeIcon icon="file-download" /> Resume
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

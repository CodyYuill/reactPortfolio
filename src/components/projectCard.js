import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

let styles = {
    a: {
        color: "white",
        textDecoration: "none"
    },
    text: {
        color: "white"
    },
    card: {
        borderRadius: "0"
    }
};


function ProjectCard(props) {
  return (
    <>
      <Card className="bg-dark text-center" style={styles.card}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={props.id} style={styles.a}>
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.id}>
          <Card.Body style={styles.text}>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default ProjectCard;

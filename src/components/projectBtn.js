import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

let styles = {
    color: "white",
    textDecoration: "none",
    width: "350px",
    wordWrap: "break-word",
    fontSize: "25px"

};



function ProjectBtn(props) {
    return (
        <>
            <Card.Header>
                <Button
                    variant="link"
                    style={styles}
                    onClick={props.handleClick}
                    id={props.id}
                >
                    {props.id}
                </Button>
            </Card.Header>
        </>
    );
}

export default ProjectBtn;

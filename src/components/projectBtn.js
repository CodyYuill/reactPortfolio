import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

let btnStyles = {
    card: {
        display: "block",
        width: "500px"
    },
    vert: {
        color: "white",
        textDecoration: "none",
        //display: "block",
        width: "100%",
        wordWrap: "break-word",
        fontSize: "25px",
        textAlign: "center",
    },
    hor: {
        color: "white",
        textDecoration: "none",
        //alignSelf: "stretch",
        width: "100%",
        fontSize: "20px",
    },
};

let cardStyles = {
    vert: {
        display: "block",
        width: "470px",
        alignItems: "center"
    },
    hor: {

    },
};

function ProjectBtn(props) {
    return (
        <Card.Header style={cardStyles[props.vOrH]}>
            <Button
                variant="link"
                style={btnStyles[props.vOrH]}
                onClick={props.handleClick}
                id={props.id}
                block
            >
                {props.id}
            </Button>
        </Card.Header>
    );
}

export default ProjectBtn;

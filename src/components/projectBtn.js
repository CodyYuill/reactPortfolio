import Button from "react-bootstrap/Button";

let styles = {
    color: "white",
    backgroundColor: "grey",
    textDecoration: "none",
    display: "block",
    width: "100%",
    wordWrap: "break-word",
    fontSize: "25px",
    textAlign: "center",
};

function ProjectBtn(props) {
    return (
        <Button
            variant="link"
            style={styles}
            onClick={props.handleClick}
            id={props.id}
            block
        >
            {props.id}
        </Button>
    );
}

export default ProjectBtn;

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

let styles = {
    vert: {
        color: "white",
        textDecoration: "none",
        width: "350px",
        wordWrap: "break-word",
        fontSize: "25px",
        textAlign: "center",
    },
    hor: {
        color: "white",
        textDecoration: "none",
        alignSelf: "stretch",
        width: "100%",
        fontSize: "20px",
    },
};

function ProjectBtn(props) {
    return (
        <>
            <Card.Header>
                <Button
                    className="btn-group"
                    variant="link"
                    style={styles.hor}
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

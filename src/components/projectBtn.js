import Button from "react-bootstrap/Button";

let styles = {
    no:{
        color: "white",
        backgroundColor: "grey",
        textDecoration: "none",
        display: "block",
        width: "100%",
        wordWrap: "break-word",
        fontSize: "25px",
        textAlign: "center",

    },
    yes:{
        color: "grey",
        backgroundColor: "white",
        textDecoration: "none",
        display: "block",
        width: "100%",
        wordWrap: "break-word",
        fontSize: "25px",
        textAlign: "center",

    }
};

function ProjectBtn(props) {
  return (
    <>
      {props.isActive ? (
        <Button
          variant="link"
          style={styles.yes}
          onClick={props.handleClick}
          id={props.id}
          block
        >
          {props.id}
        </Button>
      ) : (
        <Button
          variant="link"
          style={styles.no}
          onClick={props.handleClick}
          id={props.id}
          block
        >
          {props.id}
        </Button>
      )}
    </>
    // <Button
    //     variant="link"
    //     style={styles}
    //     onClick={props.handleClick}
    //     id={props.id}
    //     block
    //     className="projectBtn"
    // >
    //     {props.id}
    // </Button>
  );
}

export default ProjectBtn;

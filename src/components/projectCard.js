import Card from "react-bootstrap/Card";

function ProjectCard(props) {
    return (
        <>
            <Card className="bg-dark">
                {/* <img
            //style={styles.image}
            src="https://harrisonmusic.com.au/wp-content/uploads/2018/07/1080x500.png"
            alt="test"
          /> */}
                {props.description}
            </Card>
        </>
    );
}

export default ProjectCard;

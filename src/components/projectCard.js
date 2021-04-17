import Card from "react-bootstrap/Card";

const projects = {
    "0" :{
        description: "p1"
    },
    "1" :{
        description: "p2"
    },
    "2" :{
        description: "p3"
    },
    "3" :{
        description: "p4"
    },
    "4" :{
        description: "p5"
    },
    "5" :{
        description: "p6"
    }
}

function ProjectCard(props) {
    return (
        <>
            <Card className="bg-dark">
                {/* <img
            //style={styles.image}
            src="https://harrisonmusic.com.au/wp-content/uploads/2018/07/1080x500.png"
            alt="test"
          /> */}
                {projects[props.project].description}
            </Card>
        </>
    );
}

export default ProjectCard;

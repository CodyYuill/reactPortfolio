import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const projects = {
    "Vibe Cannon": {
        description:
            "One stop shop for your quarantine music needs. Search a song by title and artist and receive the songs lyrics, top 3 videos from YouTube or Vimeo, and the iTunes information.",
        tech:
            "Javascript, CSS, HTML, Bulma, YouTube API, Vimeo API, Rebrand.ly API, iTunes API, Lyrics.ovh API, JQuery",
        role: "JS logic, code refactoring",
        screenshot: "",
        github: "",
        linkedin: "",
    },
    "The Games Folder": {
        description: "Buy and review video games online.",
        tech:
            "Javascript, CSS, HTML, Bootstrap, MySQL, Express, Heroku, Node.js, Handlebars, JSON Web Tokens",
        role: "Backend",
        screenshot: "",
        github: "",
        linkedin: "",
    },
    "Weather Dashboard": {
        description:
            "Search cities by name to receive the current weather, along with a 5 day forecast.",
        tech:
            "Javascript, CSS, HTML, OpenWeather API, Bootstrap, Luxon, JQuery",
        role: "Solo Project",
        screenshot: "",
        github: "",
        linkedin: "",
    },
    "Offline Budget Tracker": {
        description: "Offline Budget Tracker",
        tech: "",
        role: "",
        screenshot: "",
        github: "",
        linkedin: "",
    },
    "Employee Directory": {
        description: "Employee Directory",
        tech: "",
        role: "",
        screenshot: "",
        github: "",
        linkedin: "",
    },
    "Fitness Tracker": {
        description: "Fitness Tracker",
        tech: "",
        role: "",
        screenshot: "",
        github: "",
        linkedin: "",
    },
};

let styles = {
    a:{
        color: "white",
        textDecoration: "none"
    },
    btn: {
        width: "fit-content",
        padding: "5px 15px"
    },
    card: {
        alignItems: "center",
        width: "1080px",
        alignText:"center"
        // padding: "0px 100px"
    }
};

function ProjectCard(props) {
    return (
        <div className="container">
            <Card className="bg-dark" style={styles.card}>
                <img
                    //style={styles.image}
                    src="https://harrisonmusic.com.au/wp-content/uploads/2018/07/1080x500.png"
                    alt="test"
                />
                <h3>Description:</h3>
                <p style={{alignText: "center"}}>{projects[props.project].description}</p>
                <h3>Technologies:</h3>
                <p>{projects[props.project].tech}</p>
                <h3>Role:</h3>
                <p>{projects[props.project].role}</p>
                <ButtonGroup>
                    <Button className="btn btn-danger">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            style={styles.a}
                            href={projects[props.project].github}
                            >
                            Github Repository
                        </a>
                    </Button>
                    <Button className="btn btn-danger">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            style={styles.a}
                            href={projects[props.project].linkedin}
                            >
                            Deployment
                        </a>
                    </Button>
                </ButtonGroup>
            </Card>
        </div>
    );
}

export default ProjectCard;

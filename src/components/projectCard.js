import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import vibeCannonSS from '../imgs/LM-screenshot.jpg';
import gamesFolderSS from '../imgs/GF-RLP-screenshot.jpg';
import weatherDashboardSS from '../imgs/WD-screenshot.jpg';
import budgetTrackerSS from '../imgs/OBT-screenshot.jpg';
import employeeDirectorySS from '../imgs/ED-screenshot.jpg';
import fitnessTrackerSS from '../imgs/FT-screenshot.jpg';

const projects = {
    "Vibe Cannon": {
        description:
            "One stop shop for your quarantine music needs. Search a song by title and artist and receive the songs lyrics, top 3 videos from YouTube or Vimeo, and the iTunes information.",
        tech:
            "Javascript, CSS, HTML, Bulma, YouTube API, Vimeo API, Rebrand.ly API, iTunes API, Lyrics.ovh API, JQuery",
        role: "JS logic, code refactoring",
        screenshot: vibeCannonSS,
        github: "https://github.com/CodyYuill/Vibe-Cannon",
        deployed: "https://codyyuill.github.io/Vibe-Cannon/",
    },
    "The Games Folder": {
        description: "Buy and review video games online.",
        tech:
            "Javascript, CSS, HTML, Bootstrap, MySQL, Express, Heroku, Node.js, Handlebars, JSON Web Tokens",
        role: "Backend",
        screenshot: gamesFolderSS,
        github: "https://github.com/CodyYuill/The-Games-Folder",
        deployed: "https://group1-project2.herokuapp.com/",
    },
    "Weather Dashboard": {
        description:
            "Search cities by name to receive the current weather, along with a 5 day forecast.",
        tech:
            "Javascript, CSS, HTML, OpenWeather API, Bootstrap, Luxon, JQuery",
        role: "Solo Project",
        screenshot: weatherDashboardSS,
        github: "https://github.com/CodyYuill/WeatherDashboard",
        deployed: "https://codyyuill.github.io/WeatherDashboard/",
    },
    "Offline Budget Tracker": {
        description: "Track you budget with ease whether you have a connection or not. If transactions are made while offline they will be saved and submitted once a connection is made.",
        tech: "Javascript, CSS, HTML, Node.js, Express, MongoDB, IndexedDB",
        role: "Solo Project",
        screenshot: budgetTrackerSS,
        github: "https://github.com/CodyYuill/offlineBudgettracker",
        deployed: "https://obscure-brushlands-28476.herokuapp.com/",
    },
    "Employee Directory": {
        description: "Search and filter for employees based on multiple fields.",
        tech: "React, Bootstrap, Node.js, Random User Generator API",
        role: "Solo Project",
        screenshot: employeeDirectorySS,
        github: "https://github.com/CodyYuill/employeedirectory",
        deployed: "https://codyyuill.github.io/employeedirectory/",
    },
    "Fitness Tracker": {
        description: "Input your workouts and compare past workouts to track your progress",
        tech: "Javascript, CSS, HTML, Node,js, Express, MongoDB",
        role: "Solo Project",
        screenshot: fitnessTrackerSS,
        github: "https://github.com/CodyYuill/FitnessTracker",
        deployed: "https://mongdbofitnesstracker.herokuapp.com/",
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
        alignText:"center"
    }
};

function ProjectCard(props) {
    return (
        <div className="container">
            <Card className="bg-dark" style={styles.card}>
                <Card.Img
                    //style={styles.image}
                    src={projects[props.project].screenshot}
                    alt="screenshot of app"
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
                            href={projects[props.project].deployed}
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

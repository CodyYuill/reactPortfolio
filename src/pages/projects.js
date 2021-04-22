import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/projectCard";
import ProjectBtn from "../components/projectBtn";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";

const projectTitles = [
    "Vibe Cannon",
    "The Games Folder",
    "Weather Dashboard",
    "Offline Budget Tracker",
    "Employee Directory",
    "Fitness Tracker",
];

function Projects() {
    const [project, setProject] = useState("Vibe Cannon");
    const [isWindowWide, setIsWindowWide] = useState(true);

    const handleClick = (event) => {
        setProject(event.target.id);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
    });

    const updateDimensions = () => {
        if (window.innerWidth < 1000) {
            setIsWindowWide(false);
        } else {
            setIsWindowWide(true);
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        {isWindowWide ? (
                            <ButtonGroup>
                                {projectTitles.map((value, index) => {
                                    return (
                                        <ProjectBtn
                                            id={value}
                                            key={index}
                                            handleClick={handleClick}
                                            vOrH="hor"
                                        />
                                    );
                                })}
                            </ButtonGroup>
                        ) : (
                            <ButtonGroup vertical>
                                {projectTitles.map((value, index) => {
                                    return (
                                        <ProjectBtn
                                            id={value}
                                            key={index}
                                            handleClick={handleClick}
                                            vOrH="vert"
                                        />
                                    );
                                })}
                            </ButtonGroup>
                        )}
                    </Col>
                    <Col>
                        <ProjectCard project={project} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Projects;

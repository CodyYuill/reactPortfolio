import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/projectCard";
import ProjectBtn from "../components/projectBtn";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";

const projectTitles = [
  "Employee Directory",
  "Weather Dashboard",
  "Offline Budget Tracker",
  "Fitness Tracker",
  "The Games Folder",
  "Vibe Cannon",
];

function Projects() {
  const [project, setProject] = useState("Employee Directory");
  const [active, setActive] = useState("Employee Directory");
  const [isWindowWide, setIsWindowWide] = useState(true);

  const handleClick = (event) => {
    setProject(event.target.id);
    setActive(event.target.id);
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
              <ButtonGroup style={{ width: "100%" }}>
                {projectTitles.map((value, index) => {
                  if (value === active) {
                    return (
                      <ProjectBtn
                        id={value}
                        key={index}
                        handleClick={handleClick}
                        vOrH="hor"
                        isActive={true}
                      />
                    );
                  } else {
                    return (
                      <ProjectBtn
                        id={value}
                        key={index}
                        handleClick={handleClick}
                        vOrH="hor"
                        isActive={false}
                      />
                    );
                  }
                })}
              </ButtonGroup>
            ) : (
              <ButtonGroup style={{ width: "100%" }} vertical>
                {projectTitles.map((value, index) => {
                  if (value === active) {
                    return (
                      <ProjectBtn
                        id={value}
                        key={index}
                        handleClick={handleClick}
                        vOrH="vert"
                        isActive={true}
                      />
                    );
                  } else {
                    return (
                      <ProjectBtn
                        id={value}
                        key={index}
                        handleClick={handleClick}
                        vOrH="vert"
                        isActive={false}
                      />
                    );
                  }
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

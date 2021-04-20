import { useState} from "react";

import ProjectCard from "../components/projectCard";
import ProjectBtn from "../components/projectBtn";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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

    const handleClick = (event) => {
        setProject(event.target.id);
    };

    return (
        <>
            <div className="container">
                <ButtonGroup>
                    {projectTitles.map((value, index) => {
                        return (
                            <ProjectBtn
                                id={value}
                                key={index}
                                handleClick={handleClick}
                            />
                        );
                    })}
                </ButtonGroup>
                <ProjectCard project={project} />
            </div>
        </>
    );
}

export default Projects;

import {useState} from 'react';

import ProjectCard from "../components/projectCard";
import ProjectBtn from "../components/projectBtn";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const projectTitles = ["Vibe Cannon", "The Games Folder", "Weather Dashboard", "Offline Budget Tracker", "Employee Directory", "Fitness Tracker"];



function Projects() {

    const [project, setProject] = useState("Vibe Cannon");

    const handleClick = (event) => {
        setProject(event.target.id);
    };

    return (
        <>
            <h1>Projects</h1>
            <div className="container-fluid">
                <div className="col-lg-4" style={{ display: "inline-block", verticalAlign: "top" }}>
                    <ButtonGroup vertical>
                        {projectTitles.map((value, index) => {
                            return <ProjectBtn id={value} key={index} handleClick={handleClick}/>;
                        })}
                    </ButtonGroup>
                </div>
                <div className="col" style={{ display: "inline-block" }}>
                    <ProjectCard project={project}/>
                </div>
            </div>
        </>
    );
}

export default Projects;

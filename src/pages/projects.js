import {useState} from 'react';

import ProjectCard from "../components/projectCard";
import ProjectBtn from "../components/projectBtn";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const projectTitles = ["0", "1", "2", "3", "4", "5"];

const projects = {
    "0" :{
        description: "p1"
    },
    "1" :{
        description: "p2"
    }
}

function Projects() {

    const [project, setProject] = useState("0");

    const handleClick = (event) => {
        setProject(event.target.id);
    };

    return (
        <>
            <h1>PROJECTS PAGE</h1>
            <div className="container-fluid">
                {/* </div><div className="col-lg-2" style={{display: "inline-block", position: "absolute"}}> */}
                <div className="col-lg-2" style={{ display: "inline-block" }}>
                    <ButtonGroup vertical>
                        {projectTitles.map((value) => {
                            return <ProjectBtn id={value} key={value} handleClick={handleClick}/>;
                        })}
                    </ButtonGroup>
                </div>
                <div className="col" style={{ display: "inline-block" }}>
                    <ProjectCard description={projects[project].description}/>
                </div>
            </div>
        </>
    );
}

export default Projects;

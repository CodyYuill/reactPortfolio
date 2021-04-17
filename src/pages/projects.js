import ProjectCard from '../components/projectCard';
import Accordion from 'react-bootstrap/Accordion';

const projects = ["0", "1", "2", "3", "4", "5"];

function Projects() {
  return (
    <>
      <h1>PROJECTS PAGE</h1>
      <Accordion defaultActiveKey="0">
          {projects.map((value)=>{
              return <ProjectCard id={value} key={value}/>
          })}
      </Accordion>
    </>
  );
}

export default Projects;

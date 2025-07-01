import '../styles/projectCard.css'
import { projects } from '../dataProject/project';
import { useLocation } from 'react-router-dom';

function Project() {

  const isHomepage = useLocation().pathname === '/'
  const listProject = isHomepage ? projects.slice(0,3) : projects
  
  return (
    <section className="projectCard-section">
      <h2 className="contact-title py-10">Project</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[76%] mx-auto'>
        {listProject.map((project,index)=>(
          <div className='project-card' key={index}>
            <a href={`/singleproject/${project.id}`}>
              <img src={project.imageUrl ? project.imageUrl : '/ProjectCoverImage/no-image.png' }/>
              <h3 className='title-project'>{project.title}</h3>
              <p  className='des-project'>{project.description}</p>
            </a>
          </div>
        ))
        }
      </div>
    </section>
  );
}

export default Project
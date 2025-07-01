import { projects } from "../dataProject/project";
import { useParams } from "react-router-dom";
import { projectComponentMap } from "../dataProject/projectComponentMap";
import '../styles/SingleProjectPage.css'

const SingleProject =()=>{
    const { id } = useParams();
    const project = projects.find( p => p.id === parseFloat(id))
    const ProjectComponent = projectComponentMap[project.id]

    return(
        <div className='single-project-page'>
            <div className="bg-[#12121c] block " style={{height: '1.3vw'}}></div>
            <div className="single-project-content">
                <div className="row">
                    <h1 className="project-title">{project.title}</h1>
                    <ProjectComponent/>
                </div>
            </div>
        </div>
    )
    
}

export default SingleProject
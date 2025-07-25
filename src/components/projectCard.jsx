import '../styles/projectCard.css'
import { projects } from '../dataProject/project';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Project({category}) {

  const [currentPage,setCrrentPage] = useState(1) 
  const totalPage = []
  const [startIndex,setStartindex] = useState(0)
  const [endIndex,setEndindex] = useState(6)

  const isHomepage = useLocation().pathname === '/'
  const filteredProjects = category
    ? projects.filter(project => project.category === category)
    : projects;

  const listProject = isHomepage ? filteredProjects.slice(0,3) : filteredProjects.slice(startIndex,endIndex)
  
  // console.log(startIndex,endIndex);
  

  const nextPage =()=>{
    if(listProject.length !== 6 || filteredProjects.length === 6){
      setStartindex(startIndex) 
      setEndindex(endIndex)
    }else{
      setStartindex(startIndex+6) 
      setEndindex(endIndex+6)
    }
  }

  const prevPage =()=>{
    if(startIndex <= 0){
      setStartindex(startIndex) 
      setEndindex(endIndex)
    }else{
      setStartindex(startIndex-6) 
      setEndindex(endIndex-6)
    }
  }

  const changePage =(number)=>{
    if(number === 1){
      setStartindex(0)
      setEndindex(6)
      setCrrentPage(number)
    }else{
      setStartindex(6 * (number - 1))
      setEndindex(6 * number)
      setCrrentPage(number)
    }
  }

console.log('condition:', filteredProjects.length === 6 && isHomepage);

  const numPag = Math.ceil(filteredProjects.length/6)

  for (let index = 0; index < numPag; index++) {
    totalPage.push(index+1)
  }

  return (
    <section className="projectCard-section">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 sm:gap-14 gap-32 w-[76%] mx-auto project-grid'>
        {listProject.map((project,index)=>(
          <div className='project-card' key={index}>
            <a href={`/singleproject/${project.id}`}>
              <img src={project.imageUrl ? project.imageUrl : '/ProjectCoverImage/react/no-image.png' }/>
              <h3 className='title-project'>{project.title}</h3>
              <p  className='des-project'>{project.description}</p>
            </a>
          </div>
        ))
        }
      </div>



       {filteredProjects.length === 6 || isHomepage ? 
       null 
       : 
        <div className="paginatoin-project">
          <button className="prev-page" onClick={prevPage}><i className="fa-solid fa-angle-left"></i></button>
            {totalPage.map((num,index)=>(
              <button key={index} onClick={() => changePage(num)} className={`total-number ${num === currentPage ? 'is-selected' : ''}`}>
                {num}
              </button>
            ))}
          <button className="next-page" onClick={nextPage}><i className="fa-solid fa-angle-right"></i></button>
        </div>
       } 
      
    </section>
  );
}
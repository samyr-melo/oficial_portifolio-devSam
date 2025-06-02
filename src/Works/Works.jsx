// import "../Works/works.css";
// import Connect from '../assets/conect.png'
// import Randall from '../assets/randall.png'
// import Sanchina from '../assets/sanchina.png'
// import Todolist from '../assets/todolist.png'

// function scroll (offset) {
//   const container = document.getElementById('scroll')
//   container.scrollBy({left: offset, behavior: 'smooth'})
// }


// function Works() {
//   return (
//     <div className="works">
//       <div>
//         <h1 className="work__title">
//           My recents <span>works</span>
//         </h1>
//       </div>
//       <div className="work__button">

//         <a className="link__work" href="">All</a>       
//         <a className="link__work" href="">React</a>
//         <a className="link__work" href="">Javascript</a>
//         <a className="link__work" href="">HTML&CSS</a>

//       </div>
//       <div className="work__projeto__images">
//         <button id="scroll" type="button" onClick={scroll(250)}>←</button>
//         <div className="work__div__images">
//           <a href=""><img className="work__projeto__img" src={Connect} alt="projeto página de acesso codeconnect" /></a>
//           <a href=""><img className="work__projeto__img" src={Randall} alt="projeto Cartão de Visita Jessica Randall " /></a>
//           <a href=""><img className="work__projeto__img" src={Sanchina} alt="projeto portifolio React Sanchina" /></a>
//           <a href=""><img className="work__projeto__img" src={Todolist} alt="projeto to-do-list" /></a>
//         </div>
//         <button id="scroll" type="button" onClick={scroll(250)}>→</button>
       
//       </div>
//     </div>
//   );
// }

// export default Works;
import React, { useRef, useState } from 'react';
import "../Works/works.css";
import Connect from '../assets/conect.png';
import Randall from '../assets/randall.png';
import Sanchina from '../assets/sanchina.png';
import Todolist from '../assets/todolist.png';

// Dados dos projetos com categorias
const projects = [
  { 
    id: 1, 
    image: Connect, 
    alt: "projeto página de acesso codeconnect",
    title: "CodeConnect",
    description: "Plataforma de conexão para desenvolvedores",
    categories: ['React', 'Javascript']
  },
  { 
    id: 2, 
    image: Randall, 
    alt: "projeto Cartão de Visita Jessica Randall",
    title: "Jessica Randall",
    description: "Cartão de visita digital",
    categories: ['HTML&CSS']
  },
  { 
    id: 3, 
    image: Sanchina, 
    alt: "projeto portifolio React Sanchina",
    title: "Sanchina Portfolio",
    description: "Portfólio profissional",
    categories: ['React']
  },
  { 
    id: 4, 
    image: Todolist, 
    alt: "projeto to-do-list",
    title: "Task Manager",
    description: "Aplicativo de gerenciamento de tarefas",
    categories: ['Javascript']
  },
];

function Works() {
  const scrollContainerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const scroll = (offset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: offset,
        behavior: 'smooth'
      });
    }
  };

  // Filtra os projetos baseado na categoria selecionada
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.categories.includes(activeFilter)
      );

  return (
    <div className="works">
      <div>
        <h1 className="work__title">
          Projetos <span>recentes</span>
        </h1>
      </div>
      
      <div className="work__button">
        {['All', 'React', 'Javascript', 'HTML&CSS'].map((filter) => (
          <button 
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(filter);
              // Resetar scroll quando mudar o filtro
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = 0;
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="work__projeto__container">
        <button 
          className="scroll-button"
          onClick={() => scroll(-300)}
          aria-label="Scroll left"
        >
          ←
        </button>
        
      <div className="work__projeto__images" ref={scrollContainerRef}>
  {filteredProjects.length > 0 ? (
    filteredProjects.map((project) => (
      <div key={project.id} className="project-card">
        <a href="#">
          <img 
            className="work__projeto__img" 
            src={project.image} 
            alt={project.alt}
            style={{
              width: '400px',
              height: 'auto', // Mantém a proporção
              aspectRatio: '16/9' // Opcional: define proporção específica
            }}
                  />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.categories.map(category => (
                        <span key={category} className="tag">{category}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found in this category</p>
            </div>
          )}
        </div>
        
        <button 
          className="scroll-button"
          onClick={() => scroll(300)}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Works;
import React from 'react';

const proyectosList = [
  {
    id: 1,
    titulo: "Sistema de Control para A/C por Tarjeta",
    clase: "Microcontroladores",
    modalidad: "En equipo",
    descripcion: "Diseño e implementación de un circuito de activación y desactivación de aire acondicionado mediante tarjeta para control de energía.",
    aporte: "Coordinación de compras de componentes, armado e integración física del circuito en protoboard, corte y conexión de cableado.",
    tecnologias: ["Microcontroladores", "Circuitos", "Sensores"],
    imagen: "/src/assets/hero.png" 
  },
  {
    id: 2,
    titulo: "Monitoreo Automático de Cisterna",
    clase: "Sistemas Automatizados",
    modalidad: "En equipo",
    descripcion: "Módulo para control y monitoreo en tiempo real del nivel de agua en cisterna utilizando Arduino y sensores de nivel.",
    aporte: "Desarrollo y maquetación de la interfaz gráfica de usuario (GUI) en Python para visualizar el estado del sistema en la computadora.",
    tecnologias: ["Python", "Arduino", "Interfaz Gráfica"],
    imagen: "/src/assets/hero.png" 
  },
  {
    id: 3,
    titulo: "Asignación de Aulas y Horarios",
    clase: "Portales Web 1",
    modalidad: "En equipo",
    descripcion: "Aplicación web enfocada en la gestión de horarios académicos y distribución de aulas universitarias.",
    aporte: "Apoyo en la maquetación de vistas, integración de componentes en React, revisión del diseño responsivo y documentación.",
    tecnologias: ["React", "JavaScript", "CSS3", "Vite"],
    imagen: "/src/assets/hero.png" 
  }
];

export default function Proyectos() {
  return (
    <section className="proyectos-section">
      <h2 className="proyectos-titulo">Proyectos Realizados</h2>
      
      <div className="proyectos-grid">
        {proyectosList.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <div className="proyecto-img-container">
              <img 
                src={proyecto.imagen} 
                alt={proyecto.titulo} 
                className="proyecto-img"
              />
            </div>
            
            <div className="proyecto-body">
              <div className="proyecto-badges">
                <span className="badge-clase">{proyecto.clase}</span>
                <span className="badge-modalidad">{proyecto.modalidad}</span>
              </div>

              <h3 className="proyecto-nombre">{proyecto.titulo}</h3>
              <p className="proyecto-desc">{proyecto.descripcion}</p>

              <div className="proyecto-aporte-box">
                <strong>Aporte individual / en equipo:</strong>
                <p>{proyecto.aporte}</p>
              </div>

              <div className="proyecto-techs">
                {proyecto.tecnologias.map((tech, idx) => (
                  <span key={idx} className="tech-tag">#{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
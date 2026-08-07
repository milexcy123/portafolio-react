import React, { useState } from 'react';
import './App.css';
import miFoto from './assets/Captura de pantalla 2026-02-11 230558.png';

export default function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <div className="main-container">
      {}
      <header className="header-container">
        <span className="star-yellow top-left-star">★</span>
        <span className="star-yellow top-right-star">★</span>

        {}
        <div className="navbar-capsule">
          <button 
            className={`nav-btn ${pagina === 'inicio' ? 'active' : ''}`} 
            onClick={() => setPagina('inicio')}
          >
            INICIO
          </button>
          <button 
            className={`nav-btn ${pagina === 'info' ? 'active' : ''}`} 
            onClick={() => setPagina('info')}
          >
            INFORMACION PERSONAL
          </button>
          <button 
            className={`nav-btn ${pagina === 'proyectos' ? 'active' : ''}`} 
            onClick={() => setPagina('proyectos')}
          >
            PROYECTOS
          </button>
        </div>

        <p className="course-subtitle">Desarrollo de portales web 1</p>
      </header>

      {}
      {pagina === 'inicio' && (
        <div className="inicio-page">
          <span className="star-yellow" style={{ position: 'absolute', top: '10px', left: '120px' }}>★</span>
          
          <div className="avatar-card">
            <div style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: '#e87a90',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              <span style={{ fontSize: '60px' }}>👩‍💻</span>
            </div>
          </div>

          <div className="center-content">
            <span className="star-yellow" style={{ display: 'block', marginBottom: '5px' }}>★</span>
            <div className="hola-badge">H O L A</div>
            <h1 className="main-title">SOY MILEXCY</h1>
            <p className="subtitle">Estudiante de Ing. En ciencias de la computacion</p>
          </div>

          <div className="circle-frame">
            <img src={miFoto} alt="Foto de Milexcy" className="user-photo" />
          </div>

          <span className="star-yellow" style={{ position: 'absolute', bottom: '10px', right: '40px' }}>★</span>
        </div>
      )}

      {}
      {pagina === 'info' && (
        <div className="info-page">
          <div className="stars-row">
            ★ ★ ★ ★ ★
          </div>

          <div className="quote-banner">
            Creo firmemente que la vida se trata de aprender y crear cosas bonitas. 
            Me divide el gusto por la tecnología, los detalles del diseño y el arte de la belleza. 
            ¡Bienvenido a mi espacio personal!
          </div>

          <div className="info-grid">
            <div className="contact-circle">
              <h3>Contacto ★</h3>
              <p className="contact-sub">Tienes alguna pregunta hablemos!</p>
              <div className="contact-list">
                <div className="contact-item">
                  <span>📞</span>
                  <span>+504 9893-1500</span>
                </div>
                <div className="contact-item">
                  <span>✉️</span>
                  <span>miln_perezg200@unicah.edu</span>
                </div>
                <div className="contact-item">
                  <span>📍</span>
                  <span>P.A Jutiapa Atlantida</span>
                </div>
              </div>
            </div>

            <div className="middle-section">
              <div className="section-block">
                <div className="section-title-icon">
                  <span className="star-yellow">★</span>
                  <span>Sobre mi.</span>
                </div>
                <p>
                  Me llamo Milexcy Nicol Perez tengo 19 años soy de Jutiapa Atlantida me 
                  considero una persona sencilla, humilde y callada me encanta aprender cosas 
                  nuevas, uno de mis pasatiempos favoritos es jugar futbol, tambien en mis 
                  tiempos libres trabajo haciendo uñas, pelo y todo lo que se trata de belleza ya 
                  que me gradue como estilista profesional en el 2021 y actualmente estudiante de la UNICAH.
                </p>
              </div>

              <div className="section-block">
                <div className="section-title-icon">
                  <span className="star-yellow">★</span>
                  <span>Habilidades</span>
                </div>
                <div className="pill-container">
                  <span>Trabajo en equipo</span>
                  <span>Liderazgo</span>
                  <span>Responsabilidad</span>
                  <span>Comunicación efectiva</span>
                  <span>Organización</span>
                  <span>Resolución de problemas</span>
                  <span>Adaptabilidad</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <h3>Experiencias</h3>
              <div className="exp-card">
                <h4>Negocio Propio de Belleza</h4>
                <ul>
                  <li>Estilista profesional graduada.</li>
                  <li>Diseño de uñas y peluquería.</li>
                  <li>Control de citas y atención.</li>
                </ul>

                <h4>Servicio al Cliente</h4>
                <ul>
                  <li>Negocio familiar.</li>
                  <li>Atención directa al público.</li>
                  <li>Manejo de pedidos y caja.</li>
                </ul>

                <h4>Apoyo Administrativo</h4>
                <ul>
                  <li>Redacción de documentos locales.</li>
                  <li>Organización de protocolos.</li>
                  <li>Logística en proyectos de Jutiapa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {}
      {pagina === 'proyectos' && (
        <div className="proyectos-page">
          <div className="stars-row">
            ★ ★ ★ ★ ★
          </div>

          <div className="proyectos-grid">
            
            {}
            <div className="proyecto-card">
              <div className="proyecto-header-badge">
                <span className="tag-clase">Implementación de Software</span>
                <span className="tag-modalidad">En equipo</span>
              </div>
              <h3>Praxys - Gestión de Prácticas</h3>
              <p className="proyecto-desc">
                Sistema diseñado para coordinación académica enfocado en facilitar y agilizar el proceso de documentación y aceptación de estudiantes en práctica profesional.
              </p>
              <div className="aporte-box">
                <strong>Aporte individual:</strong>
                <p>Elaboración de la documentación técnica y manual de usuario, además de la propuesta e implementación del diseño visual, paleta de colores .</p>
              </div>
              <div className="tech-pills">
                <span>Diseño </span>
                <span>Documentación</span>
                <span>Manual Técnico</span>
                <span>Manual de Usuario</span>
              </div>
            </div>

            {}
            <div className="proyecto-card">
              <div className="proyecto-header-badge">
                <span className="tag-clase">Microcontroladores</span>
                <span className="tag-modalidad">En equipo</span>
              </div>
              <h3>Sistema de Control para A/C</h3>
              <p className="proyecto-desc">
                Sistema de activación y desactivación de aire acondicionado mediante tarjeta magnética para optimización y control energético.
              </p>
              <div className="aporte-box">
                <strong>Aporte individual:</strong>
                <p>Apoyo económico para la adquisición de componentes electrónicos, corte y armado de cableado, y ensamblado físico de piezas .</p>
              </div>
              <div className="tech-pills">
                <span>Microcontroladores</span>
                <span>Circuitos</span>
                <span>Sensores</span>
              </div>
            </div>

            {}
            <div className="proyecto-card">
              <div className="proyecto-header-badge">
                <span className="tag-clase">Sistemas Automatizados</span>
                <span className="tag-modalidad">En equipo</span>
              </div>
              <h3> Cisterna de agua</h3>
              <p className="proyecto-desc">
                Automatización y monitoreo en tiempo real del nivel de agua en una cisterna utilizando sensores de nivel y microcontrolador Arduino.
              </p>
              <div className="aporte-box">
                <strong>Aporte individual:</strong>
                <p>Diseño y desarrollo de la interfaz gráfica de usuario  en Python para visualizar y controlar el estado del sistema en pantalla.</p>
              </div>
              <div className="tech-pills">
                <span>Python</span>
                <span>Arduino</span>
                <span>Interfaz Gráfica</span>
              </div>
            </div>

            {}
            <div className="proyecto-card">
              <div className="proyecto-header-badge">
                <span className="tag-clase">Portales Web 1</span>
                <span className="tag-modalidad">En equipo</span>
              </div>
              <h3>Asignación de Aulas y Horarios</h3>
              <p className="proyecto-desc">
                Aplicación web interactiva desarrollada para la organización, asignación eficiente de horarios y gestión de aulas universitarias.
              </p>
              <div className="aporte-box">
                <strong>Aporte individual:</strong>
                <p>Colaboración, revisión del diseño responsivo, soporte en la estructura de componentes en React y apoyo en la documentación con comentarios de uso y observacion de errores.</p>
              </div>
              <div className="tech-pills">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {}
      <div className="footer-bar">
        2026 MP
      </div>
    </div>
  );
}
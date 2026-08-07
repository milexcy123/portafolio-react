import React from 'react';

export default function InformacionPersonal() {
  return (
    <div className="page-content info-page">
      {}
      <div className="stars-row">
        ★ ★ ★ ★ ★
      </div>

      {}
      <div className="quote-banner">
        Creo firmemente que la vida se trata de aprender y crear cosas bonitas. 
        Me divide el gusto por la tecnología, los detalles del diseño y el arte de la belleza. 
        ¡Bienvenido a mi espacio personal!
      </div>

      <div className="info-grid">
        {}
        <div className="contact-circle">
          <h3>Contacto</h3>
          <p className="contact-sub">Tienes alguna pregunta hablemos!</p>
          
          <div className="contact-list">
            <div className="contact-item">
              <span className="c-icon">📞</span>
              <span>+504 9893-1500</span>
            </div>
            <div className="contact-item">
              <span className="c-icon">✉️</span>
              <span>miln_perezg200@unicah.edu</span>
            </div>
            <div className="contact-item">
              <span className="c-icon">📍</span>
              <span>P.A Jutiapa Atlantida</span>
            </div>
          </div>
        </div>

        {}
        <div className="middle-section">
          <div className="section-block">
            <h2><i>★ Sobre mi</i></h2>
            <p>
              Me llamo Milexcy Nicol Pérez tengo 19 años soy de Jutiapa Atlantida me 
              considero una persona sencilla, humilde y callada me encanta aprender cosas 
              nuevas, uno de mis pasatiempos favoritos es jugar fútbol, también en mis 
              tiempos libres trabajo haciendo uñas, pelo y todo lo que se trata de belleza ya 
              que me gradué como estilista profesional en el 2021 y actualmente estudiante de la UNICAH.
            </p>
          </div>

          <div className="section-block">
            <h2><i>★ Habilidades</i></h2>
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

        {}
        <div className="right-section">
          <h2><i>Experiencias</i></h2>
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
  );
}
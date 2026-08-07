import React from 'react';
import miFoto from '../assets/Captura de pantalla 2026-02-11 230558.png';

export default function Inicio() {
  return (
    <div className="page-content inicio-page">
      <span className="star star-top-left">★</span>
      <span className="star star-top-right">★</span>
      <span className="star star-mid-left">★</span>
      <span className="star star-center">★</span>
      <span className="star star-bottom-right">★</span>

      <div className="left-illustration">
        <div className="avatar-card">
          <span className="heart-icon">💖</span>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" 
            alt="Ilustración" 
            className="cartoon-img" 
          />
        </div>
      </div>

      <div className="center-content">
        <div className="hola-badge">H O L A</div>
        <h1 className="main-title">SOY MILEXCY</h1>
        <p className="subtitle">Estudiante de Ing. En ciencias de la computacion</p>
      </div>

      <div className="right-photo">
        <div className="circle-frame">
          <img src={miFoto} alt="Milexcy" className="user-photo" />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './css/sidebar.css'; // Asegúrate de importar el archivo CSS
import { Link } from 'react-router-dom'; // Importa Link de React Router

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Bienvenido</h2>
        <img
          src="ruta-a-tu-imagen.jpg" // Aquí va la ruta a la foto del usuario
          alt="Usuario"
          className="user-image"
        />
      </div>
      <nav>
        <ul>
          <li><Link to="/historial">Historial</Link></li> {/* Cambia a la ruta Historial */}
          <li><Link to="/consumo">Consumo</Link></li> {/* Cambia a la ruta Consumo */}
          <li><Link to="/salir">Salir</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

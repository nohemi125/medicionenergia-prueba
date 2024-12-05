import React from 'react';
import './css/historial.css';

const Historial = () => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Potencia</th>
            <th>Voltaje</th>
            <th>Corriente</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/12/2024</td>
            <td>1500W</td>
            <td>220V</td>
            <td>6.8A</td>
          </tr>
          <tr>
            <td>02/12/2024</td>
            <td>1650W</td>
            <td>220V</td>
            <td>7.5A</td>
          </tr>
        </tbody>
      </table>
      <div className="button-container">
        <button>Mensual</button>
        <button>Anual</button>
      </div>
    </div>
  );
};

export default Historial;

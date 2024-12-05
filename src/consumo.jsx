import React from 'react';
import './css/consumo.css';

const Consumo = () => {
  const consumoMensual = [
    { mes: 'Enero', consumo: '120 kWh' },
    { mes: 'Febrero', consumo: '110 kWh' },
    { mes: 'Marzo', consumo: '130 kWh' },
    // Añade más datos según lo necesario
  ];

  const consumoAnual = [
    { año: '2023', consumo: '1500 kWh' },
    { año: '2024', consumo: '1400 kWh' },
    // Añade más datos según lo necesario
  ];

  return (
    <div className="consumo-container">
      <h2>Consumo Energético</h2>

      <div className="table-container">
        <h3>Consumo Mensual</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Consumo</th>
            </tr>
          </thead>
          <tbody>
            {consumoMensual.map((dato, index) => (
              <tr key={index}>
                <td>{dato.mes}</td>
                <td>{dato.consumo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h3>Consumo Anual</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Año</th>
              <th>Consumo</th>
            </tr>
          </thead>
          <tbody>
            {consumoAnual.map((dato, index) => (
              <tr key={index}>
                <td>{dato.año}</td>
                <td>{dato.consumo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consumo;

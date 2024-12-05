
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa las herramientas necesarias
import Sidebar from './sidebar';
import Historial from './historial';
import Consumo from './consumo'
const App = () => {
  return (
    <Router> {/* Configura el Router */}
    <div className="App">
      <Sidebar /> {/* Sidebar siempre visible */}
      
      <div className="content"> {/* Área de contenido donde se cambiará el componente */}
        <Switch> {/* Define las rutas que quieres manejar */}
          <Route path="/consumo" component={Consumo} /> {/* Ruta para el componente Consumo */}
          <Route path="/historial" component={Historial} /> {/* Ruta para el componente Historial */}
          <Route path="/" exact component={Historial} /> {/* Ruta por defecto */}
        </Switch>
      </div>
    </div>
  </Router>
  );
};

export default App;


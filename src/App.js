
import './App.css';
import Titulo from './components/Titulo/Titulo';
import CrearCita from './components/CrearCita/CrearCita';
import AdministradorDeCitas from './components/AdministradorDeCitas/AdministradorDeCitas';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo="ADMINISTRADOR DE PACIENTES"></Titulo>
        <div class="mainData">
          <CrearCita citas={citas} setCitas={setCitas}></CrearCita>
          <AdministradorDeCitas citas={citas} setCitas={setCitas}></AdministradorDeCitas>
        </div>
      </header>
    </div>
  );
}

export default App;

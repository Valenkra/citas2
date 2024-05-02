
import './App.css';
import Titulo from './components/Titulo/Titulo';
import CrearCita from './components/CrearCita/CrearCita';
import AdministradorDeCitas from './components/AdministradorDeCitas/AdministradorDeCitas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo="ADMINISTRADOR DE PACIENTES"></Titulo>
        <div class="mainData">
          <CrearCita></CrearCita>
          <AdministradorDeCitas></AdministradorDeCitas>
        </div>
      </header>
    </div>
  );
}

export default App;

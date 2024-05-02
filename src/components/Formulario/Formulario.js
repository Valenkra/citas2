import Boton from '../Boton/Boton';
import './Formulario.css';

function Formulario() {
  return (
        <form>
            <div class="casillaForm">
                <label>Nombre Mascota</label>
                <input type="text" placeholder="Nombre de tu mascota"/>
            </div>
            <div class="casillaForm">
                <label>Nombre Dueño</label>
                <input type="text" placeholder="Nombre dueño de la mascota"/>
            </div>
            <div class="casillaForm">
                <label>Fecha</label>
                <input type="date"/>
            </div>
            <div class="casillaForm">
                <label>Hora</label>
                <input type="time"/>
            </div>
            <div class="casillaForm">
                <label>Sintomas</label>
                <textarea></textarea>
            </div>
            <Boton sendText={"Agregar Cita"}></Boton>
        </form>
    );
}

export default Formulario;

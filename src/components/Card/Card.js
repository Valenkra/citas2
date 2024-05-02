import Boton from '../Boton/Boton';
import './Card.css';

function Card({mascota , duenio, fecha, hora, sintomas, id, setCitas, citas}) {
    
  const eliminar = (e) => {
    setCitas(...citas.splice(e.target.index.value),1)
    }

    return (
          <div class="card">
              <ul>
                <li><b>Mascota:</b> {mascota}</li>
                <li><b>Dueño:</b> {duenio}</li>
                <li><b>Fecha:</b> {fecha}</li>
                <li><b>Hora:</b> {hora}</li>
                <li><b>Sintomas:</b> {sintomas}</li>
                <input type="hidden" value={id} name="index" />
              </ul>
              <Boton sendText="Eliminar X" onClick={eliminar}></Boton>
          </div>
      );
}

export default Card;

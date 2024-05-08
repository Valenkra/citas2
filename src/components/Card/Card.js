import '../Boton/Boton.css';
import './Card.css';

function Card({mascota , duenio, fecha, hora, sintomas, id, setCitas, citas}) {
    
  const eliminar = (e) => {
    citas.splice(id,1)
    setCitas(...citas)
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
              <button onClick={eliminar} class="allMayus myBtn">Eliminar X</button>;
          </div>
      );
}

export default Card;

import Boton from '../Boton/Boton';
import './Card.css';

function Card({mascota , duenio, fecha, hora, sintomas, id, setCitas, citas}) {
  
  const eliminar = (e) => {
      if (window.confirm("Confirmas que queres eliminar esta cita?")) {
        let citasUpdate = citas;
        citasUpdate.splice(id,1);
        setCitas([...citasUpdate]);
      }else alert("La cita no ha sido eliminada");
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
              <div onClick={eliminar}>
                <Boton sendText={"Eliminar X"} ></Boton>
              </div>
              
          </div>
      );
}

export default Card;

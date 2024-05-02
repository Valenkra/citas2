import Formulario from '../Formulario/Formulario';
import Subtitulo from '../Subtitulo/Subtitulo';
import './CrearCita.css';

function CrearCita( { citas, setCitas } ) {
  return (
    <div>
        <Subtitulo subtitulo={"Crear mi cita"}></Subtitulo>
        <Formulario citas={citas} setCita={ setCitas }></Formulario>
    </div>
    );
}

export default CrearCita;

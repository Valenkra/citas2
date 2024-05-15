// import { useState } from 'react';
import Boton from '../Boton/Boton';
import './Formulario.css';

function Formulario({ citas, setCita}) {
    
    const crearCita = (e) => {
        let pre = e.target;
        if ((pre.nMascota.value === null || pre.nMascota.value === "") && (pre.nDuenio.value === null || pre.nDuenio.value === "") && 
        (pre.fecha.value === null || pre.fecha.value === "") && (pre.hora.value === null || pre.hora.value === "")) {
            alert("Please Fill In All Required Fields");
            return false;
          }
          else{

            if (window.confirm("Confirmas que queres agregar esta cita?")) {
                e.preventDefault();
                setCita([...citas, {
                    nMascota: e.target.nMascota.value,
                    nDuenio: e.target.nDuenio.value,
                    fecha: e.target.fecha.value,
                    hora: e.target.hora.value,
                    sintomas: e.target.sintomas.value
                }]);
                }else alert("La cita no ha sido creada");
          }
}

    return (
            <form onSubmit={crearCita}>
                <div className="casillaForm">
                    <label>Nombre Mascota</label>
                    <input type="text"  name="nMascota" placeholder="Nombre de tu mascota" required/>
                </div>
                <div className="casillaForm">
                    <label>Nombre Dueño</label>
                    <input type="text"  name="nDuenio" placeholder="Nombre dueño de la mascota" required/>
                </div>
                <div className="casillaForm">
                    <label>Fecha</label>
                    <input type="date" name="fecha" required/>
                </div>
                <div className="casillaForm">
                    <label>Hora</label>
                    <input type="time" name="hora" required/>
                </div>
                <div className="casillaForm">
                    <label>Sintomas</label>
                    <textarea name="sintomas"></textarea>
                </div>
                <Boton sendText={"Agregar Cita"}></Boton>
            </form>
        );
}

export default Formulario;

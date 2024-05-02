import Card from '../Card/Card';
import Subtitulo from '../Subtitulo/Subtitulo';
import './AdministradorDeCitas.css';

function AdministradorDeCitas() {
  return (
        <div>
            <Subtitulo subtitulo={"Administra tus citas"}></Subtitulo>
            <div class="cards">
                <Card mascota="Lulo"  duenio="Valen" fecha="20/4/2024" hora="15:00" sintomas="Le duele la pierna"></Card>
                <Card mascota="Chester"  duenio="Agus" fecha="25/4/2024" hora="18:00" sintomas="Duerme mucho"></Card>
                <Card mascota="Milton"  duenio="Milei" fecha="28/4/2024" hora="22:00" sintomas="No está comiendo"></Card>
            </div>
        </div>
    );
}

export default AdministradorDeCitas;

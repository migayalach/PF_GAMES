import { NavLink } from "react-router-dom";
import imagen from "./logogamer2.jpg"
export default function Encabezado() {
  return (
    <div>
      <div>
        <img src={imagen} alt="logo" />
        <h2>GAMING SHOP</h2>
      </div>
      <nav>
        <NavLink to="/soporte">SOPORTE</NavLink>
        <NavLink to="/compras">COMPRAS</NavLink>
        <NavLink to="/perfil">PERFIL</NavLink>
      </nav>
    </div>
  );
}

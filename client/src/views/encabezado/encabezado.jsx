import { NavLink } from "react-router-dom";
import imagen from "./logogamer2.jpg"

import styles from "./encabezado.module.css"

export default function Encabezado() {
  return (
    <div className={styles.enc}>
      <div className={styles.logo}>
        <img className={styles.image} src={imagen} alt="logo" />
        <h2>GAMING SHOP</h2>
      </div>
      <nav >
        <a className={styles.encab}>
        <NavLink to="/soporte" style={{ textDecoration: "none", color: "black" }} >SOPORTE</NavLink>
        </a>
        <a className={styles.encab}>
        <NavLink to="/compras" style={{ textDecoration: "none", color: "black" }}>COMPRAS</NavLink>
        </a>
        <a className={styles.encab}>
        <NavLink to="/perfil" style={{ textDecoration: "none", color: "black" }}>PERFIL</NavLink>
        </a>
      </nav>
    </div>
  );
};

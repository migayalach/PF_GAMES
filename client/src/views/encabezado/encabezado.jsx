import { NavLink } from "react-router-dom";
import imagen from "./logogamer2.jpg";

import styles from "./encabezado.module.css";

import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../components/Login/Login";
import Logout from "../../components/Logout/Logout";
import { useSelector } from "react-redux";

export default function Encabezado() {

  const { isAuthenticated, isLoading, user } = useAuth0();
  if (isLoading) return <h1>Cargando ................</h1>;
  return (
    <div className={styles.enc}>
      

      <div className={styles.logo}>
        <img className={styles.image} src={imagen} alt="logo" />
        <h2>GAMING SHOP</h2>
      </div>
      <nav >
      <a className={styles.encab}>
        <NavLink to="/formGame" style={{ textDecoration: "none", color: "black" }}>CREAR JUEGO</NavLink>
        </a>
        <a className={styles.encab}>
        <NavLink to="/soporte" style={{ textDecoration: "none", color: "black" }} >SOPORTE</NavLink>
        </a>
        <a className={styles.encab}>
        <NavLink to="/compras" style={{ textDecoration: "none", color: "black" }}>COMPRAS</NavLink>
        </a>
        <a className={styles.encab}>
        {isAuthenticated && (
        <NavLink to="/perfil" style={{ textDecoration: "none", color: "black" }}>PERFIL</NavLink>
        )}
        </a>
      </nav>
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
}
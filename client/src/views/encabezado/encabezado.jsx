import { NavLink } from "react-router-dom";
import imagen from "./logogamer2.jpg";

import styles from "./encabezado.module.css";

import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../components/Login/Login";
import Logout from "../../components/Logout/Logout";
import Profile from "../../components/Profile/Profile";
import { useSelector } from "react-redux";

export default function Encabezado() {
  const aux = useSelector((state) => state.levelUser);
  const acceso = aux?.access;

  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <h1>Cargando ................</h1>;
  return (
    <div className={styles.enc}>
      <Profile />
      {acceso === "admin" && <button>hola</button>}
      {acceso === "standar" && <button>chau</button>}

      <div className={styles.logo}>
        <img className={styles.image} src={imagen} alt="logo" />
        <h2>GAMING SHOP</h2>
      </div>
      <nav >
        <NavLink to="/formGame" style={{ textDecoration: "none", color: "black" }}>CREAR JUEGO</NavLink>
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
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
}
import { NavLink } from "react-router-dom";
import imagen from "./logogamer2.jpg";
import styles from "./encabezado.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../components/Login/Login";
import Logout from "../../components/Logout/Logout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Loading from "../../utils/Loading/Loading";

export default function Encabezado() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  const dbUser = useSelector((state) => state.user);
  
  useEffect(() => {
    if (user?.email) {
      dispatch(checkUser(user?.name, user?.email));
    }
  }, [user]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.enc}>
      <div className={styles.logo}>
        <img className={styles.image} src={imagen} alt="logo" />
        <h2>GAMING SHOP</h2>
      </div>
      <nav >
      {
          dbUser?.level?.nameLevel === "admin" && (
            <NavLink to="/admin" className={styles.encab} style={{ textDecoration: "none", color: "black" }}>DASHBOARD</NavLink>
          )
        }
        <NavLink to="/soporte" className={styles.encab} style={{ textDecoration: "none", color: "black" }} >SUPORT</NavLink>
        {isAuthenticated && (
            <NavLink to="/biblioteca" className={styles.encab} style={{ textDecoration: "none", color: "black" }}>LIBRARY</NavLink>
          )}
        {isAuthenticated && (
            <NavLink to="/perfil" className={styles.encab} style={{ textDecoration: "none", color: "black" }}>PROFILE</NavLink>
          )}
      </nav>
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
}
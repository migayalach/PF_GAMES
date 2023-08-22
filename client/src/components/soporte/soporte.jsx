import { NavLink } from "react-router-dom";
import Encabezado from "../../views/encabezado/encabezado";
import NavBar from "../NavBar/NavBar";
import styles from './soporte.module.css'
import Footer from "../Footer/footer";

export default function Soporte() {
    const email = "shopgaming231@gmail.com";
    
    const sendEmail = (subject) => {
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}`;
      window.open(gmailLink);
    };
    
    return(
        <div>
            <Encabezado/>
            <NavBar/>
            <div className={styles.soporteContainer}>
              <h1>PREGUNTAS FRECUENTES</h1>
              <hr className={styles.hr}/>
              
              <NavLink onClick={() => sendEmail("Asistencia: Pedidos y productos")}>
                <div className={styles.textContainer}>
                  <h2 style={{ color: " #01C38E", fontSize: "2rem" }}>Pedidos y productos</h2>
                  <h3 style={{ color: "black" }}>Asistencia para la activación de códigos e información sobre el producto.</h3>
                </div>
              </NavLink>
              
              <hr className={styles.hr}/>
              
              <NavLink onClick={() => sendEmail("Asistencia: Pago")}>
                <div className={styles.textContainer}>
                  <h2 style={{ color: " #01C38E", fontSize: "2rem" }}>Pago</h2>
                  <h3  style={{ color: "black" }}>Ayuda para resolver cualquier problema o duda relacionada con los pagos.</h3>
                </div>
              </NavLink>
              
              <hr className={styles.hr}/>
              
              <NavLink onClick={() => sendEmail("Asistencia: Cuenta y seguridad")}>
                <div className={styles.textContainer}>
                  <h2 style={{ color: " #01C38E", fontSize: "2rem" }}>Cuenta y seguridad</h2>
                  <h3  style={{ color: "black" }}>Asistencia en la gestión de cuentas y seguridad.</h3>
                </div>
              </NavLink>
              
              <hr className={styles.hr}/>
              
              <NavLink onClick={() => sendEmail("Asistencia: Otros asuntos")}>
                <div className={styles.textContainer}>
                  <h2 style={{ color: " #01C38E", fontSize: "2rem" }}>Otros asuntos</h2>
                  <h3 style={{ color: "black" }}>¿Aún tienes preguntas? ¡Te respondemos!</h3>
                </div>
              </NavLink>
              
              <hr className={styles.hr}/>
            </div>
            <Footer/>
        </div>
    )
}

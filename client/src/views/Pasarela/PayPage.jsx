import { useSelector } from "react-redux";
import Market from "./Market";

import estilo from "./PayPage.module.css"

const Pay = () => {
    const productos = useSelector((state) => state.cart)
    console.log("BANDERA PAYPAGE", productos); 
    return (
        <div className={estilo.contenedorPadre}>
          <h1>PRODUCTOS SELECCIONADOS: </h1>
            {productos.map((index) => (
            <div className={estilo.contenedorGame}>
                <h1 className={estilo.descriptionGame}>{`${index.nameGame}: $${index.cost}`}
                </h1>
            </div>
            ))}
                <Market productos = {productos} ></Market>
        </div>
    )
}

export default Pay;
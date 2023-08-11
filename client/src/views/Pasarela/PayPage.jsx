import { useSelector } from "react-redux";
import Market from "./Market";
import { deleteItem } from "../../redux/actions";
import { useDispatch } from "react-redux";

import estilo from "./PayPage.module.css"


const Pay = () => {
    const dispatch = useDispatch()

    const deleteProductPay = (product) => {
        dispatch(deleteItem(product.idGame));
    };
    

    const productos = useSelector((state) => state.cart)
    console.log("BANDERA PAYPAGE", productos); 
    return (
        <div className={estilo.contenedorPadre}>
          <h1>TUS PRODUCTOS</h1>
            {productos.map((index) => (
            <div className={estilo.contenedorGame}>
                <img src={index.image} alt="" className={estilo.gameImage} />
                <h1 className={estilo.descriptionGame}>{`${index.nameGame}: $${index.cost}`}
                </h1>
                <svg className={estilo.iconClos} onClick={() => deleteProductPay(index)}>
                </svg>
            </div>
            ))}
                <Market productos = {productos} ></Market>
        </div>
    )
}

export default Pay;
import { useSelector } from "react-redux";
import Market from "./Market";
import { deleteItem, agregadoACarrito } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useAccessStandar } from "../../hooks/useAccessStandar";

import estilo from "./PayPage.module.css"
import Encabezado from "../encabezado/encabezado";

const Pay = () => {
    const dispatch = useDispatch()

    const deleteProductPay = (product) => {
        dispatch(deleteItem(product.idGame));
        dispatch(agregadoACarrito(false));
    };


    const productos = useSelector((state) => state.cart)
    useAccessStandar();
    return (
        <>
            <Encabezado />
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
                <Market productos={productos} ></Market>
            </div>
        </>
    )
}

export default Pay;

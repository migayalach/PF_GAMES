import { useState, useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countTotal, deleteItem, deleteProducts } from "../../redux/actions";
import estilo from './Carrito.module.css'

const Cart = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false);
    const productos = useSelector((state) => state.cart)
    const total = useSelector((state) => state.cartTotal)
    const [countProducts, setCountProducts] = useState(0);

    useEffect(() => {
        const newTotal = productos?.reduce((acc, product) => acc + product.cost, 0);
        dispatch(countTotal(newTotal))
        setCountProducts(productos.length)
    }, [productos]);


    const deleteProductCart = (product) => {
        dispatch(deleteItem(product.idGame))
    };

    const clearCart = () => {
        dispatch(deleteProducts());
        setCountProducts(0);
    }

    return (
        <>
            <div className={estilo.contenedorPadre}>
                <div className={estilo.containerIcon}>
                    <div
                        className={estilo.containerCartIcon}
                        onClick={() => setActive(!active)}
                    >
                        <div className={estilo.cont}>
                            <svg className={estilo.btn}></svg>
                            <div className={estilo.countProducts}>
                                <span id='contador-productos'>{countProducts}</span>
                            </div>
                        </div>
                    </div>

                    <div className={active ? estilo.containerCartProducts : estilo.hiddenCart}>
                        {productos.length ? (
                            <>
                                <div className={estilo.rowProduct}>
                                    {productos.map(product => (
                                        <div className={estilo.cartProduct} key={product.id}>
                                            <div className={estilo.infoCartProduct}>
                                                {/* <span className={estilo.cantidadProductoCarrito}>
                                                    {product.quantity}
                                                </span> */}
                                                <p className={estilo.tituloProductoCarrito}>
                                                    {product.nameGame}
                                                </p>
                                                <span className={estilo.precioProductoCarrito}>
                                                    ${product.cost}
                                                </span>
                                            </div>
                                            <svg className={estilo.iconClose} onClick={() => deleteProductCart(product)}>
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                <div className={estilo.cartTotal}>
                                    <h3>Total:</h3>
                                    <span className={estilo.totalPagar}>${total}</span>
                                </div>

                                <button className={estilo.btnClearAll} onClick={clearCart}>
                                    Vaciar Carrito
                                </button>

                                <Link to={`/PayPage`}>
                                    <button className={estilo.btnClearAll}>
                                        Pasar a pagar
                                    </button>
                                </Link>

                            </>
                        ) : (
                            <p className={estilo.cartEmpty}>El carrito está vacío</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
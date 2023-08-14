import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import estilo from './CheckoutForm.module.css'
import { aprobarPago, countTotal, deleteProducts, postCheckoutId, postCompraUser } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ productos }) => {
    const dispatch = useDispatch();
    //CONFIG Stripe
    const stripe = useStripe();
    const elements = useElements();
    //FIN
    const total = useSelector(state => state.cartTotal)
    const { user } = useAuth0();
    const userAct = useSelector(state => state.users.filter(index => index.email == user?.email))
    //const userAct = useSelector(state => state.users)
  
    console.log("PRUEBA", userAct);
    //-----------------------Método handle--------------------------

    const handleSubmit = async (event) => {
        event.preventDefault();

        //------METODO DE STRIPE--------
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        //-------FIN-------- 

        //-------------LOGICA PAGO--------------   

        if (!error) {

            const { id } = paymentMethod;
            let mont = total.toFixed();
            let objPay = {
                id,
                amount: mont * 100
            }        
            const name = event.target.elements.to_name.value;
            const numFac = event.target.elements.num_fac.value;

            //Acá comienza el envío de email de confirmación de compra    
            let email = {
            user: {
                name: name,
                email: email,
            },
        //Revisar los datos de num de factura y monto(nose si estan bien)
            compra: {
                numFac: numFac,
                amount: mont,
            }
        }
        let resEmail = await axios.post('/sendEmails/orderCreated', email);
        console.log(resEmail);
            dispatch(aprobarPago());
            dispatch(postCheckoutId(objPay));
            dispatch(deleteProducts());
            dispatch(countTotal(0))

            //---------PENDIENTE---------
            productos.forEach(producto => {
                dispatch(postCompraUser({
                    idUser: userAct[0]?.idUser,
                    idGame: producto.idGame,
                    amount: mont
                }));
            });
            //---------PENDIENTE---------

        } else {
            Swal.fire({
                title: 'Error',
                text: "Ups! algo salió mal",
                icon: "error"
            })
        }


    }
    //Fin método handle
    return (
        <div className={estilo.contenedorPadre}>
            <div>
                <form className={estilo.formPay} onSubmit={event => handleSubmit(event)}>
                    <label>Nombre del comprador</label>
                    <h1>{user.name}</h1>
                    <label>Email al cual enviar factura</label>
                    <h1>{user.email}</h1>
                    <h3 className="text-center">TOTAL: $ {total}</h3>
                    <div className={estilo.subContenedor}>
                        <CardElement className="form-control" />
                    </div>
                    <button className={estilo.btn} >
                        CONFIRMAR COMPRA
                    </button>
                    <Link to = "/videogames">
                    <button>CASA</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm;

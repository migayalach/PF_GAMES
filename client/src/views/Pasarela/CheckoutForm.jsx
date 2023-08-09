import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import estilo from './Prueba.module.css'

const CheckoutForm = ({ productos }) => {
    //CONFIG Stripe
    const stripe = useStripe();
    const elements = useElements();
    //FIN
    const total = useSelector(state => state.cartTotal)
    const dispatch = useDispatch();

    //-----------------------Método handle--------------------------

    const handleSubmit = async (event) => {
        event.preventDefault();

        //------METODO DE STRIPE--------
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)

        })
        //-------FIN-------- 
        console.log("BANDER CHECKOUT", paymentMethod);

        //-------------LOGICA PAGO--------------   

        if (!error) {
            Swal.fire({
                title: 'TESTEANDO',
                text: "ESTO ES UNA PRUEBA",
                icon: "info"
            })
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
        <div style={{ textAlign: 'center', display: "flex", justifyContent: "center" }}>
            <div>
                <form style={{ display: "flex", flexDirection: "column"}} className="card card-body" onSubmit={event => handleSubmit(event)}>
                    <h2 htmlFor="">Completa los datos para la factura</h2>
                    <label>Nombre del comprador</label>
                    <input type="text" name="to_name" placeholder="Tu nombre aquí" />
                    <label>Email al cual enviar factura</label>
                    <input style={{height: "25px"}} type="email" name="user_email" placeholder="Tu correo electronico aquí" />

                    <h3 className="text-center">TOTAL: $ {total}</h3>
                    <div style={{borderStyle: "solid", borderColor: "black", backgroundColor: "gold"}}>
                        <CardElement className="form-control" />
                    </div>
                    <button className={estilo.btn} >
                        CONFIRMAR COMPRA
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm;

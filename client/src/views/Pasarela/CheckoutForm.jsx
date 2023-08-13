import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import estilo from './CheckoutForm.module.css'
import { deleteProducts, postCheckoutId } from "../../redux/actions";
import axios from "axios";


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

        //-------------LOGICA PAGO--------------   

        if (!error) {
            
            const {id} = paymentMethod;
            let mont = total.toFixed();
            let objPay = {
                id,
                amount: mont * 100
            }

            dispatch(postCheckoutId(objPay));
            dispatch(deleteProducts());
        
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
        
        //---------PENDIENTE---------
            // productos.forEach(producto => {
            //     dispatch(postCompraUser({
            //         idUser: user,
            //         idPlan: producto.idPlan,
            //         amount: mont
            //     }));
            // });
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
                    <h2 htmlFor="">Completa los datos para la factura</h2>
                    <label>Nombre del comprador</label>
                    <input type="text" name="to_name" placeholder="Tu nombre aquí" />
                    <label>Email al cual enviar factura</label>
                    <input className={estilo.input} type="email" name="user_email" placeholder="Tu correo electronico aquí" />
                    <h3 className="text-center">TOTAL: $ {total}</h3>
                    <div className={estilo.subContenedor}>
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

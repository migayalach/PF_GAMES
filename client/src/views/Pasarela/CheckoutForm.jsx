import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import estilo from "./CheckoutForm.module.css";
import {
  aprobarPago,
  countTotal,
  deleteProducts,
  postCheckoutId,
  postCompraUser,
} from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const CheckoutForm = ({ productos }) => {
  const dispatch = useDispatch();
  //CONFIG Stripe
  const stripe = useStripe();
  const elements = useElements();
  //FIN
  const total = useSelector((state) => state.cartTotal);
  const { user } = useAuth0();
  const userAct = useSelector((state) => state.user);


  //-----------------------Método handle--------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();

    //------METODO DE STRIPE--------
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    //-------FIN--------

    //-------------LOGICA PAGO--------------

    if (!error) {
      const { id } = paymentMethod;
      let mont = total.toFixed();
      let objPay = {
        id,
        amount: mont * 100,
      };
      dispatch(aprobarPago());
      dispatch(postCheckoutId(objPay));
      dispatch(deleteProducts());
      dispatch(countTotal(0));
      //---------PENDIENTE---------
      productos.forEach((producto) => {
        dispatch(
          postCompraUser({
            idUser: userAct.idUser,
            idGame: producto.idGame,
            amount: mont,
          })
        );
      });
      sendEmail();
      //---------PENDIENTE---------

    } else {
      Swal.fire({
        title: "Error",
        text: "Oops! something went wrong",
        icon: "error",
      });
    }
  };
  //Fin método handle

  const sendEmail = () => {
    const userName = user.name;
    const userEmail = user.email;
    let templateParams = {
      from_name: userName,
      to_email: userEmail,
      user_email: userEmail,
    };

    emailjs.send(
      "service_yuf9stp",
      "template_qptp1zr",
      templateParams,
      "V08KUVn8ox1Prhrh5"
    ).then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
  }

  useEffect(() => {
    const newTotal = productos?.reduce((acc, product) => acc + product.cost, 0);
    dispatch(countTotal(newTotal))
  }, [productos]);

  return (
    <div className={estilo.contenedorPadre}>
      <div>
        <form
          className={estilo.formPay}
          onSubmit={(event) => handleSubmit(event)}
        >
          <label>Name of the buyer</label>
          <h1>{user.name}</h1>
          <label>Email to send invoice</label>
          <p>{user.email}</p>
          <h3 className="text-center">TOTAL: $ {total}</h3>
          <div className={estilo.subContenedor}>
            <CardElement className="form-control" />
          </div>
          <div className={estilo.contenedorBtn}>
            <br />
            <button className={estilo.btn}>CONFIRM PURCHASE</button>
            <br />
            <h3>-------------------OR-------------------</h3>
            <br />
            <Link to="/videogames">
              <button className={estilo.btn}>
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

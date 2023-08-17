import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail.style.css"
import { useDispatch, useSelector } from "react-redux";
import { addProducts, agregadoACarrito, getById, getComprasUser } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import NavBar from "../../components/NavBar/NavBar";
import Encabezado from "../encabezado/encabezado";

const Detail = () => {
  const { id } = useParams();
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.filter(index => index.email == user?.email))

  useEffect(() => {
    if (user) {
      dispatch(getComprasUser(currentUser[0]?.idUser));
    }
    dispatch(getById(id));
  }, [user, dispatch, id]);

  const compras = useSelector(state => state.comprasUser) //.boughts?.filter(index => index.gameIdGame == id));
  const comprobando = compras.boughts?.filter((index) => index.gameIdGame == id)
  const agregado = useSelector(state => state.agregado);

  const handleAdd = (plan) => {
    if (!user) {
      Swal.fire({
        title: "Debes iniciar sesión",
        icon: "info",
        showCloseButton: true,
        confirmButtonText: "OK",
        timer: 4000
      });
    } else {
      dispatch(addProducts(plan));
      dispatch(agregadoACarrito(true));
      Swal.fire({
        title: "Se agregó el producto al carrito!",
        text: "Revisa el carrito",
        timer: 4000,
        icon: "success"
      });
    }
  }

  const game = useSelector((state) => state.game);

  return (
    <>
      {user ? <></> : <Encabezado/>}
      <NavBar />
      <div className="container" style={{ backgroundImage: `url(${game?.image})` }}>
        <Link to="/videogames">
          <div className="home-button"></div>
        </Link>

        {game && (
          <div className="content" key={game.id}>
            <h1>{game?.nameGame}</h1>
            <img src={game?.image} alt="imagen allGame" />
            <p>{game?.description}</p>
            <p>{game?.cost}</p>
            <ul>
              {game.genders?.map(gm => (
                <li>{gm.nameGenders}</li>
              ))}
            </ul>
            {
              user?.email && comprobando?.length && currentUser?.length
                ? currentUser[0].email == user.email && comprobando[0]?.gameIdGame == id
                  ?
                  <Link to="/biblioteca">
                    <div
                      className="check-button"
                      title="Ir a biblioteca"
                    ></div>
                  </Link>
                  :
                  <div
                    className="cart-button"
                    onClick={() => handleAdd(game)}
                    title="Agregar al carrito"
                  ></div>
                :
                <div
                  className="cart-button"
                  onClick={() => handleAdd(game)}
                  title="Agregar al carrito"
                ></div>
            }
          </div>
        )}
      </div>
    </>
  )
}

export default Detail;
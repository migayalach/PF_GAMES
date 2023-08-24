import style from "./detail.module.css";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, agregadoACarrito, getById, getComprasUser, getRating } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import NavBar from "../../components/NavBar/NavBar";
import Encabezado from "../encabezado/encabezado";
import imagenRating from '../../assets/RATINGS.png'



const Detail = () => {
  const { id } = useParams();
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user)
  useEffect(() => {
    if (user) {
      dispatch(getComprasUser(currentUser.idUser));
    }
    dispatch(getById(id));
    dispatch(getRating());
  }, [user, dispatch, id]);

  const compras = useSelector(state => state.comprasUser)
  const comprobando = compras.boughts?.filter((index) => index.gameIdGame == id)
  const agregado = useSelector(state => state.agregado);
  const ratings = useSelector(state => state.ratings?.filter(rating => rating.gameIdGame == id));
  const carrito = useSelector(state => state.cart?.filter(producto => producto.idGame == id));

  const handleAdd = (plan) => {
    if (!user) {
      Swal.fire({
        title: "You must log in...",
        icon: "info",
        showCloseButton: true,
        confirmButtonText: "got it",
        timer: 4000
      });
    } else {
      dispatch(addProducts(plan));
      dispatch(agregadoACarrito(true));
      Swal.fire({
        title: "Product added to the cart!",
        text: "Checkout the cart",
        timer: 4000,
        icon: "success"
      });
    }
  }

  const game = useSelector((state) => state.game);

  return (
    <>
      <div className={style.container} style={{ backgroundImage: `url(${game?.image})`, marginTop: "40px" }}>
        <Link to="/videogames">
          <div className={style["home-button"]}></div>
        </Link>
        {game && (
          <div className={style.content} key={game.id}>
            <h1>{game?.nameGame}</h1>
            <img src={game?.image} alt="imagen allGame" />
            <p>{game?.description}</p>
            <div className={style["price-overlay"]}>${game?.cost}</div>
            <ul>
              <div className={style.Generos}>{game.genders?.map(gm => (
                <li>{gm.nameGenders}</li>
              ))}</div>
            </ul>
            <div className={style["ratings-container"]}>
              {
                ratings || ratings.length > 0 && (
                  <>
                    <div className="imagenRating">
                      <img src={imagenRating} alt="imagen Rating" />
                    </div>
                    {
                      ratings.map((index) => {
                        return (
                          <div className="ratingItem" key={index.id}>
                            {[...Array(5)].map((_, starIndex) => (
                              <FaStar key={starIndex} color={"#ffc107"} />
                            ))}
                            <p>{index.amountStars}</p>
                            <h2>{index.comment}</h2>
                          </div>
                        )
                      })
                    }
                  </>
                )
              }
            </div>
            {
              user?.email && comprobando?.length && currentUser
                ? currentUser.email === user.email && comprobando[0]?.gameIdGame === id
                  ?
                  <Link to="/biblioteca">
                    <div
                      className={style["check-button"]}
                      title="Ir a biblioteca"
                    ></div>
                  </Link>
                  :
                  <div
                    className={style["cart-button"]}
                    onClick={() => handleAdd(game)}
                    title="Agregar al carrito"
                  ></div>
                :
                carrito[0]?.idGame === id
                  ?
                  <div
                    className={style["agregado-button"]}
                    title="Agregar al carrito"
                  ></div>
                  :
                  <div
                    className={style["cart-button"]}
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

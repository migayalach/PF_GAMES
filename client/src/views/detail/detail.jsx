import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail.style.css"
import { useDispatch, useSelector } from "react-redux";
import { addProducts, getById } from "../../redux/actions";
 
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  // const handleAdd = (plan) => {
  //   dispatch(addProducts(plan))
  // }

  const game = useSelector((state) => state.game);

  return (
    <div className="container">
      {game && (
        <div key={game.id}>
          <h1>{game?.nameGame}</h1>
          <img src={game?.image} alt="imagen allGame"/>
          <p>{game?.description}</p>
          <p>{game?.cost}</p>
          <ul>
            {
              game.genders?.map(gm => (
                <li>{gm.nameGenders}</li>
              ))
            }
          </ul>
        </div>
      )}
      {/* <button onClick={() => handleAdd(game)}>AGREGAR A CARRITO</button> */}
      <Link to="/"> 
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Detail;

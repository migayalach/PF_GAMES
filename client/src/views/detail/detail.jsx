import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail.style.css"
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const games = useSelector((state) => state.games);
  const game = games[0]; // Obtener el primer juego del array

  return (
    <div className="container">
      {game && (
        <div key={game.id}>
          <h1>{game?.name}</h1>
          <img src={game?.background_image} alt="imagen allGame"/>
          <p>{game?.detail}</p>
          <p>{game?.released}</p>
          <p>{game?.rating}</p>
          <h2>{game?.genders.join(" ")}</h2>
        </div>
      )}

      <Link to="/"> 
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Detail;

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.style.css"
import { useDispatch, useSelector } from "react-redux";
import { getById} from "../../Redux/Actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getById(id));
    },[dispatch,id]);

    const allGames = useSelector((state) => state.allGames);
    console.log(allGames);
  
  return (
    <div className="container">
    {allGames?.map((allGame) => {
  return (
    <div key={allGame.id}>
   <h1>{allGame?.name}</h1>
  <img src={allGame?.background_image} alt="imagen allGame"/>
   <p>{allGame?.detail}</p>
  <p>{allGame?.released}</p> 
  <p>{allGame?.rating}</p> 
  <h2 >{allGame?.genres.join(" ")}</h2>
    </div>
  );
})}

<Link to="/home"> 
             <button>Home</button></Link></div>
  )
}

export default Detail;




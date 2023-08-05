import React from "react";
import Card from '../Card/Card'
import './Cards.style.css';

function Cards ({allGames}){
    const videoGamesList = Array.isArray(allGames) ? allGames : [];

    return (
      <div className="card-list">
        {videoGamesList.map((videoGame) => (
          <Card key={videoGame.id} {...videoGame} />
        ))}
      </div>
    )
}
export default Cards
import React from "react"
import Card from "./CardGame"
import styles from './Biblioteca.module.css'


const CardList = ({ gamesList }) => {
  return (
    <div className={styles.contenedorPadre}>
      {gamesList?.map((game) => (
        <Card
          key={game.idGame}
          id={game.idGame}
          name={game.nameGame}
          image={game.image}
        />
      ))}
    </div>
  );
}
export default CardList; 
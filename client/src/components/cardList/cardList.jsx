import React from "react"
import Card from "../cards/card"
import styles from './cardList.module.css'


const CardList = ({ gamesList }) => {
    return (
      <div className={styles.cardList}>
        {gamesList?.map((game) => (
          <Card
          key={game.id}
          name={game.nameGame}
          image={game.image}
          />
        ))}
      </div>
    );
  }
  export default CardList; 


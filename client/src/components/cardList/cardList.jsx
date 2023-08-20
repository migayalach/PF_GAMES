import React, {useEffect, useState} from "react";
import Card from "../cards/card";
import styles from "./cardList.module.css";
import Loading from "../../utils/Loading/Loading";
import NotFound from "../../utils/NotFound/NotFound";

const CardList = ({ gamesList }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (gamesList.length === 0) {
    return <NotFound />;
  }
    return (
      <div className={styles.cardList}>
        {gamesList?.map((game) => (
          <Card
          key={game.idGame}
          id={game.idGame}
          name={game.nameGame}
          image={game.image}
          cost={game.cost}
          />
        ))}
      </div>
    );
  }
  export default CardList; 


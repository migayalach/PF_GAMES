import styles from './Biblioteca.module.css'
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={styles.contenedorPadre}>
            <Link to={`/detail/${props.id}`}>
                <div className={styles.contenedorGame}>
                    <img src={props.image} alt={props.name} className={styles.imageContainer} />
                    <h3 className={styles.descriptionGame}>{props.name}</h3>
                </div>
            </Link>
        </div>
    )
}


export default Card;
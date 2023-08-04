import styles from './card.module.css'
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
            <div>
                
                <div className={styles.cardContainer}>
                <img src={props.image} alt={props.name} className={styles.imageContainer}/>
                </div>
                <Link
                        to={``}
                        style={{ textDecoration: "none", color: "#0ccac4" }}
                    >
                    <h3>{props.name}</h3> 
                </Link>
            </div>
    )
}


export default Card
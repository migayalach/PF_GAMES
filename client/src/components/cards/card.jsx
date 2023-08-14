import styles from './card.module.css'
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
            <div>
                <Link
                        to={`/detail/${props.id}`}
                        style={{ textDecoration: "none", color: "#0ccac4" }}
                    >
                <div className={styles.cardContainer}>
                <img src={props.image} alt={props.name} className={styles.imageContainer}/>
                </div >
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: "3px",}}>
                    <h3>{props.name}</h3> 
                    <h3 style={{color: 'black' }}>${props.cost}</h3>
                </div>
                </Link>
            </div>
    )
}


export default Card;
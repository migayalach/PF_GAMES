import { Link } from 'react-router-dom';
import './Card.style.css'


const Card  = ({id, name, background_image, genres} ) => { 

    return (
       
       <div className= 'card-container'>
  
          <Link to = {`/home/${id}`}> 
          <div className = 'face front'>
             <img src={background_image} alt=""/> 
             <p> Nombre: {name}</p>
             <p> Género: {genres.join(", ")}</p>
          </div>
           </Link>
       </div>
    );
  }
  export default Card;
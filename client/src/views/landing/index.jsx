import estilo from './landing.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenders, getRating, obtenerUsers } from '../../redux/actions';
import { FaStar } from "react-icons/fa";
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';
import Footer from "../../components/Footer/footer";
import CardList from "../../components/cardList/cardList";
import { FaStar } from "react-icons/fa";
import estilo from './landing.module.css'
import tuImagen from '../../assets/hello(2).png'
export default function Landing() {
  const allGames = useSelector((state) => state.games);
  const { action, sports, adventure } = useSelector((state) => state.gamesByGenres);
  const dispatch = useDispatch();
  const juegosActuales = allGames
  
  useEffect(() => {
    dispatch(gamesByGenders("Action"));
    dispatch(getRating());
    dispatch(gamesByGenders("Adventure"));
    dispatch(obtenerUsers());
  }, []);
  
  const ratings = useSelector((state) => state.ratings);
  const prueba = allGames.filter(obj1 => ratings?.some(obj2 => obj2.gameIdGame === obj1.idGame));
  const allUsers = useSelector((state) => state.adminUsers);
  const nombreUser = allUsers.filter(obj1 => ratings?.some(obj2 => obj2.userInfoIdUser === obj1.idUser));
  console.log("Ratings", ratings)
  console.log("USUARIOS", nombreUser);

  
  const limitedActionImages = action ? action.slice(12, 17, 20) : [];
  const limitedAdventureImages = adventure ? adventure.slice(6, 11) : [];

  // Limita juegosActuales a solo 8 juegos
  const limitedGames = juegosActuales.slice(10, 18);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextGame = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedGames.length);
  };

  useEffect(() => {
    const timer = setInterval(nextGame, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={estilo.landing}>
      <Encabezado/>
      <NavBar/>
      <Carousel images={limitedActionImages} />
              
      <div className={estilo.imageContainer}>
        <img src={tuImagen} alt="Tu Imagen" />
      </div>

      <CardList gamesList={limitedGames} currentIndex={currentIndex} />
      <Carousel images={limitedAdventureImages} />
               {
                ratings.length > 0 && (
                  <div className={estilo.ratingContainer}>
                        {
                          ratings.slice(0, 4).map((index, commentIndex) => (
                            <div key={commentIndex} className={estilo.commentContainer}>
                              <div className={estilo.commentUser}>
                                <h3>{nombreUser[commentIndex]?.nameUser}</h3>
                              </div>
                              <div className={estilo.commentContent}>
                                <h3>{prueba[commentIndex]?.nameGame}</h3>
                                {[...Array(5)].map((_, starIndex) => (
                                  <FaStar key={starIndex} color={"#ffc107"} />
                                ))}
                                <p>{index.amountStars}</p>
                                <h2>{index.comment}</h2>
                              </div>
                            </div>
                          ))
                        }
                  </div>
                )
              }
      <Footer />
    </div>
  );
}

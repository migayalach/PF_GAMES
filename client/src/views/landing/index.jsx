import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenders, getRating, obtenerUsers } from '../../redux/actions';
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';
import Footer from "../../components/Footer/footer";
import CardList from "../../components/cardList/cardList";
import { FaStar } from "react-icons/fa";
import estilo from './landing.module.css'
import tuImagen from '../../assets/hello (1).png'

export default function Landing() {
  const allGames = useSelector((state) => state.games);
  const { action, sports, adventure } = useSelector((state) => state.gamesByGenres);
  const dispatch = useDispatch();
  const juegosActuales = allGames
  
  useEffect(() => {
    dispatch(gamesByGenders("Action"));
    //dispatch(gamesByGenders("Sports"));
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

  //Solo modifique la vista de las imagenes, el resto quedo igual.
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
    <div>
      <Encabezado/>
      <NavBar/>
      <Carousel images={limitedActionImages} />
              
        <div className={estilo.imageContainer}>
          <img src={tuImagen} alt="Tu Imagen" />
        </div>

      <CardList gamesList={limitedGames} currentIndex={currentIndex} />
      <Carousel images={limitedAdventureImages} />
      {/* <Carousel images={limitedSportsImages} /> */}
      {
                ratings && (
                  <div className={estilo.ratingContainer}>
                    {
                      ratings.map((index) => {
                        return (
                          <>
                          <h3>{nombreUser[0]?.nameUser}</h3>
                            {
                              [...Array(5)].map(() => {
                                return (
                                  <label>
                                    <input
                                      className="input"
                                      type="radio"
                                      disabled={true}
                                    />
                                    <FaStar
                                      color={"#ffc107"}
                                    />
                                  </label>
                                )
                              })
                            }
                            <p>{index.amountStars}</p>
                            <h3>{prueba[0]?.nameGame}</h3>
                            <h2>{index.comment}</h2>
                          </>
                        )
                      })
                    }
                  </div>
                )
              }
      <Footer />
    </div>
  );
}
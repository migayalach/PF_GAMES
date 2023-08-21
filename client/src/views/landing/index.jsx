import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenders } from '../../redux/actions';
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';
import Footer from "../../components/Footer/footer";
import CardList from "../../components/cardList/cardList";

export default function Landing() {
  const allGames = useSelector((state) => state.games)
  const { action, sports, adventure } = useSelector((state) => state.gamesByGenres);
  const dispatch = useDispatch();
  const juegosActuales = allGames

  useEffect(() => {
    dispatch(gamesByGenders("Action"));
    //dispatch(gamesByGenders("Sports"));
    dispatch(gamesByGenders("Adventure"));
  }, []);

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
      <CardList gamesList={limitedGames} currentIndex={currentIndex} />
      <Carousel images={limitedAdventureImages} />
      {/* <Carousel images={limitedSportsImages} /> */}
      <Footer />
    </div>
  );
}

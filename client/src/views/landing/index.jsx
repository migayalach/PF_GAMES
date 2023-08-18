import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenders } from '../../redux/actions'
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';

export default function Landing() {
  const { action, sports, adventure } = useSelector(state => state.gamesByGenres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gamesByGenders("Action"));
    dispatch(gamesByGenders("Sports"));
    dispatch(gamesByGenders("Adventure"));
  }, []);

  const limitedActionImages = action.slice(0, 5); // Obtener solo las primeras 5 imágenes
  const limitedAdventureImages = adventure.slice(0, 5);
  const limitedSportsImages = sports.slice(0, 5);

    return (
    <div>
      <Encabezado/>
      <NavBar/>
      <Carousel images={limitedActionImages} /> {/* Pasar las imágenes limitadas al Carousel */}
      <Carousel images={limitedAdventureImages} />
      <Carousel images={limitedSportsImages} />
    </div>
  );
}
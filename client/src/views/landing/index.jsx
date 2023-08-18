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
  //Solo modifique la vista de las imagenes, el resto quedo igual.
  const limitedActionImages = action.slice(0, 5); // Obtener solo las primeras 5 imágenes
  const limitedAdventureImages = adventure.slice(6, 11);
  const limitedSportsImages = sports.slice(12, 17);

    return (
    <div>
      <Encabezado/>
      <NavBar/>
      <Carousel images={limitedActionImages} />
      <Carousel images={limitedAdventureImages} />
      <Carousel images={limitedSportsImages} />
    </div>
  );
}
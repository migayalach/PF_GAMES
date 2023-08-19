import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenders } from '../../redux/actions'
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';
import footer from "../../components/Footer/footer";

export default function Landing() {
  const { action, sports, adventure } = useSelector(state => state.gamesByGenres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gamesByGenders("Action"));
    dispatch(gamesByGenders("Sports"));
    dispatch(gamesByGenders("Adventure"));
  }, []);
  //Solo modifique la vista de las imagenes, el resto quedo igual.
  const limitedActionImages = action ? action.slice(12, 17) : []; //Diferentes numeros para que no se repitan las imagenes
  const limitedAdventureImages = adventure ? adventure.slice(6, 11) : [];
  const limitedSportsImages = sports ? sports.slice(0, 5) : [];

    return (
    <div>
      <Encabezado/>
      <NavBar/>
      <Carousel images={limitedActionImages} />
      <Carousel images={limitedAdventureImages} />
      <Carousel images={limitedSportsImages} />
      <footer />
    </div>
  );
}
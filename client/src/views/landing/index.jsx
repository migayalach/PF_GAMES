import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesByGenders } from "../../redux/actions";
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';

export default function Landing() {
  const dispatch = useDispatch();
  const { rpg, sports, shooter } = useSelector(state => state.gamesByGenres);
  useEffect(() => {
    dispatch(gamesByGenders("RPG"));
    dispatch(gamesByGenders("Sports"));
    dispatch(gamesByGenders("Shooter"));
  }, []);
  return (
    <div>
      <Encabezado/>
      <NavBar/>
      <Carousel images={rpg}/>
      <Carousel images={shooter}/>
      <Carousel images={sports}/>
    </div>
  );
}
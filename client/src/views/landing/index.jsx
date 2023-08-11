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
  return (
    <div>
      <Encabezado/>
      <NavBar/>
      <Carousel images={action}/>
      <Carousel images={adventure}/>
      <Carousel images={sports}/>
    </div>
  );
}
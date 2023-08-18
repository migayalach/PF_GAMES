import { useSelector } from "react-redux";
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from '../../components/Carousel/Carousel';

export default function Landing() {
  const { action, sports, adventure } = useSelector(state => state.gamesByGenres);
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
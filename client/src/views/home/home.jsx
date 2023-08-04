import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"

import CardList from "../../components/cardList/cardList";
import Encabezado from "../encabezado/encabezado";
import NavBar from "../navBar/navBar";
import { getGames } from "../../redux/actions"

import "./home.styles.css"

export default function Home(){
    const dispatch = useDispatch()
    const allGames = useSelector((state) => state.games)

    useEffect(() => {
          dispatch(getGames());
      }, []);
    return(
        <div>
            <Encabezado/>
            <NavBar/>
            <CardList gamesList={allGames}/>
            
        </div>
    )

};
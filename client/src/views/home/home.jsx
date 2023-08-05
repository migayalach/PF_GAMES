import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"

import CardList from "../../components/cardList/cardList";
import Encabezado from "../encabezado/encabezado";
import NavBar from "../navBar/navBar";
import { getGames } from "../../redux/actions"
import { useState } from "react";
import Paginado from "../../components/Paginado/Paginado";
import "./home.styles.css"

export default function Home(){
    const dispatch = useDispatch()
    const allGames = useSelector((state) => state.games)

    const [pagActual, setPagActual] = useState(1);
    const [cantidadPorPag] = useState(10);
    const ultimoIndice = pagActual * cantidadPorPag
    const primerIndice = ultimoIndice - cantidadPorPag
    const juegosActuales = allGames?.slice(primerIndice, ultimoIndice)

    const paginado = (pageNumber) => {
        setPagActual(pageNumber)
    }

    console.log("HOME", allGames);

    useEffect(() => {
        dispatch(getGames());
    }, []);
    return(
        <div>
            <Encabezado/>
            <NavBar/>
            <Paginado cantidadPorPag={cantidadPorPag} juegos={allGames.length} paginado={paginado}/>
            <CardList gamesList={juegosActuales}/>
            
        </div>
    )

}; 
import { useSelector } from "react-redux"
import { useState } from "react";
import CardList from "../../components/cardList/cardList";
import Encabezado from "../encabezado/encabezado";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/Paginado";
import Filters from '../../components/Filters'
import Carousel from '../../components/Carousel/Carousel';
import "./home.styles.css"

export default function Home(){
    const allGames = useSelector((state) => state.games)
    const filtersActive = useSelector(state => state.filtersActive)
    const [pagActual, setPagActual] = useState(1);
    const [cantidadPorPag] = useState(10);
    const ultimoIndice = pagActual * cantidadPorPag
    const primerIndice = ultimoIndice - cantidadPorPag
    const juegosActuales = allGames?.slice(primerIndice, ultimoIndice)

    const paginado = (pageNumber) => {
        setPagActual(pageNumber)
    }

    console.log("HOME", allGames);

    return(
        <div className="home-div">
            {filtersActive ? <Filters /> : null}
            <Encabezado/>
            <NavBar/>
            <Carousel/>
            <Paginado cantidadPorPag={cantidadPorPag} juegos={allGames.length} paginado={paginado}/>
            <CardList gamesList={juegosActuales}/>
        </div>
    )

}; 
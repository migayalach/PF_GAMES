import Paginado from "./Paginado";
import { useState } from "react";


const Logica = ({juegos}) => {
    
    const [pagActual, setPagActual] = useState(1);
    const [cantidadPorPag] = useState(10);
    const ultimoIndice = pagActual * cantidadPorPag
    const primerIndice = ultimoIndice - cantidadPorPag
    const juegosActuales = juegos?.slice(primerIndice, ultimoIndice)

    const paginado = (pageNumber) => {
        setPagActual(pageNumber)
    }

    return(
        <>
            <Paginado cantidadPorPag={cantidadPorPag} juegos={juegos.length} paginado={paginado}/>
        </>
    )
}

export default Logica;
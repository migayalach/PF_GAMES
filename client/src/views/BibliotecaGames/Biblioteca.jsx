import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getComprasUser, getRating } from '../../redux/actions';
import { useState } from 'react';
import estilo from './Biblioteca.module.css';
import Encabezado from '../encabezado/encabezado';
import CardsGame from "./CardsGame";
import Paginado from '../../components/Paginado/Paginado';
import { Link } from 'react-router-dom';

const Biblioteca = () => {

    const { user } = useAuth0();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.filter(index => index.email == user?.email))

    useEffect(() => {
        if (user) {
            dispatch(getComprasUser(currentUser[0]?.idUser));
        }
    }, [user, dispatch]);

    const compras = useSelector(state => state.comprasUser.boughts)
    const videojuegos = useSelector(state => state.games);
    const copia = [...videojuegos];
    const juegosComprados = copia.filter(obj1 => compras?.some(obj2 => obj2.gameIdGame === obj1.idGame))


    const [pagActual, setPagActual] = useState(1);
    const [cantidadPorPag] = useState(10);
    const ultimoIndice = pagActual * cantidadPorPag
    const primerIndice = ultimoIndice - cantidadPorPag
    const juegosActuales = juegosComprados?.slice(primerIndice, ultimoIndice)

    const paginado = (pageNumber) => {
        setPagActual(pageNumber)
    }

    useEffect(() => {
        dispatch(getRating());
    }, [])
    


    return (
        <>
            <Encabezado />
            {
                compras?.length 
                ?
                    <div className={estilo.contenedorPadre}>
                        <Link to="/videogames">
                            <button>INICIO</button>
                        </Link>
                        <Paginado cantidadPorPag={cantidadPorPag} juegos={juegosComprados.length} paginado={paginado}></Paginado>
                        <CardsGame gamesList={juegosActuales} />
                    </div>
                : 
                    <div className={estilo.contenedorPadre}>
                        <h1>Aún no registras compras...</h1>
                        <img src="https://blog.fluidui.com/assets/images/posts/imageedit_1_9273372713.png" alt="" />
                        <Link to="/videogames">
                            <button>INICIO</button>
                        </Link>
                    </div>
            }
        </>
    )
}

export default Biblioteca;
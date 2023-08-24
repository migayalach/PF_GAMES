import style from './nav.module.css'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { filtersActive } from '../../redux/actions.js'
import { Link, NavLink, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx'
import Cart from '../Carrito/Carrito.jsx'
import Loading from '../../utils/Loading/Loading.jsx'

const NavBar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }
    return (
        <div className={style.nav}> 
            <a id={location.pathname === '/' ? style.active : null} href='/' onClick={handleLoading}>HOME</a>
            <a id={location.pathname === '/videogames' ? style.active : null} href='/videogames'>GAMES</a>
            {location.pathname === '/videogames' ? <SearchBar/> : null}
            {
                location.pathname === '/videogames'
                ? <button className={style.filter} onClick={() => dispatch(filtersActive())} style={{marginLeft: "40px", marginRight: "40px"}}>Filters</button>
                : null
            }
            <Cart/>
            {loading && <Loading/>}
        </div>
    )
}

export default NavBar;

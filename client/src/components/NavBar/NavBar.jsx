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
        <nav className={style.nav}> 
            <Link id={location.pathname === '/' ? style.active : null} to='/' onClick={handleLoading}>HOME</Link>
            <Link id={location.pathname === '/videogames' ? style.active : null} to='/videogames'>GAMES</Link>
            {location.pathname === '/videogames' ? <SearchBar/> : null}
            {
                location.pathname === '/videogames'
                ? <button className={style.filter} onClick={() => dispatch(filtersActive())} style={{marginLeft: "40px", marginRight: "40px"}}>Filters</button>
                : null
            }
            <Cart/>
            {loading && <Loading/>}
        </nav>
    )
}

export default NavBar;

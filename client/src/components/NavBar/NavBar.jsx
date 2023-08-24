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
       // <nav className={style.nav}> 
        //     <NavLink id={location.pathname === '/' ? style.active : null} to='/' onClick={handleLoading}>HOME</NavLink>
        //     <NavLink id={location.pathname === '/videogames' ? style.active : null} to='/videogames'>GAMES</NavLink>
        //     {location.pathname === '/videogames' ? <SearchBar/> : null}
        //     {
        //         location.pathname === '/videogames'
        //         ? <button className={style.filter} onClick={() => dispatch(filtersActive())} style={{marginLeft: "40px", marginRight: "40px"}}>Filters</button>
        //         : null
        //     }
        //     <Cart/>
        //     {loading && <Loading/>}
        // </nav>
        
<div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}> 
        <Link to='/' onClick={handleLoading}>
        <button>HOME</button></Link>
        <Link to='/videogames'>
        <button>GAMES</button></Link>
        <SearchBar/>
        {
            location.pathname === '/videogames'
            ? <button id='btnFilter' onClick={() => dispatch(filtersActive())} style={{marginLeft: "40px", marginRight: "40px"}}>Filters</button>
            : null
        }
        <Cart/>
        {loading && <Loading/>}
    </div>
    )
}

export default NavBar;

import React from 'react'
import { useDispatch } from 'react-redux'
import { Nav, NavButton } from './NavBar.styles.js'
import { filtersActive } from '../../redux/actions.js'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Cart from '../Carrito/Carrito.jsx'

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <Nav style={{ display: "flex", justifyContent: "center", alignItems:"center" }}> 
            <Link to='/' >
            <NavButton>HOME</NavButton></Link>
            <Link to='/videogames'>
            <NavButton>GAMES</NavButton></Link>
            <SearchBar/>
            <button onClick={() => dispatch(filtersActive())} style={{marginLeft: "40px", marginRight: "40px"}}>Filters</button>
            <Cart/>
        </Nav>
    )
}

export default NavBar;
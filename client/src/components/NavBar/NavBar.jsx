import React from 'react'
import { useDispatch } from 'react-redux'
import { Nav } from './NavBar.styles.js'
import { filtersActive } from '../../redux/actions.js'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Cart from '../Carrito/Carrito.jsx'

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <Nav> 
            <Link to='/'>Home</Link>
            <Link to='/videogames'>Games</Link>
            <SearchBar/>
            <button onClick={() => dispatch(filtersActive())}>Filters</button>
            <Cart/>
        </Nav>
    )
}

export default NavBar;
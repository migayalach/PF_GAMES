import React from 'react'
import { useDispatch } from 'react-redux'
import { Nav} from './NavBar.styles.js'
import { filtersActive } from '../../redux/actions.js'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Cart from '../Carrito/Carrito.jsx'

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <Nav> 
            <SearchBar/>
            <button onClick={() => dispatch(filtersActive())}>Filters</button>
            <Cart/>
        </Nav>
    )
}

export default NavBar;
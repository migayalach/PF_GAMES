import React from 'react'
import { useDispatch } from 'react-redux'
import { Nav} from './NavBar.styles.js'
import { filtersActive } from '../../redux/actions.js'
import SearchBar from '../SearchBar/SearchBar.jsx'

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <Nav> 
            <SearchBar/>
            <button onClick={() => dispatch(filtersActive())}>Filters</button>
            {/* <CartButton>Cart</CartButton>
            <ProfileButton>Profile</ProfileButton> */}
        </Nav>
    )
}

export default NavBar;
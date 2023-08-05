import React from 'react'
import { Nav} from './NavBar.styles.js'
import SearchBar from '../SearchBar/SearchBar.jsx'

const NavBar = () => {
    return (
        <Nav> 
            <SearchBar/>
            {/* <CartButton>Cart</CartButton>
            <ProfileButton>Profile</ProfileButton> */}
        </Nav>
    )
}

export default NavBar;
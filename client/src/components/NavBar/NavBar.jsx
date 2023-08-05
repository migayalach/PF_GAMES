import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/icons8-search-35.png' 
import { Nav, Form, NavBarInput, NavBarBtn, Logo, PlatformButtons, CartButton, ProfileButton } from './NavBar.styles.js'


const NavBar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const handleinput = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
        setSearch('')
    }

    return (
        <Nav>
            {/* <Logo src={logo} alt='logo' /> */}
            <PlatformButtons>
                <button>
                    PC
                </button>
                <button>
                    Playstation
                </button>
            </PlatformButtons>
            <Form onSubmit={handleSearch}>
                <NavBarInput
                    type='search'
                    placeholder='Search'
                    value={search}
                    name='search'
                    onChange={handleinput}
                />
                <NavBarBtn type='submit'>Search</NavBarBtn>
            </Form>
            <CartButton>Cart</CartButton>
            <ProfileButton>Profile</ProfileButton>
        </Nav>
    )
}

export default NavBar;
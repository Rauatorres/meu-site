import React from 'react'

import NavbarList from './navbar/NavbarList'
import NavbarButton from './navbar/NavbarButton'

import './css/Navbar.css'

export default props=>
<nav className={`Navbar Nav${props.cor}`}>
    <NavbarList/>
    <NavbarButton/>
</nav>
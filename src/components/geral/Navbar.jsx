import React, { useState } from 'react'

import NavbarList from './navbar/NavbarList'
import NavbarMenuButton from './navbar/NavbarMenuButton'

import './css/Navbar.css'

export default props=>{
    const [screenWidth, setScreenWidth] = useState(window.screen.width)

    function exibirMenuPorTamanhoDeTela(){
        window.addEventListener('resize', ()=>{
            setScreenWidth(window.screen.width)
        })
        if(screenWidth > 768){
            return (<NavbarList/>)
        }else{
            return (<NavbarMenuButton/>)
        }
    }

    return (
        <nav className={`Navbar Nav${props.cor} Nav${props.posicao}`}>
            {exibirMenuPorTamanhoDeTela()}
        </nav>
    )
}
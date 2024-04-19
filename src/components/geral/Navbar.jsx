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
        if(screenWidth > 800){
            console.log('maior')
            return (<NavbarList/>)
        }else{
            console.log('menor')
            return (<NavbarMenuButton/>)
        }
    }

    return (
        <nav className={`Navbar Nav${props.cor} Nav${props.posicao}`}>
            {exibirMenuPorTamanhoDeTela()}
        </nav>
    )
}
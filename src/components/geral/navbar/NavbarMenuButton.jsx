import React, { useState } from 'react'

import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import NavbarListAberta from './NavbarListAberta';

export default props=>{
    const [estadoMenu, setEstadoMenu] = useState('fechado')

    function mudarEstadoMenu(){
        if (estadoMenu == 'fechado'){
            setEstadoMenu('aberto')
        }else{
            setEstadoMenu('fechado')
        }
    }

    function conteudoMenu(){
        if (estadoMenu == 'fechado'){
            return (
                <div onClick={mudarEstadoMenu}>
                    <TiThMenu />
                </div>
            )
        }else{
            return(<NavbarListAberta botaoFecharMenu={<div onClick={mudarEstadoMenu}><IoMdArrowDropup /></div>}/>)
        }
    }

    return conteudoMenu()
}
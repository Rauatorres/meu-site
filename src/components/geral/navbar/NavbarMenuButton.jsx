import React, { useState } from 'react'

import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import NavbarListAberta from './NavbarListAberta';

export default props=>{
    const [estadoMenu, setEstadoMenu] = useState('fechado')
    const [alturaDaNav, setAlturaDaNav] = useState('0')

    function mudarEstadoMenu(){
        if (estadoMenu == 'fechado'){
            setEstadoMenu('aberto')
            setTimeout(()=>{
                setAlturaDaNav('40vw')
            }, 1)
        }else{
            setAlturaDaNav('0')
            setTimeout(()=>{
                setEstadoMenu('fechado')
            }, 1000)
        }
    }

    function conteudoMenu(){
        if (estadoMenu == 'fechado'){
            return (
                <div className='NavbarBotaoMenuBox' onClick={()=>{mudarEstadoMenu();}}>
                    <TiThMenu className='NavbarBotaoMenu'/>
                </div>
            )
        }else{
            return(<NavbarListAberta altura={alturaDaNav} botaoFecharMenu={<div onClick={mudarEstadoMenu}><IoMdArrowDropup className='BotaoFecharMenu'/></div>}/>)
        }
    }

    return conteudoMenu()
}
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'

import '../css/Menu.css'

export default props=>{
  const [menuClicado, setMenuClicado] = useState(false)
  const [iconeBotao, setIconeBotao] = useState(faBars)
  
  function mostrarMenu(){
    let menuBoxElemento = document.querySelector('#menuBox')
    let menuForaElemento = document.querySelector('#menuFora')
    let menuElemento = document.querySelector('#menu')
    if(!menuClicado){
      let novoEstiloMenuBox = {
        position: 'absolute',
        width: '100vw',
        margin: '0px',
        display: 'flex'
      }
      let novoEstiloMenuFora = {
        /*width: '45vw',
        height: '100vh',*/
        display: 'block'
      }
      let novoEstiloMenu = {
        width: '55vw',
        height: '100vh',
        right: '-5vw',
        position: 'absolute',
        margin: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
      }
      Object.assign(menuElemento.style, novoEstiloMenu)
      Object.assign(menuForaElemento.style, novoEstiloMenuFora)
      Object.assign(menuBoxElemento.style, novoEstiloMenuBox)
      document.querySelector('.LinkList').style.display = 'block'
      document.querySelector('body').style.overflow = 'hidden'
      setIconeBotao(faCircleChevronRight)
      setMenuClicado(true)
      /*let novoEstiloMenuBox = {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        margin: '0px',
        display: 'flex'
      }
      let novoEstiloMenuFora = {
        position: 'absolute',
        width: '45vw',
        height: '100vh'
      }
      
      let novoEstiloMenu = {
        position: 'absolute',
        width: '70vw',
        height: '100vh',
        margin: '0px',
        marginLeft: '30vw',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
      }
      document.querySelector('.BotaoMenu').style.margin = '1rem'
      Object.assign(menuBoxElemento.style, novoEstiloMenuBox)
      Object.assign(menuForaElemento.style, novoEstiloMenuFora)
      Object.assign(menuElemento.style, novoEstiloMenu)
      menuElemento.classList.add('expandido');
      document.querySelector('.LinkList').style.display = 'block'
      document.querySelector('body').style.overflow = 'hidden'
      setIconeBotao(faCircleChevronRight)
      setMenuClicado(true)
      menuElemento.classList.add('expandido')*/
    }else{
      let novoEstiloMenu = {
        width: '0px'
      }
      let novoEstiloMenuPosTransicao = {
        right: '0px',
        position: 'relative',
        marginRight: '2.1rem',
        height: 'fit-content',
        backgroundColor: 'transparent'
      }
      let novoEstiloMenuFora = {
        display: 'none'
      }
      let novoEstiloMenuBox = {
        position: 'relative',
        width: 'fit-content',
        height: '50px'
      }
      Object.assign(menuElemento.style, novoEstiloMenu)
      Object.assign(menuForaElemento.style, novoEstiloMenuFora)
      Object.assign(menuBoxElemento.style, novoEstiloMenuBox)
      setTimeout(()=>{
        Object.assign(menuElemento.style, novoEstiloMenuPosTransicao)
        menuBoxElemento.style.margin = '1rem'
        document.querySelector('.LinkList').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
        setIconeBotao(faBars)
      }, 600)
      setMenuClicado(false)
      /*let novoEstiloMenuBox = {
        width: 'fit-content',
        height: 'fit-content',
        position: 'relative',
        marginRight: '10vw'
      }
      let novoEstiloMenuFora = {
        width: 'fit-content',
        height: 'fit-content',
        position: 'relative'
      }
      let novoEstiloMenu = {
        width: '0px',
        height: '0',
        position: 'relative',
        margin: '0px',
        backgroundColor: 'purle'
      }
      
      menuElemento.style.right = '0'
      menuElemento.classList.remove('expandido');
      document.querySelector('.LinkList').style.display = 'none'
      document.querySelector('body').style.overflow = 'auto'
      setTimeout(()=>{
        document.querySelector('.BotaoMenu').style.margin = '0px'
        Object.assign(menuElemento.style, novoEstiloMenu)
        Object.assign(menuBoxElemento.style, novoEstiloMenuBox)
        Object.assign(menuForaElemento.style, novoEstiloMenuFora)
        setIconeBotao(faBars)
      }, 600);
      setMenuClicado(false)*/
    }
  }
  
  return (
    <navbar id='menuBox'>
      <div id='menuFora' className='MenuFora' onClick={mostrarMenu}></div>
      <div id='menu' className='MenuNavbar'>
        <div className='BotaoMenu' onClick = {mostrarMenu}><FontAwesomeIcon icon={iconeBotao} /></div>
        <ul className='LinkList Fonte2'>
          <li className='MenuLink'>Home</li>
          <li className='MenuLink'>Sobre Mim</li>
          <li className='MenuLink'>Meus Projetos</li>
          <li className='MenuLink'>Contato</li>
        </ul>
      </div>
    </navbar>
  )
}
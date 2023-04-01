import React from 'react'

import '../../css/content/Projeto.css'

export default props=>{
  return (
    <div className='Projeto Fonte2'>
      <h3 className='ProjetoTitulo'>{props.titulo}</h3>
      <img className='ProjetoImg' src={props.img}/>
      <p className='ProjetoDesc'>{props.desc}</p>
    </div>
  )
}
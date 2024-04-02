import React from 'react'

export default props=>
<div className='Projeto'>
    <div className='ProjetoImagem'>{props.img}</div>
    <div className='ProjetoTitulo'>{props.titulo}</div>
    <div className='ProjetoDescricao'>{props.descricao}</div>
    <div className='ProjetoTecnologias'>{props.children}</div>
</div>
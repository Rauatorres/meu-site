import React from 'react'

export default props=>
<div className='AreaBotoes'>
    <a className='ProjetoBotao BotaoVerProjeto' target='__blank' href={props.linkVerProjeto}>visão geral do projeto</a>
    <a className='ProjetoBotao BotaoAcessarProjeto' target='__blank' href={props.linkAcessarProjeto}>acessar projeto</a>
</div>
import React from 'react'

export default props=>
<div className='AreaBotoes'>
    <a className='ProjetoBotao BotaoVerProjeto raleway-Fonte3' target='__blank' href={props.linkVerProjeto}>visão geral do projeto</a>
    <a className='ProjetoBotao BotaoAcessarProjeto raleway-Fonte3' target='__blank' href={props.linkAcessarProjeto}>acessar projeto</a>
</div>
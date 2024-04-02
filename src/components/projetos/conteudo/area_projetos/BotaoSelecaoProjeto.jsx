import React from 'react'

export default props=>
<div className='BotaoSelecaoProjeto' onClick={()=>{
        props.selecionarProjeto(props.projetoIndex)
    }}>
        {props.img}
</div>
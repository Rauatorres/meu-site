import React from 'react'

export default props=>
<div className='BotaoSelecaoProjeto' 
    style={{width: props.width, height: props.height}}
    onClick={()=>{
        props.selecionarProjeto(props.projetoIndex)
    }}
>
        {props.img}
</div>
import React from 'react'

export default props=>
<div>
    <div onClick={()=>{
        props.selecionarProjeto(props.projetoIndex)
    }}>
        {props.img}
    </div>
</div>
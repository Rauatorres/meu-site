import React from 'react'

export default props=>
<div className='TecnologiasTipoArea'>
    <h3 className='TecnologiasTipoTitulo' >{props.tipo}</h3>
    <div>
        {props.children}
    </div>
</div>
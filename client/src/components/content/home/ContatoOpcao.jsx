import React from 'react'
import ContatoFormulario from './ContatoFormulario'
import { MdFileCopy } from 'react-icons/md'

export default props=>
<div className='ContatoOpcao'>
    <div>
        <span className='ContatoOpcaoIcone'>{props.icone}</span>
        <span className='ContatoOpcaoTexto'>{props.texto}</span>
    </div>
    <div><span className='ContatoOpcaoCopiar'>{MdFileCopy()}</span></div>    
</div>
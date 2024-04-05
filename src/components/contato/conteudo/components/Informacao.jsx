import React from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default props=>
<div className='ContatoInformacao'>
    <div className='ContatoInformacaoIconTextoBox'>
        <span className='ContatoInformacaoIcone'>{props.icone}</span>
        <span className='ContatoInformacaoTexto'>{props.texto}</span>
    </div>
    <div className='ContatoInformacaoBotaoCopiarBox' onClick={()=>{navigator.clipboard.writeText(props.texto)}}>
        <ContentCopyIcon/>
    </div>
</div>
import React, { useState } from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default props=>{
    const [msgCopiadoDisplay, setMsgCopiadoDisplay] = useState('none')

    return (
        <div className='ContatoInformacao'>
            <div className='ContatoInformacaoIconTextoBox'>
                <span className='ContatoInformacaoIcone'>{props.icone}</span>
                <span className='ContatoInformacaoTexto'>{props.texto}</span>
            </div>
            <div className='ContatoInformacaoBotaoCopiarBox' 
                onClick={()=>{navigator.clipboard.writeText(props.texto); setMsgCopiadoDisplay('block')}}
                onMouseLeave={()=>{setMsgCopiadoDisplay('none')}}
            >
                <ContentCopyIcon className='ContatoInformacaoBotaoCopiar'/>
                <div className='MsgCopiado' style={{display: msgCopiadoDisplay}}>Copiado!</div>
            </div>
        </div>
    )
}
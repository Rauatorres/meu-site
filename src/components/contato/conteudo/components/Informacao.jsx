import React from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default props=>
<div className='ContatoInformacao'>
    <div><span>{props.icone}</span> <span>{props.texto}</span></div>
    <div onClick={()=>{navigator.clipboard.writeText(props.texto)}}><ContentCopyIcon/></div>
</div>
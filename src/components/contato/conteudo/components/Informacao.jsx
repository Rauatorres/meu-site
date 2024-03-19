import React from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default props=>
<div>
    <div>{props.icone}</div>
    <div>{props.texto}</div>
    <div><ContentCopyIcon/></div>
</div>
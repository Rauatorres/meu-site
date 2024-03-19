import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default props=>
<div>
    <div>{props.titulo}</div>
    <div>{props.icone}</div>
    <div>{props.children}</div>
    <div><ArrowDropDownIcon/></div>
</div>
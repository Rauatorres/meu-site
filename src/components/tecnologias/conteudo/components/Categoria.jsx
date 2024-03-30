import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default props=>
<div className='TecnologiasCategoria'>
    <div className='TecnologiasCategoriaTitulo'>{props.titulo}</div>
    <div className='TecnologiasCategoriaIconeBox'>{props.icone}</div>
    <div className='TecnologiasArea'>{props.children}</div>
    <div className='TecnologiasBotaoMostrarMais'><ArrowDropDownIcon className='TecnologiasBotaoMostrarMaisIcone'/></div>
</div>
import React from 'react'

import Informacao from './components/Informacao'

export default props=>
<div>
    <div>Texto</div>
    <div>Ícone</div>
    <div>
        <Informacao
            icone="email"
            texto="email"
        />
        <Informacao
            icone="telefone"
            texto="telefone"
        />
        <Informacao
            icone="linkedin"
            texto="linkedin"
        />
        <Informacao
            icone="github"
            texto="github"
        />
    </div>
</div>
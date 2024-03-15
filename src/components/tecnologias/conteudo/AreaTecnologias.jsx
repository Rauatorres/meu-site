import React from 'react'

import Categoria from './components/Categoria'
import Tecnologia from './components/Tecnologia'

export default props=>
<div>
    <Categoria titulo="Front-End">
        <Tecnologia nome='T1'/>
        <Tecnologia nome='T2'/>
        <Tecnologia nome='T3'/>
    </Categoria>
    <Categoria titulo="Back-End">
        <Tecnologia nome='T1'/>
        <Tecnologia nome='T2'/>
        <Tecnologia nome='T3'/>
    </Categoria>
    <Categoria titulo="Outro">
        <Tecnologia nome='T1'/>
        <Tecnologia nome='T2'/>
        <Tecnologia nome='T3'/>
    </Categoria>
</div>
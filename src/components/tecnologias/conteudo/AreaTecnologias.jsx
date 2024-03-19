import React from 'react'

import Categoria from './components/Categoria'
import Tecnologia from './components/Tecnologia'

import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default props=>
<div>
    <Categoria titulo="Front-End" icone={<DevicesIcon/>}>
        <Tecnologia nome='HTML'/>
        <Tecnologia nome='CSS'/>
        <Tecnologia nome='Javascript'/>
        <Tecnologia nome='React.JS'/>
        <Tecnologia nome='Bootstrap'/>
        <Tecnologia nome='Figma'/>
    </Categoria>
    <Categoria titulo="Back-End" icone={<StorageIcon/>}>
        <Tecnologia nome='Node.JS'/>
        <Tecnologia nome='Express'/>
        <Tecnologia nome='MongoDB'/>
        <Tecnologia nome='MySQL'/>
        <Tecnologia nome='PostgreSQL'/>
    </Categoria>
    <Categoria titulo="Outro" icone={<MiscellaneousServicesIcon/>}>
        <Tecnologia nome='Git'/>
        <Tecnologia nome='GitHub'/>
    </Categoria>
</div>
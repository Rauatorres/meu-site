import React from 'react'

import Informacao from './components/Informacao'

import MessageIcon from '@mui/icons-material/Message';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

export default props=>
<div>
    <div>Texto</div>
    <div><MessageIcon/></div>
    <div>
        <Informacao
            icone={<AlternateEmailIcon/>}
            texto="rauatorres@gmail.com"
        />
        <Informacao
            icone={<CallIcon/>}
            texto="74 99944 1480"
        />
        <Informacao
            icone="linkedin"
            texto="www.linkedin.com/in/rauatorres"
        />
        <Informacao
            icone="github"
            texto="www.github.com/Rauatorres"
        />
    </div>
</div>
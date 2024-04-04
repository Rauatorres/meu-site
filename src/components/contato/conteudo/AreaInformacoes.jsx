import React from 'react'

import Informacao from './components/Informacao'

import MessageIcon from '@mui/icons-material/Message';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default props=>
<div className='ContatoAreaInformacoes'>
    <h3 className='ContatoInformacoesTexto'>Ou se preferir, entre em contato...</h3>
    <div className='ContatoInformacoesIconeBox'><MessageIcon className='ContatoInformacoesIcone'/></div>
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
            icone={<FontAwesomeIcon icon={faLinkedinIn} />}
            texto="www.linkedin.com/in/rauatorres"
        />
        <Informacao
            icone={<FontAwesomeIcon icon={faGithub} />}
            texto="www.github.com/Rauatorres"
        />
    </div>
</div>
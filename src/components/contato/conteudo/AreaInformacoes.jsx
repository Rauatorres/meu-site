import React from 'react'

import Informacao from './components/Informacao'

import MessageIcon from '@mui/icons-material/Message';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { BiSolidMessage } from "react-icons/bi";    
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default props=>
<div className='ContatoAreaInformacoes'>
    <h3 className='ContatoInformacoesTexto'>Ou se preferir, entre em contato...</h3>
    <div className='ContatoInformacoesIconeBox'><BiSolidMessage className='ContatoInformacoesIcone'/></div>
    <div>
        <Informacao
            icone={<MdEmail />}
            texto="rauatorres@gmail.com"
        />
        <Informacao
            icone={<FaPhone />}
            texto="74 99944 1480"
        />
        <Informacao
            icone={<FaLinkedinIn />}
            texto="www.linkedin.com/in/rauatorres"
        />
        <Informacao
            icone={<FaGithub />}
            texto="www.github.com/Rauatorres"
        />
    </div>
</div>
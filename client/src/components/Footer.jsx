import React from 'react'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './css/Footer.css'

export default props=>
<footer>
  <div className='FooterRedes'>
    <h3>Minhas Redes</h3>
    <div>
      <span><Link to='https://github.com/Rauatorres' target='_blank'><FontAwesomeIcon icon={faGithub} /></Link></span>
      <span><Link to='https://www.linkedin.com/in/rauatorres/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link></span>
    </div>
  </div>
  <div className='FooterContato'>
    <h3>Contato</h3>
    <Link to='/contato'><FontAwesomeIcon icon={faEnvelope}/> Envie Sua Mensagem</Link>
  </div>
  <div className='FooterCreditos'>
    <div className='TextoCreditos'>Site Criado por Rauã Torres</div>
  </div>
</footer>
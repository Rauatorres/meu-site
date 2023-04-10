import React from 'react'
import {Link} from 'react-router-dom'

import './css/Footer.css'

export default props=>
<footer>
  <h3 className='Fonte2'>Site feito por Rauã Torres</h3>
  <Link to='/contato' className='Link LinkContatoColor'>Contate-me</Link>
</footer>
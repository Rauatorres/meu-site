import React from 'react-dom'

import Descricao from './Descricao'
import '../css/Apresentacao.css'

export default props=>
<section className='ApresentacaoSection'>
  <article className='TituloArticle'>
    <h1 className='ApresentacaoTitulo'>Sobre mim</h1>
  </article>
  <article className='DescArticle'>
    <Descricao/>
  </article>
</section>
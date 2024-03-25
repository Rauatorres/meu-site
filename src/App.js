import React from 'react'

import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import Tecnologias from './components/tecnologias/Tecnologias'
import Projetos from './components/projetos/Projetos'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'

import './App.css'

export default props=>
<>
  <Header/>
  <main>
    <Sobre/>
    <Tecnologias/>
    <Projetos/>
    <Contato/>
  </main>
  <Footer/>
</>
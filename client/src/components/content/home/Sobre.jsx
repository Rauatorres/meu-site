import React from 'react'
import { Button } from 'react-bootstrap'

import './css/Sobre.css'
 
export default props=>
<section className='HomeSobreSecao'>
    <h1 className='HomeSobreTitulo Fonte2'>Olá, Meu Nome é Rauã Torres</h1>
    <div className='MinhaFoto'></div>
    <p className='HomeSobreDescricao'>
        Eu sou desenvolvedor web <strong className='HomeSobrePalavraFullstack'>fullstack</strong>
    </p>
    {/* <p className='HomeSobreDescricao'>
        Crio sites e sistemas web completos, belos e funcionais utilizando <strong className='HomeSobrePalavraJavascript'>JavaScript</strong> tanto no lado do cliente, quanto no servidor.
    </p> */}
    <Button className='HomeSobreButtonProjetos' href='/projetos' target='_blank'>Conheça meus projetos</Button>
</section>
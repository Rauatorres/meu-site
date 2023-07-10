import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import Projeto from './Projeto'
import axios from 'axios'

import './css/Projetos.css'


export default props=>{

    const [projetosLista, setProjetosLista] = useState([])

    
    
    useEffect(()=>{
        async function getProjetosLista(){
            let res = await axios.get('http://localhost:3001/api/projetos')
            setProjetosLista(res.data)
        }
        getProjetosLista()
    }, [])




    return (
        <section className='ProjetosSection'>
            <h1 className='HomeProjetosTitulo Fonte2'>Meus Projetos</h1>
            <div className='HomeProjetosArea'>
                {
                    projetosLista.map(projeto=>{
                        return (
                            <Projeto key={projeto._id} titulo={projeto.titulo} img={projeto.img} link={projeto.link}>
                                {projeto.descricao}
                            </Projeto>
                        )
                    })
                }
            </div>
            <Button variant='outline-light' className='HomeProjetosBotao'>ver todos os projetos   </Button>
        </section>
    )
}
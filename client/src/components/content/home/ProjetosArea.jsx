import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import Projeto from './Projeto'

import '../../css/content/Descricao.css'
import '../../css/content/Home.css'
import '../../css/content/Projetos.css'

export default props=>{
  
  const [projetos, setProjetos] = useState([])
  
  const getProjetos = async ()=>{
    try{
      const response = await axios.get('http://localhost:3001/api/projetos')
      setProjetos(response.data)
    }catch (error){
      alert(error)
    }
  }
  
  useEffect(()=>{
    getProjetos()
  }, [])
  
  function gerarProjetos(){
    return projetos.map(projeto=>{
      return (
        <Projeto key={projeto.id} titulo={projeto.titulo} img={'http://localhost:3001/projetos_img/' + projeto.img} desc={projeto.descricao} />
        )
    })
  }
  
  return (
    <section className='AreaProjetos'>
      <h3 className='HomeTitulo TituloSecaoProjetos Fonte1'>Meus Projetos</h3>
      {gerarProjetos()}
      <button className="BotaoProjetos"><Link to='/projetos' className='Link BotaoProjetosColor'>Ver Mais Projetos <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "0.5rem"}}/></Link></button>
      
    </section>
  )
}
import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

export default props=>{
  const [projetos, setProjetos] = useState([])
  const [projetoAtivo, setProjetoAtivo] = useState(0)
  
  const getProjetos = async ()=>{
    try{
      let response = await axios.get('http://localhost:3001/api/projetos')
      await setProjetos(response.data)
    }catch (error){
      alert(error)
    }
  }
  
  
  
  useEffect(async ()=>{
    await getProjetos()
  }, [])
  
  
  function mostrarProjetos(){
      return projetos.map((projeto, index)=>{
        function mostrarProjeto(){
          setProjetoAtivo(index)
        }
        return(
          <h2 className='ProjetoTitulo' onClick={mostrarProjeto}>{projeto.titulo}</h2>
          )
      })
  }
  
  function mostrarProjetoAtivo(){
    let projetoAtivoObj = projetos[projetoAtivo]
    let projetoAtivoImg = ''
    if(projetos.length > 0){
      let projetoAtivoImg = `http://localhost:3001/projetos_img/${projetoAtivoObj.img}`
      return (
        <div key={projetoAtivoObj._id}>
          <h2>{projetoAtivoObj.titulo}</h2>
          <img src={projetoAtivoImg} className='ProjetoImg'/>
          <p>{projetoAtivoObj.descricao}</p>
          <Button href={projetoAtivoObj.link} variant='outline-light' target='_blank'>Link</Button>
        </div>
        )
    }else{
      <div>
      Carregando...
      </div>
    }
  }
  
  return (
    <div >
      {mostrarProjetos()}
      {mostrarProjetoAtivo()}
    </div>
    )
}
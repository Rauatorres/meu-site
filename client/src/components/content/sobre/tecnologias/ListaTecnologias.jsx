import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import axios from 'axios'

import Slide from './Slide'

export default props=>{
  const [tecnologias, setTecnologias] = useState([])
  const getTecnologias = async ()=>{
    try{
      const response = await axios.get('http://localhost:3001/api/tecnologias')
      await setTecnologias(response.data)
    }catch (error){
      alert(error)
    }
  }
  
  useEffect(()=>{
    getTecnologias()
  }, [])
  
  return (
    <Slide lista={tecnologias}/>
  )
}
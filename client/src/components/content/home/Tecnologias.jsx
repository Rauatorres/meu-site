import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Tecnologia from './Tecnologia'
import TecnologiaAreaTipo from './TecnologiaAreaTipo'

import './css/Tecnologias.css'

export default props=>{
    const [listaTecnologias, setListaTecnologias] = useState([])

    
    useEffect(()=>{
        async function getListaTecnologias(){
            let getLista = await axios.get('http://localhost:3001/api/tecnologias')
            setListaTecnologias(getLista.data)
        }
        getListaTecnologias()
    }, [])

    function exibirTecnologias(tipo){
        return listaTecnologias.map(tecnologia=>{
            if(tipo == tecnologia.tipo){
                return (
                    <Tecnologia key={tecnologia._id} img={tecnologia.img} nome={tecnologia.nome} link_original={tecnologia.credito}/>
                )
            }
        })
    }

    return (
        <section className='HomeTecnologiasSection'>
            <div>
                <h2 className='HomeTecnologiasSecaoTitulo Fonte2'>Tecnologias</h2>
            </div>
            <div className='TecnologiasArea'>
                {exibirTecnologias('front-end')}
                {exibirTecnologias('back-end')}
                {exibirTecnologias('outro')}
            </div>
        </section>
    )
}
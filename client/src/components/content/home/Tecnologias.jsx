import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Tecnologia from './Tecnologia'

export default props=>{
    const [listaTecnologias, setListaTecnologias] = useState([])

    async function getListaTecnologias(){
        let getLista = await axios.get('http://localhost:3001/api/tecnologias')
        setListaTecnologias(getLista.data)
    }

    useEffect(()=>{
        getListaTecnologias()
    }, [])

    function exibirTecnologias(tipo){
        return listaTecnologias.map(tecnologia=>{
            if(tipo == tecnologia.tipo){
                return (
                    <Tecnologia key={tecnologia._id} img={tecnologia.img} nome={tecnologia.nome}/>
                )
            }
        })
    }

    return (
        <section>
            <div>
                <h2>Tecnologias</h2>
                <h3>Conheça as tecnologias que eu utilizo</h3>
            </div>
            <div>
                <div>
                    <h3>Front-End</h3>
                    <div>
                        {exibirTecnologias('front-end')}
                    </div>
                </div>
                <div>
                    <h3>Back-End</h3>
                    <div>
                        {exibirTecnologias('back-end')}
                    </div>
                </div>
                <div>
                    <h3>Outras</h3>
                    <div>
                        {exibirTecnologias('outro')}
                    </div>
                </div>
            </div>
        </section>
    )
}
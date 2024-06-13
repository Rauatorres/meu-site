import React, {useState, useEffect} from 'react'

import { IoMdHammer } from "react-icons/io";

export default props=>{
    const [iconeRotacao, setIconeRotacao] = useState('0deg')

    useEffect(()=>{
        setInterval(()=>{
            setIconeRotacao('-90deg')
            setTimeout(()=>{
                setIconeRotacao('0deg')
            }, 1000)
            console.log(iconeRotacao)
        }, 2000)
    }, [])

    function verificarProjetoFinalizado(returnFinalizado, returnNaoFinalizado){
        if(props.projetoFinalizado){
            return returnFinalizado
        }else{
            return returnNaoFinalizado
        }
    }

    return (
        <div className='BotaoSelecaoProjeto' 
            style={{width: props.width, height: props.height}}
            onClick={()=>{
                props.selecionarProjeto(props.projetoIndex)
            }}
        >
            {verificarProjetoFinalizado(
                (<img src={props.img} alt="" />),
                (<IoMdHammer className='ProjetoAndamentoIcone' style={{rotate: iconeRotacao}} />)
            )}
            
                
        </div>
    )
}
import React, { useState } from 'react'

import mandarEmail from './script/mandarEmail'

export default props=>{
    const [mensagem, setMensagem] = useState({
        nome: "",
        email: "",
        tel: "",
        msg: ""
    })

    function handleStateChange(e){
        setMensagem({
            ...mensagem,
            [e.target.name]: e.target.value
        })
    }

    async function submit(e){
        e.preventDefault()
        await mandarEmail(mensagem)   
    }

    return (
        <form className='ContatoFormulario' onSubmit={submit}>
                <input className='ContatoFormularioInputNome' id='nome' type="text" name='nome' onChange={handleStateChange} placeholder='Nome'/>
            <div className='ContatoFormularioEmailTelBox'>
                    <input className='ContatoFormularioInputTel' id="tel" type="tel" name="tel" onChange={handleStateChange} placeholder='Telefone'/>
                    <input className='ContatoFormularioInputEmail' type="email" name="email" id="email" onChange={handleStateChange} placeholder='Email'/>
            </div>
                <textarea className='ContatoFormularioInputMsg' name="msg" id="msg" cols="30" rows="10"onChange={handleStateChange} placeholder='Digite...'></textarea>
            <input className='BotaoEnviarContato' type="submit" value="Enviar" />
        </form>
    )
}
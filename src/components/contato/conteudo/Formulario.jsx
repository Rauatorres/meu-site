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
        <form onSubmit={submit}>
            <label htmlFor="">
                <input type="text" name='nome' onChange={handleStateChange}/>
            </label>
            <div>
                <label htmlFor="">
                    <input type="tel" name="tel" id="" onChange={handleStateChange}/>
                </label>
                <label htmlFor="">
                    <input type="email" name="email" id="" onChange={handleStateChange}/>
                </label>
            </div>
            <label htmlFor="">
                <textarea name="msg" id="" cols="30" rows="10"onChange={handleStateChange}></textarea>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    )
}
import axios from "axios"

async function mandarEmail(mensagem){
    const { nome, email, tel, msg } = mensagem
    console.log(nome)

    await axios.post('https://meu-site-email-server.onrender.com/sendemail', 
    {
        nome: nome,
        email: email,
        tel: tel,
        msg: msg
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(function (response) {
        console.log('Email enviado!');
    })
    .catch(function (error) {
        console.error(error);
    })
}

export default mandarEmail
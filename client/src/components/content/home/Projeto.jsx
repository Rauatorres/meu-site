import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default props=>{
    const imgPath = `http://localhost:3001/projetos_img/${props.img}`
    return (
        <div className='HomeProjeto'>
            <div className='HomeProjetoImgArea'>
                <div className='HomeProjetoImgMouse'>
                    <div className='HomeProjetoAreaTitulo'>
                        <h4 className='HomeProjetoTitulo'>{props.titulo}</h4>
                        <Button className='HomeProjetoBotaoVer' variant='outline-light'>ver<FontAwesomeIcon icon={faAngleRight} /></Button>
                    </div>
                    <div className='HomeProjetoDescArea'>
                        <p className='HomeProjetoDesc'>
                            {props.children}
                        </p>
                    </div>
                </div>
                <img className='HomeProjetoImg' src={imgPath}/>
            </div>
        </div>
    )
}
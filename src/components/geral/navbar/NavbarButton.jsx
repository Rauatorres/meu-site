import React from 'react'

export default props=>{
    return (
        <span className='NavbarItem' onClick={()=>{
                document.querySelector(`#${props.elemento}`).
                scrollIntoView({behavior: 'smooth'})
            }
        }>
            {props.nome}
        </span>
    )
}
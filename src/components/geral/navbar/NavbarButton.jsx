import React from 'react'

export default props=>{
    return (
        <span className='NavbarItem raleway-Fonte3' onClick={()=>{
                document.querySelector(`#${props.elemento}`).
                scrollIntoView({behavior: 'smooth'})
            }
        }>
            {props.nome}
        </span>
    )
}
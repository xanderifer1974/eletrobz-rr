import React from 'react'

function LogoTipo(props) {
    return (
        <>
            <a href="/">
                <img id="logo" src={props.logotipo} alt='Logo do Site' width={props.largura} height={props.altura} />
            </a>
        </>
    )
}

export default LogoTipo;
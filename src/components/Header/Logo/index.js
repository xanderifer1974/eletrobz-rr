import React from 'react'

function LogoTipo(props) {
    return (
        <>
            <a href="/">
                <img id="logo" src={props.logotipo} alt='Logo do Site' />
            </a>
        </>
    )
}

export default LogoTipo;
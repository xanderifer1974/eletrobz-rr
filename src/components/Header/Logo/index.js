import React from 'react'
import Logo from '../../../Assets/img/Logo.png';

function LogoTipo() {
    return (
        <>
            <a href="/">
                <img id="logo" src={Logo} alt='Logo do Site' />
            </a>
        </>
    )
}

export default LogoTipo;
import React from 'react'

function LogoFooter(props) {
    return (
        <>
            <a href="/">
                <img id="logo-footer" src={props.logotipo} alt='Logo do Site' width={props.largura} height={props.altura} />
            </a>
        </>
    )
}

export default LogoFooter;
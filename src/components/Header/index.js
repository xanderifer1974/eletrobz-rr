import React from 'react';
import Menu from './Menu'
import './header.css';
import TopHeader from './Top-header';
import LogoTipo from './Logo';
import Logo from '../../Assets/img/Logo.png'

function Header() {
    return (
        <header>
            <div id="main-header">
                <>
                   <TopHeader whatsapp="+55 (21) 97632-4456" email="eletrobazar01@gmail.com"/>
                   <LogoTipo logotipo={Logo}/>
                   <Menu />
                </>
            </div>
        </header>
    )
}

export default Header;
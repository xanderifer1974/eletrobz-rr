import React from 'react';
import Menu from './Menu'
import './header.css';
import TopHeader from './Top-header';
import LogoTipo from './Logo';


function Header() {
    return (
        <header>
            <div id="main-header">
                <>
                   <TopHeader/>
                   <LogoTipo/>
                   <Menu />
                </>
            </div>
        </header>
    )
}

export default Header;
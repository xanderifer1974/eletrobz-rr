import React from 'react';
import './menu.css';



function Menu(props) {
    return (
        <div id="menu">           
            <nav>
                <ul> 
                    <li><a href="/">{props.itens[0]}</a></li>
                    <li><a href="/">{props.itens[1]}</a></li>
                    <li><a href="/">{props.itens[2]}</a></li>
                    <li><a href="/">{props.itens[3]}</a></li>
                    <li><a href="/">{props.itens[4]}</a></li>
                    <li><a href="/">{props.itens[5]}</a></li>                   
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
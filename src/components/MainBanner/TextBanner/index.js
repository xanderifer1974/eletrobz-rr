import React from 'react'
import './textBanner.css'

function TextBanner(props) {
    return (
        <div id="text-banner">
            <ul>
                <li>{props.itens[0]}</li>
                <li>{props.itens[1]}</li>
                <li>{props.itens[2]}</li>
            </ul>
        </div>
    )
}

export default TextBanner;
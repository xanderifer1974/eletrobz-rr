import React from 'react';
import './MainBanner.css'
import ImageBanner from './ImageBanner';
import TextBanner from './TextBanner';

var textBanner = [
    'Roupas e Sapatos',
    'Conserto e Peças para Eletrodomésticos',
    'Muitas Variedades',
    
]

function MainBanner() {

    return (
        <div id="main-banner">
            <ImageBanner largura="384.7" altura="384.7" />
            <TextBanner itens={textBanner}/>
        </div>
    )
}

export default MainBanner;
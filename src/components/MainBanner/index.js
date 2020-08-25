import React from 'react';
import './MainBanner.css'
import ImageBanner from './ImageBanner';
import TextBanner from './TextBanner';

function MainBanner() {

    return (
        <div id="main-banner">
            <ImageBanner largura="384.7" altura="384.7" />
            <TextBanner />
        </div>
    )
}

export default MainBanner;
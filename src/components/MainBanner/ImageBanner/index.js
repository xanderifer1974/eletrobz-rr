import React from 'react'
import imgBanner from '../../../Assets/img/ImageBanner.png'
import './imageBanner.css'

function ImageBanner(props){
    return(
        <div id="image-banner">
         <img  src={imgBanner} alt="imagem do banner" width={props.largura} height={props.altura}/>        
        </div>
    )
}

export default ImageBanner;
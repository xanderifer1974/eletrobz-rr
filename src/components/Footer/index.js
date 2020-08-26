import React from 'react'
import './footer.css'
import Logo from '../../Assets/img/Logo.png'
import LogoFooter from './LogoFooter'
import TextoFooterMain from './TextoFooterMain'
import EnderecoFooter from './EnderecoFooter'


function Footer(){
    return(
        <footer id="footer">
         <LogoFooter logotipo={Logo} largura="80px" altura="80px"/>
         <TextoFooterMain>
           Eletrobazar RR - Concertos de Eletrodomésticos  etc.
         </TextoFooterMain>
         <EnderecoFooter>
            Rua Canindé  Lote 30 Quadra 50 - Rancho Fundo - Nova Iguaçu - RJ
         </EnderecoFooter>
        </footer>
    )
}

export default Footer;
import React from 'react'
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-logos/whatsapp';
import emailSolid from '@iconify/icons-clarity/email-solid';

function IconesTopo(){
    return (
        <div className="icon-container">
            <Icon className="icon" icon={whatsappIcon} style={{fontSize: '25px'}} />
            <span className="icon-text">+55 (21) 97632-4456</span>
            <Icon icon={emailSolid} style={{color: '#eecd68', fontSize: '25px'}} />
            <span className="icon-text">eletrobazar01@gmail.com</span>
        </div>
    )
}

export default IconesTopo;
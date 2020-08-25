import React from 'react'
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-logos/whatsapp';
import emailSolid from '@iconify/icons-clarity/email-solid';

function IconesTopo(props){
    return (
        <div className="icon-container">
            <Icon className="icon" icon={whatsappIcon} style={{fontSize: '25px'}} />
            <span className="icon-text">{props.whatsapp}</span>
            <Icon icon={emailSolid} style={{color: '#eecd68', fontSize: '25px'}} />
            <span className="icon-text">{props.email}</span>
        </div>
    )
}

export default IconesTopo;
import React from 'react';
import IconesTopo from '../IconesTopo';


function TopHeader(props){
    return (
        <div id='top-header'>
         <IconesTopo whatsapp={props.whatsapp} email={props.email}/>
        </div>
    )
}

export default TopHeader;
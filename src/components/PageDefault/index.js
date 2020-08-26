import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../PageDefault/pageDefault.css'

function PageDefault(props){
    return (
        <>
        <Header/>
        <div id="page-default">
         {props.children}
        </div>
        <Footer/>
        </>
    )
}


export default PageDefault;
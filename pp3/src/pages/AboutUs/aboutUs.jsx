import * as React from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import '../../style/header.css'
import '../../style/footer.css'
import '../../style/AboutUs/aboutUs.css'

import Header from '../../components/header.js';
import Footer from '../../components/footer.js'

export default () => (
     <>
        <HelmetProvider>
        <div className="App">
            <Helmet>
                <title>Sobre Nós</title>
            </Helmet>
            
            <Header/>

            <div className="section-main">
                <img className="fundo-01" src="/img/AboutUsImg/fundo-01.png"></img>

                <div id="section">

                </div>
            </div>

                
            <Footer/>
        </div>
    </HelmetProvider>
    </>

);
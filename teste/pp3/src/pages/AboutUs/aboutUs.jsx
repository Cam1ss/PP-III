import * as React from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import '../../style/header.css'
import '../../style/footer.css'

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

                
            <Footer/>
        </div>
    </HelmetProvider>
    </>

);
import * as React from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import '../../style/header.css'
import '../../style/footer.css'
import '../../style/AboutUs/aboutUs.css'

import Titulo from '../../components/aboutUs/titulo.jsx'
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

            <main>
                <img className="fundo-01" src="/img/AboutUsImg/fundo-01.png"></img>

                <section>
                     <img className="banner-sunrise" src="/img/AboutUsImg/SUNRISE.png"></img>

                     <Titulo icone="/img/AboutUsImg/icon-interrogacao.png" alt="icon-interrogaçao" nome="quem somos nós">
                            <div className="desc-grup">
                                <p>"Somos uma equipe apaixonada por tecnologia, especializada em desenvolvimento, segurança da informação e infraestrutura.
                                     Unimos criatividade e técnica para oferecer soluções personalizadas com ética, excelência e foco em transformar desafios em resultados reais"</p>
                            </div>
                     </Titulo>

                     <Titulo icone="/img/AboutUsImg/trajetoria.png" alt="icon-trajetoria" nome="nossa trajetória">

                     </Titulo>

                     <Titulo icone="/img/AboutUsImg/equipe.png" alt="icon-equipe" nome="membros">

                     </Titulo>
                     
                </section>
               
            </main>

                
            <Footer/>
        </div>
    </HelmetProvider>
    </>

);
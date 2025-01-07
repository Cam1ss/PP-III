import * as React from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import '../../style/header.css'
import '../../style/footer.css'
import '../../style/AboutUs/aboutUs.css'

import Header from '../../components/header.js'
import InfoMembros from "../../components/aboutUs/infoMembros.jsx"
import Jornada  from "../../components/aboutUs/jornada.jsx"
import Titulo from '../../components/aboutUs/titulo.jsx'
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
                <div className="fundo-01"></div>

                <section>
                     <img className="banner-sunrise" src="/img/AboutUsImg/SUNRISE.png"></img>

                     <Titulo icone="/img/AboutUsImg/icon-interrogacao.png" alt="icon-interrogaçao" nome="quem somos nós">
                            <div className="desc-grup">
                                <p>Somos uma equipe apaixonada por tecnologia, especializada em desenvolvimento, segurança da informação e infraestrutura.
                                     Unimos criatividade e técnica para oferecer soluções personalizadas com ética, excelência e foco em transformar desafios em resultados reais</p>

                                 <img className="icon-net" src="/img/AboutUsImg/icon-internet.png"></img>    
                            </div>
                     </Titulo>

                     <div style={{marginTop: "9rem"}}>
                      <Titulo icone="/img/AboutUsImg/trajetoria.png" alt="icon-trajetoria" nome="nossa trajetória">
                                <Jornada/>
                     </Titulo>  
                    </div>   
                     

                    <div style={{marginTop: "20rem"}}>
                      <Titulo icone="/img/AboutUsImg/equipe.png" alt="icon-equipe" nome="membros">
                            <InfoMembros />
                     </Titulo>  
                    </div>
                     
                     
                </section>

                <div className="fundo-02"></div>
                     <div className="fundo-03"></div>

               
            </main>

                
            <Footer/>
        </div>
    </HelmetProvider>
    </>

);
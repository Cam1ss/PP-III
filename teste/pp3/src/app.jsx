import * as React from "react";
import './style/header.css'
import './style/index.css'

import Depoimentos from './components/index/depoimentos.jsx';
import AutoScroll from './components/index/AutoScrollCarrossel.jsx';
import Header from './components/header.js';
import Carrossel from './components/index/carrossel.jsx';
import Titulo from './components/index/titulo.jsx';
import Guia from './components/index/guia.jsx';

export default () => (
    <div className="App">
    <Header/>

    <section>
        <div className="banner">
            <div className="conteudo">
            <h1>festivais</h1>
            <h1>brasileiros</h1>
            <p>Explore os maiores festivais do Brasil! 
                De Carnaval a Parintins, descubra música, 
                cultura e tradições em eventos inesquecíveis
            </p>
            </div>
        </div>   {/* banner */}

        <div className="divisao">
                <div className="barra"></div>
                <a href="https://github.com/Cam1ss/PP-III"><i className="bi bi-github"></i></a>
                <a><i className="bi bi-share"></i></a>
            </div>   {/*  divisao */}
        
        <Carrossel/>
      
        <Titulo nome="guia">
            <Guia></Guia>
        </Titulo>

        <AutoScroll></AutoScroll>

        <Titulo nome="depoimentos">
            <Depoimentos></Depoimentos>
        </Titulo>
       
    </section>
    </div>

);

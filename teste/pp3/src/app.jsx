import * as React from "react";
import './style/header.css'
import './style/index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Header from './components/header.js';
import Carrossel from './components/index/carrossel.jsx';


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
      

       
    </section>
    </div>

);

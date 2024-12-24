import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Header from './components/header.js';



ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
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
                
        </div>

        <div className="divisao">
                <div className="barra"></div>
                <a href="https://github.com/Cam1ss/PP-III"><i className="bi bi-github"></i></a>
                <a><i className="bi bi-share"></i></a>
            </div>

       
    </section>

    
  </div>

);


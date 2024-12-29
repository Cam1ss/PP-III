import React from 'react';
import guias from '../../data/guiaDados.js';
import '../../style/guia.css'



function Guia() {
    const conteudoGuia = guias.map((guia) => {
        return (
            <div key={guia.id} className="guia">

                <div className='background'  style={{
                        backgroundColor: `${guia.color}`,
                    }}>
                    <img src={guia.imagemFundo}/>
                </div>
                

                <div className='info'>
                    <h3>{guia.titulo}</h3>
                    <p>{guia.desc}</p>
                </div>
            </div>
        );
    });

    return <div className="guiaMain">{conteudoGuia}</div>;
}

export default Guia;

import Jornadas from '../../components/aboutUs/jornadas'
import '../../style/AboutUs/jornada.css'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Jornada(){
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '50px',
          duration: 1900,
          reset: false, 
        });
    
        sr.reveal('.jornada-main', { interval: 200 });
      }, []);
  

    return (  
         <div className='jornada-main'>
            <div className="conjunto">
                <a href='https://github.com/Cam1ss/Projeto_Apple_Academy'><Jornadas img="/img/AboutUsImg/icon-planta.png" alt="icon-planta" titulo="Little Botainist" color="#98C543"/></a>
                <a href='https://github.com/Cam1ss/Projeto_Pet_Virtual'><Jornadas img="/img/AboutUsImg/icon-pinguim.png" alt="icon-pinguim" titulo="Pinguinho" color="#43C3DD"/></a>
                <a href='https://github.com/Cam1ss/PP-II'><Jornadas img="/img/AboutUsImg/icon-python.png" alt="icon-python" titulo="Cobralingo" color="#FBBE49"/></a>
                <a href='https://github.com/Cam1ss/PP-III'><Jornadas img="/img/AboutUsImg/icon-sunrise.png" alt="icon-sunrise" titulo="Festivale" color="#F67F00"/></a>
            </div>

              <p>clique nos ícones para saber mais</p>  
         </div>
    )

}

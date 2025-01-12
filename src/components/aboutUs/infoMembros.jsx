import Membro from '../../components/aboutUs/membro'
import "../../style/AboutUs/infoMembros.css"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function InfoMembros(){
   useEffect(() => {
      const sr = ScrollReveal({
        origin: 'left',
        distance: '50px',
        duration: 1900,
        reset: false, 
      });
  
      sr.reveal('.card-membro', { interval: 200 });
    }, []);

    return (  
        <div className='main-card-membros'>
         <div className='card-membro'>
            <div className='barrinha'></div>
            <Membro nome="Anderson" idioma1="Inglês" idioma2=""  bandeira1="/img/AboutUsImg/membros/eua.png" bandeira2="" hardskill1="HTML, CSS, JavaScript" hardskill2="Análise de Dados" hardskill3="Conhecimentos em Matemática" funcao="back-end" midia="Linkedin" github="https://github.com/TheAnders007" img="/img/AboutUsImg/membros/Anderson.jpg" linkedin="https://www.linkedin.com/in/anderson-maia-68053133a/" troca="1"/>
            <img src='/img/AboutUsImg/icon-gelo.png'></img>
         </div>

         <div className='card-membro'>
            <div className='barrinha'></div>
            <Membro nome="Camila" idioma1="Inglês" idioma2="Italiano" bandeira1="/img/AboutUsImg/membros/eua.png" bandeira2="/img/AboutUsImg/membros/italia.png" hardskill1="HTML, CSS, JavaScript" hardskill2="React" hardskill3="Desing UI/UX"  funcao="front-end" midia="Linkedin" github="https://github.com/Cam1ss" img="/img/AboutUsImg/membros/Camila.jpg" linkedin="https://www.linkedin.com/in/camila-brauna/" troca="1"/>
            <img src='/img/AboutUsImg/icon-cupcake.png'></img>
         </div>

         <div className='card-membro'>
            <div className='barrinha'></div>
            <Membro nome="Letícia" idioma1="Inglês" idioma2="Francês" bandeira1="/img/AboutUsImg/membros/eua.png" bandeira2="/img/AboutUsImg/membros/franca.png" hardskill1="Design" hardskill2="Conhecimento de Diversos Idiomas" hardskill3="Habilidades Básicas de TI"  funcao="front-end" midia="E-mail" github="https://github.com/mareshbard" img="/img/AboutUsImg/membros/Leticia.jpg" linkedin="mailto:leticia.pereira11@aluno.ifce.edu.br" troca=""/>
            <img src='/img/AboutUsImg/icon-pipoca.png'></img>
         </div>

         <div className='card-membro'>
            <div className='barrinha'></div>
            <Membro nome="Abner" idioma1="Inglês" idioma2="" bandeira1="/img/AboutUsImg/membros/eua.png" bandeira2="" hardskill1="Conhecimentos de Info de Nível Técnico" hardskill2="Proficiencia em Inglês" hardskill3="Familiaridade com bancos de dados"  funcao="back-end" midia="E-mail" github="https://github.com/frsmth" img="/img/AboutUsImg/membros/Abner.jpg" linkedin="mailto:antonio.abner08@aluno.ifce.edu.br" troca=""/>
            <img src='/img/AboutUsImg/icon-abelha.png'></img>
         </div>
        </div>
    )

}



export default function Footer(){
    return (
        <footer className="footer">
         <div className="footer-container">
         <ul className="menu-footer">
            <li className="item"><a id="home" className="item-l" href="./">home</a></li>
            <li className="item"><a id="aboutUs" className="item-l" href="aboutUs.html">sobre nós</a></li>
            <li className="item"><a id="fomr" className="item-l" href="formulario.html">formulário</a></li>
        </ul>
          <img className="footer-logo" src="./img/sun.png"></img>
         <p>&copy; Copyright 2024 - Festivale Company</p>
        </div> 
    </footer>
    )
}
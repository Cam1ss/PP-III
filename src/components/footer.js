import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="footer">
         <div className="footer-container">
         <ul className="menu-footer">
            <li className="item"><Link className="item-l" to="/">home</Link></li>
            <li className="item"><Link className="item-l" to="/aboutUs">sobre nós</Link></li>
            <li className="item"><Link className="item-l" to="/formulario">formulário</Link></li>
        </ul>
          <img className="footer-logo" src="/img/HomeImg/sun.png"></img>
         <p className="p">&copy; Copyright 2024 - Festivale Company</p>
        </div> 
    </footer>
    )
}
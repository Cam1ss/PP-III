import { Link } from "react-router-dom";

export default function Header(){
    return (
         <nav className="menu">
        <Link to="/"><img className="logo" src="/img/HomeImg/logo.png" alt="logo"/></Link>
        <ul className="menu-list">
            <li className="item-list"><Link className="item-link" to="/">home</Link></li>
            <li className="item-list"><Link className="item-link" to="/sobrenos">sobre nós</Link></li>
            <li className="item-list"><Link className="item-link" to="/formulario">formulário</Link></li>
        </ul>
    </nav>

        
    )
}



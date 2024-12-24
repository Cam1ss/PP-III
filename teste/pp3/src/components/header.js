export default function Header(){
    return (
         <nav className="menu">
        <img className="logo" src="/img/logo.png" alt="logo"/>
        <ul className="menu-list">
            <li className="item-list"><a id="home" className="item-link" href="./">home</a></li>
            <li className="item-list"><a id="aboutUs" className="item-link" href="aboutUs.html">sobre nós</a></li>
            <li className="item-list"><a id="fomr" className="item-link" href="formulario.html">formulário</a></li>
        </ul>
    </nav>
    )
}



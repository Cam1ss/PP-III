export default function InfoMembros(props){
    return (  
         <div className="info-membros">
         <aside>
            <img className="perfil" src={props.img} style={{
                width: "12rem",
              }}>

              </img>

            <div className="contatos">
                <a href={props.linkedin} target="_blank">
                    <div className="midia">
                    <i className={props.troca ? "bi bi-linkedin" : "bi bi-envelope-at"}></i>
                    <h3>{props.midia}</h3>
                </div>
                </a>

                <a href={props.github} target="_blank">
                <div className="midia">
                <i class="bi bi-github"></i>
               <h3>GitHub</h3>
                </div>
                </a>
            </div>
         </aside>

            <div className="informacoes">
                <div className="nm">
                    <div className="k">
                        <h3>nome : </h3>
                    </div>
                    
                    <p>{props.nome}</p>
                </div>

                <div className="nm">
                <div className="k">
                        <h3>função : </h3>
                    </div>

                    <p>{props.funcao}</p>
                </div>

                <div className="nm">
                <div className="k">
                        <h3>{props.idioma2 ? "idiomas :" : "idioma :"}</h3>
                    </div>
                    <p>{[props.idioma1, props.idioma2].join(" ")}</p>
                </div>

                <div className="hs">
                        <h3>hard-Skills</h3>
        
                    <p>{props.hardskill1}</p> 
                    <p>{props.hardskill2}</p>
                    <p>{props.hardskill3}</p>
                </div>
            </div>

         </div>
    )

}
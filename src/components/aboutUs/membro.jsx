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
                    
                        <p>
                            <span style={{ display: "inline-flex", alignItems: "center", marginRight: "15px" }}>
                                <img 
                                    src={props.bandeira1} 
                                    alt={`Bandeira de ${props.idioma1}`} 
                                    style={{ width: "23px", marginRight: "5px" }} 
                                />
                                {props.idioma1}
                            </span>
                            {props.idioma2 && (
                                <span style={{ display: "inline-flex", alignItems: "center" }}>
                                    <img 
                                        src={props.bandeira2} 
                                        alt={`Bandeira de ${props.idioma2}`} 
                                        style={{ width: "23px", marginRight: "5px" }} 
                                    />
                                    {props.idioma2}
                                </span>
                            )}
                        </p>
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
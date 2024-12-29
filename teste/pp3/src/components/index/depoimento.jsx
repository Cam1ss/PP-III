

export default (props) => {

        const fita = {
            backgroundColor: props.color,
            width: "15rem",
            height: "2.5rem",
            border: "2px solid #000000",
            position: "absolute",
            top: "-1.5rem", 
            zindex: 2,
        }

        return (
            <div className="section-dep">
                <div className="fita" style={fita}/>

                <div className="nota-user">
                    <img className='one'src="./img/aspas-esquerda.png" alt="aspas-esquerda"></img>
                    <p>{props.coment}</p>
                    
                    <h3>{ props.user} </h3>

                    <img className='two' src="./img/aspas-direita.png" alt="aspas-direita"></img>
                </div>
        </div>
        );

};
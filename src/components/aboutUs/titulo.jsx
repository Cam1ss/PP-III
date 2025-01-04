import '../../style/Home/index.css'

export default (props) => {
    const modelo = {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        marginLeft: '2rem',
        marginBottom: '-2rem'
    }

    const img = {
        width: '3.5rem'
    }

    const titulo = {
        color: '#522A1A',
        textTransform: 'uppercase', 
        fontFamily: '"Lilita One", serif',
        fontWeight: '400',
        fontSize: '2.5rem',
    }

    const section = {     
        marginTop: '9rem',
    }

    return (
        <div className="section" style={section}>
            <div className="Title"  style={ modelo }>
                <img style={img} src={ props.icone }  alt={props.alt}></img>
               <h1 style={titulo}> { props.nome} </h1>
            </div> {/* titulo */}

                <div className="conteudo">
                    { props.children }
                </div> {/* conteudo */}
        </div>
    );
};

import '../../style/Home/index.css'

export default (props) => {
    const modelo = {
        color: '#000000',
        letterSpacing: '9px', 
        textTransform: 'uppercase', 
        fontFamily: '"Marcellus", serif', 
        fontWeight: '500',
        fontSize: '2.5rem',
        marginLeft: '4rem',
        marginBottom: '-2rem'
    };

    const section = {     
        marginTop: '12rem',
    }

    return (
        <div className="section" style={section}>
            <div className="Title"  style={ modelo }>
                { props.nome} 
            </div> {/* titulo */}

                <div className="conteudo">
                    { props.children }
                </div> {/* conteudo */}
        </div>
    );
};

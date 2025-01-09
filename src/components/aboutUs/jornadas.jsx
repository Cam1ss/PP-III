

export default (props) => {

        return (
            <div className="capsula">
                <div className="f" style={{ backgroundColor: props.color }}><img src={props.img} alt={props.alt}></img></div>
                <h3>{props.titulo}</h3>
            </div> 
        )
}
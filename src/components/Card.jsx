const Card = ({ruta, titulo, descripcion}) => {
    return (
        <div className="contenedor">
            <div className="cartas">
            <div className="carta">
                <img src={ruta} alt={titulo} className="carta-img" />
                <div className="carta-body">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Card;
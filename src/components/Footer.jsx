import  Button  from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div className="contenedor">
            <hr />
            <div className="abajo">
            <h2>Si quieres saber mas...</h2>
            <Button variant='dark'>Mas informacion</Button>
            <span>todos los derechos reservados</span>
            </div>


        </div>
    );
}

export default Footer;
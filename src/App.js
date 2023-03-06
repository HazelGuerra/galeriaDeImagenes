import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <>
      <Header titulo="Tipos de gatos" />

      <Card
      ruta="https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg" 
      titulo="Gato Negro" 
      descripcion="Los gatos negros son tímidos, tranquilos, muy intuitivos y cariñosos"
      />
      <Card
      ruta="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" 
      titulo="Gato Gris" 
      descripcion="Tienen un carácter muy dinámico, puesto que les gustan la caza y la aventura"
      />
      
      <Card 
        ruta="https://cdn.pixabay.com/photo/2018/03/30/11/22/cute-3275128_1280.jpg" 
        titulo="Gato Naranja" 
        descripcion="Suelen ser muy sociables y extrovertidos así como activos y juguetones"
      />
      

      


      <Footer/>
    </>
  );
}

export default App;

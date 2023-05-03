import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import Freelogo from './imagenes/logo.png';
import {useState} from "react";

function App() {

  const [clic, setClic] = useState(0);

  const manejarClic = () => {
    setClic(clic +1);
  };

  const reiniciarContador = () => {
    setClic(0);
  };

  return (
    <div className="App">
        <div className="container-logo">
          <img 
          className='logo'
          src={Freelogo}
          alt='Logo'
          />
        </div>
        <div className='container-contador'>
          <Contador clic={clic}/> 
          <Boton texto="click"
          botonClic={true}
          manejarClic={manejarClic}/>
          <Boton texto="Reiniciar"
          botonClic={false}
          manejarClic={reiniciarContador} />
        </div>
    </div>
  );
}

export default App;

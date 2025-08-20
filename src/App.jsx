import './App.css';
import Libros from './componentes/libros/Main';
import Autores from './componentes/autores/Main';

// https://api-libros.ctpoba.edu.ar/

export default function App(){

  return(
    <div className='App'>
      <Autores />
      <Libros />
    </div>
  )
}


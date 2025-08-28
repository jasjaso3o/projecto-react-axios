import axios from 'axios';
import FormularioLibro from './Formulario';
import ListadoLibro from './Listado';
import { useEffect, useState } from 'react';


// const librosEjemplo = [
//   {
//     _id:1, titulo:"ejemplo1", isbn:"123", generos:"ejemplos generos", 
//     sinopsis:"ejemplo sinopsis", autor:{nombre:"ejemplo1", apellido:"ejemplo1"}
//   },
//   {
//     _id:2, titulo:"ejemplo2", isbn:"234", generos:"ejemplos generos", 
//     sinopsis:"ejemplo sinopsis", autor:{nombre:"ejemplo2", apellido:"ejemplo2"}
//   },
//   {
//     _id:3, titulo:"ejemplo3", isbn:"345", generos:"ejemplos generos", 
//     sinopsis:"ejemplo sinopsis", autor:{nombre:"ejemplo3", apellido:"ejemplo3"}
//   }
// ]

export default function Libros(){

  const [autores, setAutores] = useState([])
  const [libros, setLibros] = useState([])


  const eliminar = (libro_id) =>{
    
  }
  const guardar = (datos) =>{
    
  }
  return(
    <div 
      className='Seccion'
      style={{backgroundColor:'lightcoral'}}
    >
      <FormularioLibro 
        autores={autores}
        guardarLibro={(datos) => guardar(datos)}
      />
      <ListadoLibro 
        libros={libros}
        eliminar={(libro_id) => eliminar(libro_id)}
      />
    </div>
  )
}
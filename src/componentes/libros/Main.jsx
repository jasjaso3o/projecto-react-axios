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

//cambié datos por libros/autores ya que datos no habia sido definido en ningun lado y autores/libros si estaba definido al guardar

export default function Libros(){

  const [autores, setAutores] = useState([])
  const [libros, setLibros] = useState([])


  const eliminar = (libro_id) =>{
    const url = `https://api-libros.ctpoba.edu.ar/v1/libros/${libro_id}`;

    const config = {
      headers: { authorization: "123456" }
    }

    axios.delete(url, config)
    .then((resp) => {
      console.log(resp.data);
      obtenerLibros();
    })
    .catch((error) => {
      console.error(error);
    })
  }
  const guardar = (datos) =>{
    const url = "https://api-libros.ctpoba.edu.ar/v1/libros/";

    const config = {
      headers: { authorization:"123456"}
    }
    axios.post(url, datos, config)
    .then((resp) => {
      console.log(resp.data);
      obtenerLibros();
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const obtenerLibros = () =>{
  const url = "https://api-libros.ctpoba.edu.ar/v1/libros/";
  axios.get(url)
    .then((resp) => {
      console.log(resp.data.libros);
      setLibros(resp.data.libros)
    })
    .catch((error) => {
      console.error(error);
    })  
  }

  useEffect(() => {
    obtenerLibros();
  },[])

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
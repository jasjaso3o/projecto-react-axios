import axios from 'axios';
import FormularioAutores from './Formulario';
import ListadoAutores from './Listado';
import { useEffect, useState } from 'react';

export default function Autores(){
  const [autores, setAutores] = useState([])

  const eliminar = (autor_id) =>{
    const url = `https://api-libros.ctpoba.edu.ar/v1/autores/${autor_id}`;
    const config = {
      headers: { authorization: "123456" }
    }

    axios.delete(url, config)
    .then((resp) => {
      console.log(resp.data);
      obtenerAutores();
    })
    .catch((error) => {
      console.error(error);
    })

  }
    const guardar = (autores) =>{
    const url = "https://api-libros.ctpoba.edu.ar/v1/autores/";

    const config = {
      headers: { authorization:"123456"}
    }

    axios.post(url, autores, config)
    .then((resp) => {
      console.log(resp.data);
      obtenerAutores();
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const obtenerAutores = () =>{
    const url = "https://api-libros.ctpoba.edu.ar/v1/autores/";
    axios.get(url)
      .then((resp) => {
        console.log(resp.data.autores);
        setAutores(resp.data.autores)
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    obtenerAutores()
  },[])

  return(
    <div 
      className='Seccion'
      style={{backgroundColor:'darkgrey'}}
    >
      <FormularioAutores 
        guardarAutores={(autores) => guardar(autores)}
      />
      <ListadoAutores 
        autores={autores}
        eliminar={(autor_id) => eliminar(autor_id)}
      />
    </div>
  )
}
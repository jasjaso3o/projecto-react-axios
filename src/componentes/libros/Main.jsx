import FormularioLibro from './Formulario';
import ListadoLibro from './Listado';

const autoresEjemplo = [
  {_id:1, nombre:"ejemplo1", apellido:"ejemplo1"},
  {_id:2, nombre:"ejemplo2", apellido:"ejemplo2"},
  {_id:3, nombre:"ejemplo3", apellido:"ejemplo3"},
  {_id:4, nombre:"ejemplo4", apellido:"ejemplo4"},
  {_id:3, nombre:"ejemplo3", apellido:"ejemplo3"},
  {_id:4, nombre:"ejemplo4", apellido:"ejemplo4"},
  {_id:3, nombre:"ejemplo3", apellido:"ejemplo3"},
  {_id:4, nombre:"ejemplo4", apellido:"ejemplo4"},
  {_id:3, nombre:"ejemplo3", apellido:"ejemplo3"},
  {_id:4, nombre:"ejemplo4", apellido:"ejemplo4"},
]
const librosEjemplo = [
  {
    _id:1, titulo:"ejemplo1", isbn:"123", generos:"ejemplos generos", 
    sinopsis:"ejemplo sinopsis", autor:{nombre:"ejemplo1", apellido:"ejemplo1"}
  },
  {
    _id:2, titulo:"ejemplo2", isbn:"234", generos:"ejemplos generos", 
    sinopsis:"ejemplo sinopsis", autor:{nombre:"ejemplo2", apellido:"ejemplo2"}
  },
  {
    _id:3, titulo:"ejemplo3", isbn:"345", generos:"ejemplos generos", 
    sinopsis:"ejemplo sinopsis", autor:{nombre:"ejemplo3", apellido:"ejemplo3"}
  }
]

export default function Libros(){

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
        autores={autoresEjemplo}
        guardar={(datos) => guardar(datos)}
      />
      <ListadoLibro 
        libros={librosEjemplo}
        eliminar={(libro_id) => eliminar(libro_id)}
      />
    </div>
  )
}
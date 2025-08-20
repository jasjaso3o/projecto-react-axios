import FormularioAutores from './Formulario';
import ListadoAutores from './Listado';

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

export default function Autores(){

  const eliminar = (autor_id) =>{
    
  }
  const guardar = (datos) =>{
    
  }

  return(
    <div 
      className='Seccion'
      style={{backgroundColor:'darkgrey'}}
    >
      <FormularioAutores 
        guardar={(datos) => guardar(datos)}
      />
      <ListadoAutores 
        autores={autoresEjemplo}
        eliminar={(autor_id) => eliminar(autor_id)}
      />
    </div>
  )
}
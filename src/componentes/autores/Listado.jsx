function TarjetaAutor ({apellido, nombre, eliminar}){

  return(
    <div className="Tarjeta">
      <span 
        className="Eliminar"
        onClick={() => eliminar()}
      >x</span>
      <span>Nombre: {nombre}</span>
      <span>apellido: {apellido}</span>
    </div>
  )
}

export default function ListadoAutores({autores, eliminar}){

  return (
    <div className="Listado">
      {autores.map((autor, index) => 
        <TarjetaAutor
          key={autor._id}
          nombre={autor.nombre}
          apellido={autor.apellido}
          eliminar={() => eliminar(autor._id)}
        />
      )}
    </div>
  )
}
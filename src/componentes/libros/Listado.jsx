function TarjetaLibros ({titulo, isbn, generos, sinopsis, autor, eliminar}){

  return(
    <div className="Tarjeta">
      <span 
        className="Eliminar"
        onClick={() => eliminar()}
      >x</span>
      <span>{isbn} - {titulo}</span>
      <span>{generos}</span>
      <span>{sinopsis}</span>
      <span>{autor.apellido}, {autor.nombre}</span>
    </div>
  )
}

export default function ListadoLibros({libros, eliminar}){

  return (
    <div className="Listado">
      {libros.map((libro, index) => 
        <TarjetaLibros
          key={libro._id}
          titulo={libro.titulo}
          isbn={libro.isbn}
          generos={libro.generos}
          sinopsis={libro.sinopsis}
          autor={libro.autor}
          eliminar={() => eliminar(libro._id)}
        />
      )}
    </div>
  )
}
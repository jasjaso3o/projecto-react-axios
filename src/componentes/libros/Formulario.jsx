import { useState } from "react"

/*
titulo
isbn
generos
sinopsis
autor_id

*/
export default function FormularioLibros({autores, guardarLibro}){
  const [titulo, setTitulo] = useState("")
  const [isbn, setIsbn] = useState("")
  const [generos, setGeneros] = useState("")
  const [sinopsis, setSinopsis] = useState("")
  const [autor_id, setAutorId] = useState("")

  const guardar = (e) => {
    e.preventDefault();

    const libro = {
      titulo,
      isbn,
      generos,
      sinopsis,
      autor_id
    }
    guardarLibro(libro);
  }
  return (
    <div className="Formulario">
      <form 
        className="FormContenedor"
        onSubmit={(e) => guardar(e)}
      >
        <input 
          value={titulo} onChange={(e) => setTitulo(e.target.value)}
          type="text" placeholder="titulo"
        />
        <input 
          value={isbn} onChange={(e) => setIsbn(e.target.value)}
          type="text" placeholder="isbn"
        />
        <input 
          value={generos} onChange={(e) => setGeneros(e.target.value)}
          type="text" placeholder="generos"
        />
        <input 
          value={sinopsis} onChange={(e) => setSinopsis(e.target.value)}
          type="text" placeholder="sinopsis"
        />
        <select
          value={autor_id} onChange={(e) => setAutorId(e.target.value)}
        >
          {autores.map((autores, index) => 
            <option 
              key={autor._id}
              value={autor._id}
            >{autor.apellido}, {autor.nombre}</option>
          )}
        </select>
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}
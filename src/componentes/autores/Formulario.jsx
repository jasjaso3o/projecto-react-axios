import { useState } from "react"

export default function FormularioAutores(){
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");

  const guardar = (e) => {
    e.preventDefault();
  }

  return (
    <div className="Formulario">
      <form 
        className="FormContenedor"
        onSubmit={(e) => guardar(e)}
      >
        <input 
          placeholder="Nombres" 
          type="text" value={nombres}
          onChange={(e) => setNombres(e.target.value)}
        />
        <input 
          placeholder="Apellidos" 
          type="text" value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}
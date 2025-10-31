import { useState } from "react"

export function NewSubjectPage({onAddSubject}){
  const [addNameSubject, setAddNameSubject] = useState("")
  const [addDescriptionSubject, setAddDescriptionSubject] = useState("")
  function onSubmit(e){
    e.preventDefault()
    onAddSubject({id: Math.floor(Math.random() * 232), name: addNameSubject, description: addDescriptionSubject})
    addNameSubject("")
    addDescriptionSubject("")
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Digite o nome da materia </label>
        <br />
        <br />
        <input 
          placeholder="Digite o nome da materia" 
          type="text" 
          value={addNameSubject} 
          onChange={(e) => setAddNameSubject(e.target.value)} 
        />
        <br />
        <br />
        <label>Digite a descricao da materia </label>
        <br />
        <br />
        <input 
          placeholder="Digite a descricao da materia" 
          type="text" value={addDescriptionSubject} 
          onChange={(e) => setAddDescriptionSubject(e.target.value)} 
        />
        <br />
        <br />
        <button type="submit">enviar</button>
      </form>
    </div>
  )
}
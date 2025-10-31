import { createContext, useState } from "react"
export const SubjectsContext = createContext()

export function SubjectsProvider({ children, value }){

  const [subjectsList, setSubjectsList] = useState([
    { id: 1, name: "Matemática", description: "Estudo de números e operações" },
    { id: 2, name: "Física", description: "Estudo de forças e energia" },
  ])

  function addSubject(newName){
    setSubjectsList((prev)=>[...prev, newName])
  }

  return (
    <SubjectsContext.Provider 
      value={{ subjectsList, addSubject }}>
        {children}
    </SubjectsContext.Provider>
  )
}

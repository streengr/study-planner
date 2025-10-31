import { useState } from "react"
import { NewSubjectPage } from "./NewSubjectPage"

export function SubjectsPage (){
  const [subjectslist, setSubjectslist] = useState([{
    id: 14353,
    name: "Matemática",
    description: "Estudo de números e operações",
  }])
  console.log(subjectslist)

  function handleAddSubject(newName){
    setSubjectslist([...subjectslist, newName])
  }


  return (
    <>
      {
        subjectslist.map((subject) => (
          <div key={subject.id}>
            <h2>{subject.name}</h2>
            <p>{subject.description}</p>
          </div>
        ))

      }
      <NewSubjectPage onAddSubject={handleAddSubject}/>
    </>
  )
}
import { useParams } from "react-router-dom"
import { SubjectsContext } from "../hooks/SubjectsContext"
import { useContext } from "react"

export function SubjectDetailsPage({}){
  const { id } = useParams()
  const { subjectsList } = useContext(SubjectsContext)
  const subject = subjectsList.find((subj) => subj.id === Number(id))
  return (
    <div>
      <h1>{subject.name}</h1>
      <p>{subject.description}</p>
    </div>
  )
}
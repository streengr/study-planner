import { useContext, useState } from "react"
import { SubjectsContext } from "../hooks/SubjectsContext"
import { NewSubjectPage } from "./NewSubjectPage"
import { SubjectCard } from "../components/SubjectCard"
import * as yup from "yup" 

const schema = yup.object({})

export function SubjectsPage (){
  const {subjectsList} = useContext(SubjectsContext)

  return (
    
    <>
    {
      subjectsList.map((subject) => (
        <SubjectCard key={subject.id} id={subject.id} name={subject.name}/>
      ))
      
    }
      <NewSubjectPage />
    </>
  )
}
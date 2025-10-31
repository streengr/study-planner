import { useNavigate } from "react-router-dom"

export function SubjectCard({id, name, description }){
  const navigate = useNavigate()
  return (
    <div 
      style={{
        backgroundColor: "gray",
        padding: "8px",
        margin: "8px 0"
      }}
      onClick={() => navigate(`/materia/${id}`)}
    >
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export function Home(){
  return (
    <div>
      <a href="/materias">Materias</a>
      <br />
      <a href="/materias/nova">Adicionar item</a>
      <br />
      <a href="/materias/:1">detalhes da materia</a>
    </div>
  )
}
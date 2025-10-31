
export function Home(){
  return (
    <div>
      <a href="/materia">Materias</a>
      <br />
      <a href="/materia/nova">Adicionar item</a>
      <br />
      <a href="/materia/:1">detalhes da materia</a>
    </div>
  )
}
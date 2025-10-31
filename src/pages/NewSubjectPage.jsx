import { Controller, useForm } from "react-hook-form"
import { SubjectsContext } from "../hooks/SubjectsContext"
import { useContext } from "react"

export function NewSubjectPage(){
  const { control, handleSubmit, reset } = useForm({defaultValues: {
    name: "",
    description: ""
  }})
  const { addSubject } = useContext(SubjectsContext)


  function onSubmit(data){
    addSubject({
      id: Math.floor(Math.random() * 232), name: data.name, description: data.description
    })
    reset()
  }

  return (
    <div >
      <form 
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          backgroundColor: "gray",
          padding: "8px",
          margin: "8px 0"
        }}
      >
        <Controller 
          control={control}
          name="name"
          render={({field}) =>  
            <input 
            placeholder="Digite o nome da materia" 
            type="text"
            required
            {...field}
            />
          }
        />
        <Controller 
          control={control}
          name="description"
          render={({ field }) =>
            <input 
              placeholder="Digite a descricao da materia" 
              type="text"
              required
              {...field}
              />
          }
        />
          <button type="submit">enviar</button>
      </form>
    </div>
  )
}
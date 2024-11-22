import { zodResolver } from "@hookform/resolvers/zod"
import { Message_Input, schema, Todo } from "../App"
import { useForm } from "react-hook-form"

interface Props {
  todos: Todo[];
  setTodos : (task : string) => void
}

const Todo_input = ({todos , setTodos}:Props) => {
  const { register, handleSubmit , reset , formState: { errors }} = useForm<Message_Input>({
    resolver: zodResolver(schema),
  })
  return (
    <form
    onSubmit={handleSubmit((data) => {
      setTodos(data.message_input)
      reset()
    })}
    className={(todos.length ? 'mb-auto' : ' my-5') + ' mt-2 mx-4 bg-slate-100 py-3 px-2 w-96 rounded-md'}>
    <input
      {...register("message_input")}
      type='text'
      placeholder='New column'
      className='border border-gray-400 placeholder:text-slate-500 rounded-md py-1 px-2 w-full placeholder:hover:text-slate-400 outline-none'
      />
      {}
  </form>
  )
}

export default Todo_input
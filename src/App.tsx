import { useState } from "react"
import Todo_input from "./components/Todo_input"
import Todo_List from "./components/Todo_List";
import { z } from "zod";
import Parameters from "./components/Parameters";

export interface Todo {
  id :number;
  title : string;
  completed : boolean;
  tasks : string[];
}

export interface Options {
  id:number;
  title : string;
  description?: string;
  column : string[];
  order : number;
}
export const schema = z.object({
  message_input: z.string().min(1 , {
    message: "Please enter a task"}).max(30 , {message : "Tasks must be less than 30 characters"}),
})

export type  Message_Input = z.infer<typeof schema>
// // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // //

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([
    // { id: 0, title: "Test", completed: false, tasks: [] },
  ])

  const addTask = (task : string) => {
    setTodos([...todos, { id: todos.length, title: task, completed: false, tasks: [] }])
  }

  // Modal
  const [modal, setModal] = useState(false)
  // Parameters
  const [parameters, setParameters] = useState<Options>({id:0,title:"Help" , description:'' , column:["Test1"] , order:0})

  const onDelete = (id : number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const open_Parameters = (id:number , title:string , description:string , column:string[] , order:number) => {
    setModal(!modal)
    setParameters({id,title , description , column , order})
  }

// // // // // // // // // // // // // // // // // // // //
  return (
    <div className="flex flex-wrap justify-start">
      {todos.map((todo ) => (
        <Todo_List id={todo.id} onDelete={onDelete} modal_switch={() => setModal(!modal)} key={todo.id} title={todo.title} tasks={todo.tasks} />
      ))}
      {modal && <Parameters modal_switch={() => setModal(!modal)} />}
      <Todo_input todos={todos} setTodos={addTask} />
    </div>
  )
}

export default App
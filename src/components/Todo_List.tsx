import { zodResolver } from "@hookform/resolvers/zod";
import { Message_Input, schema } from "../App";
import { useForm } from "react-hook-form";

interface Props {
  title: string;
  tasks?: string[];
  modal_switch: () => void;
  onDelete: (id : number) => void;
  id:number;
}

const Todo_List = ({ title, tasks = [] , modal_switch, onDelete , id}: Props) => {

  const { register, handleSubmit , reset , formState: { errors }} = useForm<Message_Input>({
    resolver: zodResolver(schema),
  })

  const handleClick = () => {
    modal_switch();
    
    
  }

  return (
    <form 
      onSubmit={handleSubmit((data) => {
        tasks.push(data.message_input)
        reset()
    })}
      className='mx-4 my-2 mb-auto bg-slate-100 py-3 px-2 w-96 rounded-md'
    >
      <div className='flex justify-between group align-center my-auto px-2'>
        <span className='font-bold text-lg uppercase text-slate-600 group-hover:text-slate-500'>
          {title}
        </span>
        <div className='text-slate-400 text-lg'>{tasks.length}</div>
      </div>

        <div className="max-h-36 overflow-hidden hover:overflow-auto">
            {tasks.map((message , index) => {
              return(
                <div key={index} onClick={() => handleClick()} className='cursor-pointer border border-slate-300 my-2 shadow-sm rounded-md px-2 py-1 w-full hover:text-slate-600 bg-white'>
                  {message}
                </div>
              )
            })}
        </div>
        
      
      <input
        {...register('message_input')}
        type='text'
        placeholder='New task'
        className='border border-slate-300 mt-3 shadow-sm outline-none placeholder:text-slate-500 rounded-md py-1 px-2 w-full placeholder:hover:text-slate-400'
      />
      {errors.message_input && <span className="text-red-500">{errors.message_input.message}</span>}
      <p onClick={() => onDelete(id)} className="cursor-pointer text-end pe-2 pt-1"><i className="fa-solid fa-trash"></i></p>
    </form>
)
}

export default Todo_List
interface Props {
  modal_switch: () => void;
}
const Parameters = ({modal_switch}:Props) => {
  return (
    <div className="absolute p-0 m-0 min-h-screen z-10 bg-transparent w-full flex flex-wrap justify-center items-center ">
      <form onSubmit={(evt) => evt.preventDefault()} className="bg-white p-5 rounded-lg shadow-2xl">
        <label htmlFor="title" className="font-bold text-lg">Title</label>
        <input id="title" type="text" className="my-2 border border-gray-300 w-full p-2 w-96 rounded-md" />
        <label htmlFor="description">Description</label>
        <textarea id="description" className="my-2 border border-gray-300 min-h-20 bg-white w-full p-2 w-96 rounded-md"></textarea>
        <div className="flex flex-wrap justify-between">
          <div className="w-5/12">
            <label htmlFor="column">Column</label>
            <select id="column" className="border border-gray-300 w-full p-1 w-96 rounded-md">
              <option value="done">Done</option>
            </select>
          </div>
          <div className="w-5/12">
            <label htmlFor="order">Order</label>
            <input type="text" id="order" className="border border-gray-300 w-full px-2 p-1 w-96 rounded-md" />
          </div>
        </div>
        <div className="flex justify-between pt-10">
          <button onClick={() => console.log()} className="p-3 py-2 rounded-md bg-gray-200">Delete</button>
          <button onClick={() => modal_switch()} className="p-3 py-2 text-white font-bold text-lg rounded-md bg-blue-400">Update</button>
        </div>
      </form>
    </div>
  )
}

export default Parameters
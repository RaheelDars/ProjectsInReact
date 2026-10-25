import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandeler = (ele) => {
    ele.preventDefault();
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  };
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex  bg-black text-white">
      <form
        onSubmit={(ele) => {
          submitHandeler(ele);
        }}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input 
          className="px-5 py-2 font-medium outline-none w-full border-2 rounded "
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)

          }}
        />
        <textarea
          className="px-5 py-2 font-medium w-full h-32 outline-none border-2 rounded "
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)

          }}
        />
        <button className="bg-white outline-none text-black px-5 py-2 font-medium w-full rounded">
          Add Notes
        </button>

      </form>

      <div className=" p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-3xl font-bold ">Recent Notes</h1>
        <div className="flex flex-wrap items- justify-start gap-5 mt-5  overflow-auto h-[90%] ">
         {task.map(function(elem,idx){

          return  <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black bg-cover   bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] pt-9 pb-3 px-4  ">

            <div>
            <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
            <p className="mt-3 text-xs leading-tight font-semibold text-gray-500">{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold ">delete</button>
          </div>
         })}
         
        </div>
      </div>
    </div>
  );
};

export default App;

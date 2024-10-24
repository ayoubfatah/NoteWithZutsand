
import NoteForm from "./components/noteForm"
import Note from "./components/Note"
import useStore from "./store";

function App() {
  const {  open , openModel , note } = useStore();

    // const [notes , setNotes] = useState({}) 
    console.log(note)


  return (
    <>
  <main className="bg-black text-gray-100  h-lvh flex justify-center items-center">
    <div className="w-[1300px] h-[800px] bg-slate-900 inline-flex pt-[100px] items-center flex-col gap-2  overflow-y-scroll" >
      <h1 className="text-4xl font-bold ">TYPESCRIPT AND ZUSTAND</h1>
      <button onClick={openModel} className="bg-yellow-500 text-slate-900 font-bold py-1 px-3 rounded-sm my-7" >Add note </button>
   {open &&    <NoteForm  />}

       {/* notes */}
<div className=" p-10   w-full  grid grid-cols-3 gap-3">

<Note />
 <Note />
 <Note />
 <Note />
 <Note />
 <Note />
 <Note />
</div>
        {/* end */}

    </div>
   
  </main>
    </> 
  )
}

export default App

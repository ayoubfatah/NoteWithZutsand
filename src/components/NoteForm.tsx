import {  useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import  useStore  from "../store"; 

export default function NoteForm(){
    const [noteTitle , setNoteTitle] = useState("")
    const {  closeModel } = useStore();

    const [noteDescription ,setNoteDescription] = useState("")
    
        function handleSubmit(e:React.FormEvent){
            e.preventDefault()
       alert(noteTitle  + noteDescription)
        }
    return (

        <div className="fixed top-0 left-0 bg-black h-lvh w-full  z-50 flex justify-center items-center">
        <form onSubmit={handleSubmit} >
        <div className="flex justify-end cursor-pointer" onClick={closeModel}><HiMiniXMark size={25} /></div>
        <div className="flex flex-col gap-2 py-2">
          <label className="text-[22px] font-semibold" htmlFor="text">Note Title : </label>
          <input onChange={(e :React.ChangeEvent<HTMLInputElement>)=> setNoteTitle(e.target.value)  } className="w-[400px]  text-black py-1 outline-none px-2 rounded-sm  bg-white" type="text"  />
         </div>
         <div className="flex flex-col gap-2 py-2">
          <label className="text-[22px] font-semibold" htmlFor="text">Note Title : </label>
          <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNoteDescription(e.target.value)} className="w-[400px] text-black outline-none px-2 py-1 rounded-sm bg-white" rows={4}/>
          </div>
         <button type="submit"  className="w-[400px] bg-yellow-500 font-bold text-[16px] py-2 rounded-sm text-gray-800">Add note</button>
        </form>
        </div>
    )
} 

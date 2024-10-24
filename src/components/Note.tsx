import { HiMiniXMark } from "react-icons/hi2";

export default function Note(){
    return (
        <div className="bg-slate-700 py-2 px-4 text-gray-50" >
        <div  className="flex  items-center cursor-pointer justify-between "> <h1 className=" text-[22px] font-bold text-slate-300">Note title</h1>  <div className="translate-x-[7px]"><HiMiniXMark size={20} /></div> </div>
           
           <div>note  note note note note note note note note note</div>
           <p className="text-[10px] mt-2">25 oct 2025</p>
         </div>
    )
}
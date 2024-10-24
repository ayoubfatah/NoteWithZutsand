import { create } from 'zustand';

type NoteType ={
    noteTitle : string,
    noteDescription : string ,
    date : any
}
type Store = {
  open: boolean;
  openModel: () => void;
  closeModel: () => void;
  submitNote: (newNote: NoteType) => void;
  note: NoteType ; 

};

const useStore = create<Store>((set) => ({
  note : {noteTitle:"" , noteDescription: "" , date:"01-01-2001"} ,
  submitNote: (newNote : any) => set((state: any) => ({
  note: { ...state.note, ...newNote }
  })) , 
  open: false,
  openModel: () => set({ open: true }),
  closeModel: () => set({ open: false }),
}));

export default useStore;

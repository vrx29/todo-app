import { useNotes } from "../../context/NotesContext";
import NoteCard from "../NoteCard/NoteCard";

export default function NotesList() {
  const { notes, selectNote, addNote } = useNotes();

  const handleNewNote = () => {
    addNote({
      id: Date.now(),
      title: "",
      content: "",
      created: Date.now(),
      done: false,
      favourite: false,
    });
  };
  return (
    <div className="w-full pt-6">
      <div className="h-[60px] flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold text-gray-900">My Notes</h2>

        <button
          onClick={handleNewNote}
          className="h-[40px] w-[48px] flex items-center justify-center bg-stone-900 text-white rounded-md cursor-pointer"
        >
          +
        </button>
      </div>

      <hr className="border-t border-gray-300 mt-4 mb-2" />
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          onClick={() => selectNote(note)}
          title={note.title}
          description={note.content}
          createdAt={note.created}
        />
      ))}
    </div>
  );
}

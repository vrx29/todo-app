import { createContext, useContext, useState, type ReactNode } from "react";
import type { Note } from "../types/types";

interface NotesContextType {
  notes: Note[];
  selectedNote: Note | null;
  selectNote: (note: Note | null) => void;
  addNote: (note: Note) => void;
  updateNote: (id: number, updateFields: Partial<Note>) => void;
  deleteNote: (id: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "First Test Note",
      content:
        "Discuss milestone 2 delivery.\nAsk if design review is finished.\nConfirm deadline for frontend handoff.",
      created: 1729922400000, // Oct 26, 2024
      done: false,
      favourite: true,
    },
  ]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const addNote = (note: Note) => {
    setNotes((prev) => [note, ...prev]);
        setSelectedNote(note)

  };

  const updateNote = (id: number, updatedFields: Partial<Note>) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, ...updatedFields } : note,
      ),
    );
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    setSelectedNote(null)
  };

  return (
    <NotesContext.Provider value={{ notes, selectedNote,
        selectNote: setSelectedNote, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }

  return context;
};

export { NotesProvider, useNotes };

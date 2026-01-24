import { useEffect, useRef, useState } from "react";
import { useNotes } from "../../context/NotesContext";
import { useCollaborativeNote } from "../../hooks/useCollaborativeNote";

export default function NoteContent() {
  const { selectedNote, updateNote, deleteNote } = useNotes();
  const [title, setTitle] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ⬇️ Bind Yjs ONLY when note exists
  const { ytext } = useCollaborativeNote(
    selectedNote ? String(selectedNote.id) : ""
  );

  // Local mirror of Yjs content (for rendering)
  const [content, setContent] = useState("");

  /**
   * 1️⃣ Load initial content into Yjs (once per note)
   */
  useEffect(() => {
    if (!selectedNote) return;

    if (ytext.length === 0 && selectedNote.content) {
      ytext.insert(0, selectedNote.content);
    }

    setTitle(selectedNote.title);
  }, [selectedNote]);

  /**
   * 2️⃣ Observe Yjs changes (remote + local)
   */
  useEffect(() => {
    const updateFromYjs = () => {
      setContent(ytext.toString());
    };

    ytext.observe(updateFromYjs);
    updateFromYjs(); // initial sync

    return () => {
      ytext.unobserve(updateFromYjs);
    };
  }, [ytext]);

  /**
   * 3️⃣ Handle typing → update Yjs
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    // Replace entire content safely
    ytext.delete(0, ytext.length);
    ytext.insert(0, value);
  };

  /**
   * 4️⃣ Save metadata (title + snapshot)
   */
  const handleSave = () => {
    updateNote(selectedNote!.id, {
      title,
      content: ytext.toString(), // optional (for persistence)
    });
  };

  const handleDelete = () => {
    deleteNote(selectedNote!.id);
  };

  if (!selectedNote) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select or create a note
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full p-6">
      {/* Actions */}
      <div className="flex justify-between mb-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Delete
        </button>
      </div>

      {/* Title */}
      <input
        className="text-2xl font-bold outline-none mb-4 bg-transparent"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Content */}
      <div className="flex-1 overflow-auto no-scrollbar">
        <textarea
          ref={textareaRef}
          className="w-full resize-none outline-none bg-transparent"
          placeholder="Start writing..."
          value={content}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

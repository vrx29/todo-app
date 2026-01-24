// useCollaborativeNote.ts
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket"

export function useCollaborativeNote(noteId: string) {
  const ydoc = new Y.Doc()
  const provider = new WebsocketProvider(
    "ws://localhost:1234",
    `note-${noteId}`,
    ydoc
  )

  const ytext = ydoc.getText("content")

  return { ydoc, provider, ytext }
}

import { useAuth } from "../auth/authContext";
import { NoteContent, NotesList, Sidebar } from "../components";

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="flex w-full h-screen bg-white dark:bg-gray-900 text-stone-900 dark:text-white">
      <Sidebar user={user} />
      <div className="flex-1 min-w-0">
        {/* Searchbar component */}

        {/* Notes List and content */}
        <div className="flex h-full">
          <div className="w-[400px] border-r border-gray-200">
            <NotesList />
          </div>

          <div className="flex-1">
            <NoteContent />
          </div>
        </div>
      </div>
    </main>
  );
}

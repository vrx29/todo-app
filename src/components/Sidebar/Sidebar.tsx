import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="hidden md:block h-full p-4 border-r w-[300px] border-box">
      <div className="flex items-center gap-4 my-4">
        <div className="w-[50px] h-[50px] border rounded-full flex items-center justify-center text-2xl font-bold">
          VK
        </div>
        Vineet Kumar
      </div>
      {/* Create new note button */}
      <button className="w-full my-6 px-6 py-2 bg-stone-900 text-white rounded cursor-pointer">
        Create New Note
      </button>
      <hr className="border-t border-gray-300 mt-8 mb-4" />
      <nav className="flex flex-col gap-6">
        <Link to="" className="flex">
          Notes
          <span className="ml-auto">1</span>
        </Link>
        <Link to="" className="flex">
          Tasks<span className="ml-auto">8</span>
        </Link>
      </nav>
    </div>
  );
}

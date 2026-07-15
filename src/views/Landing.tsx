import { Link } from "react-router-dom";
import { Header } from "../components";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-stone-900 dark:text-white">
      <Header />
      <main className="p-8">
        <h1 className="text-6xl font-bold mt-15 mb-8 text-center leading-snug">
          Your Daily Tasks
          <br />
          Organised Effortlessly
        </h1>
        <p className="text-xl text-center text-gray-500 mb-10">
          <span>GimeWrite</span> helps you manage your tasks and notes with ease
          and efficiency.
        </p>
        <div className="flex justify-center">
          <Link
            to="/home"
            className="bg-stone-900 text-white px-6 py-2 rounded cursor-pointer hover:bg-stone-800 transition"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

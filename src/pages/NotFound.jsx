import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-blue-600 sm:text-7xl md:text-8xl lg:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            <Home size={18} />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mx-auto mt-10 w-full max-w-lg rounded-xl border border-dashed border-gray-300 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
            📚 Student Hub
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Stay organized with your tasks, notes, and academic resources—all
            in one place.
          </p>
        </div>
      </div>
    </main>
  );
}
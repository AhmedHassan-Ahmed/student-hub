import { useState } from "react";
import { FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";

function NotesCard({ notes = [], handleDelete, handleView, children }) {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}

      {notes.map((note) => (
        <div
          key={note.id}
          className="flex h-96 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
        >
          {note.image && (
            <img
              src={note.image}
              alt={note.title}
              className="mb-4 h-32 w-full rounded-lg object-cover"
            />
          )}

          <div className="flex items-start justify-between">
            <div>
              <h2 className="line-clamp-3 font-serif text-3xl pt-3 font-bold text-gray-900">
                {note.title}
              </h2>
            </div>

            <div className="relative inline-block">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === note.id ? null : note.id)
                }
                className="rounded p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
              >
                <FaEllipsisV />
              </button>

              {openMenu === note.id && (
                <div className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-lg border bg-white shadow-lg">
                  <button
                    onClick={() => {
                      handleView(note);
                      setOpenMenu(null);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left hover:bg-gray-100"
                  >
                    <FaEye />
                    View
                  </button>

                  <button
                    onClick={() => {
                      handleDelete(note.id);
                      setOpenMenu(null);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left text-red-600 hover:bg-red-50"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className="mt-4 line-clamp-5 text-gray-600">{note.content}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {note.tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between border-t pt-4 text-sm text-gray-500">
            <span>{note.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesCard;

import { FaEllipsisV, FaThumbtack } from "react-icons/fa";

function NotesCard({ notes = [], children }) {
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
              {note.pinned && <FaThumbtack className="mb-2 text-blue-600" />}

              <h2 className="line-clamp-3 font-serif text-3xl font-bold text-gray-900">
                {note.title}
              </h2>
            </div>

            <button className="text-gray-500 hover:text-black">
              <FaEllipsisV />
            </button>
          </div>

          <p className="mt-4 line-clamp-5 text-gray-600">{note.content}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span
                key={tag}
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

import { useRef } from "react";

function NotePopup() {
  const dialogRef = useRef();

  const open = () => dialogRef.current.showModal();
  const close = () => dialogRef.current.close();

  return (
    <>
      {/* Card */}
      <button
        onClick={open}
        className="flex h-96 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-500 hover:bg-blue-50"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow">
          <span className="text-2xl text-blue-600">+</span>
        </div>

        <p className="font-semibold text-gray-600">
          Add New Study Note
        </p>
      </button>

      {/* Dialog */}
      <dialog
        ref={dialogRef}
        className="rounded-xl p-0 backdrop:bg-black/40"
      >
        <div className="w-[500px] p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Add Study Note
          </h2>

          <form>
            <input
              type="text"
              placeholder="Title"
              className="mb-4 w-full rounded border p-3"
            />

            <textarea
              rows="8"
              placeholder="Write your note..."
              className="mb-4 w-full rounded border p-3"
            />

            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="mb-6 w-full rounded border p-3"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={close}
                className="rounded border px-4 py-2"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white"
              >
                Save Note
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default NotePopup;
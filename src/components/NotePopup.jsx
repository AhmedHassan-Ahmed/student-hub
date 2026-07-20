
function NotePopup({handlesubmit, dialogRef,open,close}) {

  return (
    <>
      <button
        onClick={open}
        className="focus:outline-0 flex h-64 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-500 hover:bg-blue-50 sm:h-72 lg:h-96"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow">
          <span className="text-2xl text-blue-600">+</span>
        </div>

        <p className="text-center text-base font-semibold text-gray-600 sm:text-lg">
          Add New Study Note
        </p>
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto w-[95%] max-w-lg rounded-xl p-0 shadow-2xl backdrop:bg-black/50"
      >
        <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-6">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">Add Study Note</h2>

          <form onSubmit={handlesubmit}>
            <div className="relative mb-5">
              <input
                type="text"
                id="title"
                placeholder=" "
                className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 focus:border-blue-600 focus:outline-0"
              />

              <label
                htmlFor="title"
                className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-blue-600
          peer-not-placeholder-shown:-top-2
          peer-not-placeholder-shown:text-xs"
              >
                Title
              </label>
            </div>

            <div className="relative mb-5">
              <textarea
                id="content"
                rows="7"
                placeholder=" "
                className="peer w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 focus:border-blue-600 focus:outline-0"
              />

              <label
                htmlFor="content"
                className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-blue-600
          peer-not-placeholder-shown:-top-2
          peer-not-placeholder-shown:text-xs"
              >
                Note Content
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                id="tags"
                placeholder=" "
                className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 focus:border-blue-600 focus:outline-0"
              />

              <label
                htmlFor="tags"
                className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-blue-600
          peer-not-placeholder-shown:-top-2
          peer-not-placeholder-shown:text-xs"
              >
                Tags (comma separated)
              </label>
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={close}
                className="w-full rounded-lg border px-4 py-2 hover:bg-gray-100 sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 sm:w-auto"
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

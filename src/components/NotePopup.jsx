import { AnimatePresence, motion } from "framer-motion";

function NotePopup({ handlesubmit, isOpen, open, close }) {
  
  return (
    <>
      <button
        onClick={open}
        className="focus:outline-0 flex h-64 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-500 hover:bg-blue-50 sm:h-96 lg:h-96 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-blue-950"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow dark:bg-gray-900">
          <span className="text-2xl text-blue-600">+</span>
        </div>

        <p className="text-center text-base font-semibold text-gray-600 sm:text-lg dark:text-gray-300">
          Add New Study Note
        </p>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="w-full max-w-lg rounded-xl bg-white shadow-2xl dark:bg-gray-900 dark:text-gray-100"
            >
              <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-6">
                <h2 className="mb-6 text-xl font-bold sm:text-2xl">
                  Add Study Note
                </h2>

                <form onSubmit={handlesubmit}>
                  <div className="relative mb-5">
                    <input
                    required
                      type="text"
                      id="title"
                      name="title"
                      placeholder=" "
                      className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 focus:border-blue-600 focus:outline-0 dark:border-gray-700 dark:text-gray-100"
                    />

                    <label
                      htmlFor="title"
                      className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all dark:bg-gray-900 dark:text-gray-400
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
                    required
                      id="content"
                      name="content"
                      rows="7"
                      placeholder=" "
                      className="peer w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 focus:border-blue-600 focus:outline-0 dark:border-gray-700 dark:text-gray-100"
                    />

                    <label
                      htmlFor="content"
                      className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all dark:bg-gray-900 dark:text-gray-400
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
                      name="tags"
                      placeholder=" "
                      className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 focus:border-blue-600 focus:outline-0 dark:border-gray-700 dark:text-gray-100"
                    />

                    <label
                      htmlFor="tags"
                      className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all dark:bg-gray-900 dark:text-gray-400
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
                      className="w-full rounded-lg border px-4 py-2 hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:hover:bg-gray-800"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NotePopup;

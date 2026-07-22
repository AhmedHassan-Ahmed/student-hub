import Button from "../components/Button";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const TaskPopup = ({ open, close, isOpen, handleSubmit }) => {
  return (
    <>
      <Button onclick={open}>
        <Plus className="h-4 w-4" />
        Create Task
      </Button>
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
              className="w-full max-w-lg rounded-xl bg-white shadow-2xl"
            >
              <form
                onSubmit={handleSubmit}
                className="max-h-[90vh] overflow-y-auto p-5 sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Create Task
                  </h2>

                  <button
                    type="button"
                    onClick={close}
                    className="text-2xl text-gray-500 transition hover:text-black"
                  >
                    x
                  </button>
                </div>

                <div className="relative mb-5">
                  <input
                    required
                    id="title"
                    name="title"
                    type="text"
                    placeholder=" "
                    className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 transition focus:border-blue-600 focus:outline-none"
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
                    Task Title
                  </label>
                </div>

                <div className="relative mb-5">
                  <textarea
                    required
                    id="description"
                    name="description"
                    rows="5"
                    placeholder=" "
                    className="peer w-full resize-none rounded-lg border border-gray-300 bg-transparent px-4 py-3 transition focus:border-blue-600 focus:outline-none"
                  />

                  <label
                    htmlFor="description"
                    className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:-top-2
              peer-focus:text-xs
              peer-focus:text-blue-600
              peer-not-placeholder-shown:-top-2
              peer-not-placeholder-shown:text-xs"
                  >
                    Description
                  </label>
                </div>

                <div className="relative mb-5">
                  <input
                    required
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    className="w-full rounded-lg border border-gray-300 px-4 pt-6 pb-2 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
                  />

                  <label
                    htmlFor="dueDate"
                    className="absolute left-3 top-2 bg-white px-1 text-xs font-semibold text-blue-600"
                  >
                    Due Date
                  </label>
                </div>

                <div className="relative mb-6">
                  <select
                    required
                    id="priority"
                    name="priority"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 pt-6 pb-2 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
                  >
                    <option value="" disabled hidden></option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>

                  <label
                    htmlFor="priority"
                    className="absolute left-3 top-2 bg-white px-1 text-xs font-semibold text-blue-600"
                  >
                    Priority
                  </label>
                </div>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={close}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800 sm:w-auto"
                  >
                    Save Task
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TaskPopup;

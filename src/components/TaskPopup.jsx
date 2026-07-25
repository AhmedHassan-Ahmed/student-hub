import Button from "../components/Button";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TaskPopup = ({ open, close, isOpen, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validateSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title")?.trim();
    const description = formData.get("description")?.trim();
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");

    const newErrors = {};

    if (!title) {
      newErrors.title = "Task title is required";
    } else if (title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!description) {
      newErrors.description = "Description is required";
    } else if (description.length < 5) {
      newErrors.description = "Description must be at least 5 characters";
    }

    if (!dueDate) {
      newErrors.dueDate = "Due date is required";
    }

    if (!priority) {
      newErrors.priority = "Priority is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    handleSubmit(e);
  };

  const handleClose = () => {
    setErrors({});
    close();
  };

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
            onClick={handleClose}
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
              <form
                onSubmit={validateSubmit}
                className="max-h-[90vh] overflow-y-auto p-5 sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Create Task
                  </h2>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-2xl text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    x
                  </button>
                </div>

                <div className="mb-5">
                  <div className="relative">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder=" "
                      className={`peer w-full rounded-lg border bg-transparent px-4 py-3 transition focus:outline-none dark:text-gray-100 ${
                        errors.title
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-600 dark:border-gray-700"
                      }`}
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
                      Task Title
                    </label>
                  </div>

                  {errors.title && (
                    <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                  )}
                </div>

                <div className="mb-5">
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      rows="5"
                      placeholder=" "
                      className={`peer w-full resize-none rounded-lg border bg-transparent px-4 py-3 transition focus:outline-none dark:text-gray-100 ${
                        errors.description
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-600 dark:border-gray-700"
                      }`}
                    />

                    <label
                      htmlFor="description"
                      className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all dark:bg-gray-900 dark:text-gray-400
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

                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <div className="relative">
                    <input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      className={`w-full rounded-lg border px-4 pt-6 pb-2 transition focus:outline-none focus:ring-4 focus:ring-blue-600/10 dark:bg-gray-900 dark:text-gray-100 ${
                        errors.dueDate
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-600 dark:border-gray-700"
                      }`}
                    />

                    <label
                      htmlFor="dueDate"
                      className="absolute left-3 top-2 bg-white px-1 text-xs font-semibold text-blue-600 dark:bg-gray-900 dark:text-blue-400"
                    >
                      Due Date
                    </label>
                  </div>

                  {errors.dueDate && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.dueDate}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <select
                      id="priority"
                      name="priority"
                      defaultValue=""
                      className={`w-full rounded-lg border px-4 pt-6 pb-2 transition focus:outline-none focus:ring-4 focus:ring-blue-600/10 dark:bg-gray-900 dark:text-gray-100 ${
                        errors.priority
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-600 dark:border-gray-700"
                      }`}
                    >
                      <option value="" disabled hidden></option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>

                    <label
                      htmlFor="priority"
                      className="absolute left-3 top-2 bg-white px-1 text-xs font-semibold text-blue-600 dark:bg-gray-900 dark:text-blue-400"
                    >
                      Priority
                    </label>
                  </div>

                  {errors.priority && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.priority}
                    </p>
                  )}
                </div>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:hover:bg-gray-800"
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

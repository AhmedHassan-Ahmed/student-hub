import Button from "../components/Button";
import { Plus } from "lucide-react";

const TaskPopup = ({open,close ,dialogRef, handleSubmit}) => {




  return (
    <>
      <Button onclick={open}>
        <Plus className="w-4 h-4" />
        Create Task
      </Button>

      <dialog
        ref={dialogRef}
        className="m-auto w-full max-w-lg rounded-lg p-0 shadow-xl backdrop:bg-black/50 "
      >
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold ">Create Task</h2>

            <button
              type="button"
              onClick={close}
              className="text-gray-500 hover:text-black text-xl"
            >
              x
            </button>
          </div>

          <div>
            <div className="relative">
              <input
              required
                id="title"
                name="title"
                type="text"
                placeholder=" "
                className="peer w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
               focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 "
              />

              <label
                htmlFor="title"
                className="absolute left-3 top-5 text-gray-500 transition-all duration-200
               peer-placeholder-shown:top-5
               peer-placeholder-shown:text-sm
               peer-focus:top-2
               peer-focus:text-[11px]
               peer-focus:font-semibold
               peer-focus:text-blue-600
               peer-[:not(:placeholder-shown)]:top-2
               peer-[:not(:placeholder-shown)]:text-[11px]
               peer-[:not(:placeholder-shown)]:font-semibold
               peer-[:not(:placeholder-shown)]:text-blue-600"
              >
                Task Title
              </label>
            </div>
          </div>

          <div>
            <div className="relative">
              <textarea
              required
                id="description"
                name="description"
                rows="4"
                placeholder=" "
                className="peer w-full resize-y rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
      focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              />

              <label
                htmlFor="description"
                className="absolute left-3 top-5 bg-white px-1 text-gray-500 transition-all duration-200
      peer-placeholder-shown:top-5
      peer-placeholder-shown:text-sm
      peer-focus:top-2
      peer-focus:text-[11px]
      peer-focus:font-semibold
      peer-focus:text-blue-600
      peer-[:not(:placeholder-shown)]:top-2
      peer-[:not(:placeholder-shown)]:text-[11px]
      peer-[:not(:placeholder-shown)]:font-semibold
      peer-[:not(:placeholder-shown)]:text-blue-600"
              >
                Description
              </label>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
              required
                id="dueDate"
                name="dueDate"
                type="date"
                placeholder=" "
                className="peer w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
      focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              />

              <label
                htmlFor="dueDate"
                className="absolute left-3 top-2 bg-white px-1 text-[11px] font-semibold text-blue-600"
              >
                Due Date
              </label>
            </div>
          </div>

          <div>
            <div className="relative">
              <select
              required
                id="priority"
                name="priority"
                defaultValue=""
                className="peer w-full rounded-md border border-gray-300 px-3 pt-6 pb-2 outline-none transition
      focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              >
                <option value="" disabled hidden></option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <label
                htmlFor="priority"
                className="absolute left-3 top-2 bg-white px-1 text-[11px] font-semibold text-blue-600"
              >
                Priority
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={close}
              className="border border-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Save Task
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TaskPopup;

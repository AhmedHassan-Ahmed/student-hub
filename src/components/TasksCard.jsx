import { FaEllipsisV, FaFilter, FaTrash } from "react-icons/fa";
import { useState } from "react";

const badgeColors = {
  Urgent: "bg-red-100 text-red-600",
  High: "bg-blue-100 text-blue-600",
  Medium: "bg-gray-100 text-gray-600",
  Low: "bg-gray-100 text-gray-500",
};

const statusDot = {
  "In Progress": "bg-blue-600",
  Pending: "bg-gray-400",
  Completed: "bg-gray-400",
};

export default function TaskTable({ tasksupdate, handleDelete }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [dayFilter, setDayFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const tasks = tasksupdate;
  const [, settasks] = useState(tasks);
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const completionRate =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const handleclick = (id) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === id);
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updatedTasks[index].status = updatedTasks[index].completed
      ? "Completed"
      : "Pending";
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
    settasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (statusFilter !== "All" && task.status !== statusFilter) {
      return false;
    }

    if (priorityFilter !== "All" && task.priority !== priorityFilter) {
      return false;
    }

    if (dayFilter !== "All") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      const diffDays = (today - dueDate) / (1000 * 60 * 60 * 24);

      if (diffDays < 0 || diffDays > Number(dayFilter)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8">
      <div className="grid gap-5 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-4 shadow-sm sm:p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Status
              </p>

              <select
                className="focus:outline-0 w-full rounded border p-3"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Priority
              </p>

              <select
                className="focus:outline-0 w-full rounded border p-3"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="All">Any Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Due Date
              </p>

              <select
                className="focus:outline-0 w-full rounded border p-3"
                value={dayFilter}
                onChange={(e) => setDayFilter(e.target.value)}
              >
                <option value="All">All Dates</option>
                <option value="1">1 Day</option>
                <option value="3">3 Days</option>
                <option value="7">7 Days</option>
                <option value="30">30 Days</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="flex h-12 w-full items-center justify-center rounded bg-black text-white hover:bg-gray-800">
                <FaFilter />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 p-5 text-white">
          <div className="flex justify-between text-xs uppercase tracking-wider text-gray-400">
            <span>Completion Rate</span>
            <span>{completionRate}%</span>
          </div>

          <div className="mt-4 h-2 rounded-full bg-slate-700">
            <div
              className="h-2 rounded-full bg-blue-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>

          <p className="mt-6 italic text-slate-400">
            "Precision is the foundation of scholarship."
          </p>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="min-w-[850px] w-full">
          <thead className="border-b bg-gray-50 text-left text-xs uppercase tracking-widest text-gray-500">
            <tr>
              <th className="px-6 py-4">Title & Description</th>
              <th className="px-4 py-4">Priority</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Due Date</th>
              <th className="px-4 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  No tasks found.
                </td>
              </tr>
            ) : (
              filteredTasks.map((task, index) => (
                <tr
                  key={index}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="px-6 py-5">
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        readOnly
                        checked={task.completed}
                        className="mt-1 h-4 w-4"
                        onClick={() => handleclick(task.id)}
                      />

                      <div>
                        <h3
                          className={`text-sm font-semibold sm:text-base ${
                            task.completed && "line-through text-gray-400"
                          }`}
                        >
                          {task.title}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                          {task.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4">
                    <span
                      className={`rounded border px-3 py-1 text-xs font-semibold uppercase ${badgeColors[task.priority]}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="px-4">
                    <div className="flex items-center gap-2 text-sm font-medium uppercase">
                      <span
                        className={`h-2 w-2 rounded-full ${statusDot[task.status]}`}
                      ></span>

                      {task.status}
                    </div>
                  </td>

                  <td className="px-4 text-gray-600">{task.dueDate}</td>

                  <td className="px-4 text-center">
                    <div className="relative inline-block">
                      <button
                        className="text-gray-500 transition hover:text-black"
                        onClick={() =>
                          setOpenMenu(openMenu === task.id ? null : task.id)
                        }
                      >
                        <FaEllipsisV />
                      </button>

                      {openMenu === task.id && (
                        <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border bg-white shadow-lg">
                          <button
                            onClick={() => {
                              handleDelete(task.id);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-600 hover:bg-red-50"
                          >
                            <FaTrash />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

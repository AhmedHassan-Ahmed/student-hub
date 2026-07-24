import { FaEllipsisV, FaFilter, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import getDateLabel from "../functions/getDateLabel";
import { Fragment } from "react";

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

export default function TaskTable({ deletingId, tasksupdate, deleteTask }) {
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

  const sortedTasks = [...filteredTasks].sort(
    (a, b) => new Date(b.dueDate) - new Date(a.dueDate),
  );

  return (
    <div
      className="space-y-8 p-4 sm:p-6 lg:p-8 "
      onClick={() => setOpenMenu(null)}
    >
      <div className="grid gap-5 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-4 shadow-sm sm:p-6 lg:col-span-3 dark:border-gray-700 dark:bg-gray-900">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Status
              </p>

              <select
                className="focus:outline-0 w-full rounded border p-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                className="focus:outline-0 w-full rounded border p-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                className="focus:outline-0 w-full rounded border p-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
      <div className="overflow-x-auto rounded-xl border-0  bg-white shadow-sm dark:bg-gray-900">
        <div className="pb-8 hidden md:block overflow-x-auto rounded-2xl border-0  border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <table className="min-w-[850px] w-full">
            <thead className="border-b border-gray-200 bg-gray-50 text-left text-xs uppercase tracking-widest text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
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
                sortedTasks.map((task, index) => {
                  const previousTask = sortedTasks[index - 1];

                  const showDate =
                    index === 0 || previousTask.dueDate !== task.dueDate;

                  return (
                    <Fragment key={task.id}>
                      {showDate && (
                        <tr key={`date-${task.dueDate}`}>
                          <td colSpan={5} className="bg-gray-50 px-6 py-3 dark:bg-gray-800">
                            <h2 className="font-semibold text-gray-700 dark:text-gray-200">
                              {getDateLabel(task.dueDate)}
                            </h2>
                          </td>
                        </tr>
                      )}

                      <motion.tr
                        key={task.id}
                        layout
                        initial={{ opacity: 1, x: 0 }}
                        animate={
                          deletingId === task.id
                            ? { opacity: 0, x: -200 }
                            : { opacity: 1, x: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="border-b border-gray-100 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                      >
                        <td className="px-6 py-5">
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              readOnly
                              checked={task.completed}
                              onClick={() => handleclick(task.id)}
                              className="mt-1 h-4 w-4"
                            />

                            <div>
                              <h3
                                className={`font-semibold ${task.completed
                                    ? "line-through text-gray-400"
                                    : "text-gray-900 dark:text-gray-100"
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
                            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${badgeColors[task.priority]}`}
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

                        <td className="px-4 text-gray-600 dark:text-gray-300">{task.dueDate}</td>

                        <td className="px-4 text-center">
                          <div className="relative inline-block">
                            <button
                              className="rounded p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                              onClick={(e) => {
                                setOpenMenu(
                                  openMenu === task.id ? null : task.id,
                                );
                                e.stopPropagation();
                              }}
                            >
                              <FaEllipsisV />
                            </button>

                            {openMenu === task.id && (
                              <div className="absolute right-0 z-10 mt-2 w-36 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
                                <button
                                  onClick={() => {
                                    deleteTask(task.id);
                                    setOpenMenu(null);
                                  }}
                                  className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
                                >
                                  <FaTrash />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    </Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="space-y-4 md:hidden">
          {filteredTasks.length === 0 ? (
            <div className="rounded-2xl border-0  border-gray-200 bg-white p-6 text-center text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
              No tasks found.
            </div>
          ) : (
            sortedTasks.map((task, index) => {
              const previousTask = sortedTasks[index - 1];

              const showDate =
                index === 0 || previousTask.dueDate !== task.dueDate;

              return (
                <div key={task.id}>
                  {showDate && (
                    <h2 className="mb-3 mt-6 border-b pb-2 text-lg font-bold text-gray-700 dark:border-gray-700 dark:text-gray-200">
                      {getDateLabel(task.dueDate)}
                    </h2>
                  )}

                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 1, x: 0 }}
                    animate={
                      deletingId === task.id
                        ? {
                          opacity: 0,
                          x: -200,
                          scale: 0.95,
                        }
                        : {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }
                    }
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          readOnly
                          checked={task.completed}
                          onClick={() => handleclick(task.id)}
                          className="mt-1 h-4 w-4"
                        />

                        <div>
                          <h3
                            className={`font-semibold ${task.completed
                                ? "line-through text-gray-400"
                                : "text-gray-900 dark:text-gray-100"
                              }`}
                          >
                            {task.title}
                          </h3>

                          <p className="mt-2 text-sm text-gray-500">
                            {task.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <button
                          className="rounded p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                          onClick={(e) => {
                            setOpenMenu(openMenu === task.id ? null : task.id);
                            e.stopPropagation();
                          }}
                        >
                          <FaEllipsisV />
                        </button>

                        {openMenu === task.id && (
                          <div className="absolute right-0 z-10 mt-2 w-36 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
                            <button
                              onClick={() => {
                                deleteTask(task.id);
                                setOpenMenu(null);
                              }}
                              className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
                            >
                              <FaTrash />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${badgeColors[task.priority]}`}
                      >
                        {task.priority}
                      </span>

                      <span className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                        <span
                          className={`h-2 w-2 rounded-full ${statusDot[task.status]}`}
                        ></span>
                        {task.status}
                      </span>

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        📅 {task.dueDate}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

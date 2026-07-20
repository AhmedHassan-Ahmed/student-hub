import Button from "../components/Button";
import { Download } from "lucide-react";
import TaskPopup from "../components/TaskPopup";
import TasksCard from "./TasksCard";
import { useRef } from "react";
import exportCSV from "../functions/exportCSV";
import { useState } from "react";
export default function Tasks() {
  const dialogRef = useRef();
  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  const [updatetasks, settasks] = useState(tasks);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    settasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const task = [
      {
        id: crypto.randomUUID(),
        title: formData.get("title"),
        description: formData.get("description"),
        dueDate: formData.get("dueDate"),
        priority: formData.get("priority"),
        status: "Pending",
        completed: false,
      },
    ];

    const updated = tasks;
    updated.push(...task);
    const finaltasks = JSON.stringify(updated);
    localStorage.setItem("Tasks", finaltasks);
    settasks(updated);

    close();
    e.target.reset();
  };

  const open = () => dialogRef.current.showModal();
  const close = () => dialogRef.current.close();

  return (
    <>
      <div className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Dashboard
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="#" className="text-blue-600 hover:text-blue-700">
            My Tasks
          </a>
        </div>

        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-5xl font-serif font-bold text-gray-900">
              Academic Task Management
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage your research milestones and administrative obligations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onclick={exportCSV} variant="outline">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>

            <TaskPopup
              open={open}
              close={close}
              handleSubmit={handleSubmit}
              dialogRef={dialogRef}
            />
          </div>
        </div>
      </div>
      
      <TasksCard handleDelete={handleDelete} tasksupdate={updatetasks || []} />
    </>
  );
}

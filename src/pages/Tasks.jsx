import Button from "../components/Button";
import { Download } from "lucide-react";
import TaskPopup from "../components/TaskPopup";
import TasksCard from "../components/TasksCard";
import { useRef } from "react";
import exportCSV from "../functions/exportCSV";
import { useState } from "react";
import PageHeader from "../components/PageMainHeader";
import PageMainHeader from "../components/PageMainHeader";
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
      <PageMainHeader
        title="Academic Task Management"
        description="Manage your research milestones and administrative obligations."
        currentPage="My Tasks"
      >
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
      </PageMainHeader>

      <TasksCard handleDelete={handleDelete} tasksupdate={updatetasks || []} />
    </>
  );
}

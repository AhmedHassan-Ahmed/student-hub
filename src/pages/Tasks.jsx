import Button from "../components/Button";
import { Download } from "lucide-react";
import TaskPopup from "../components/TaskPopup";
import TasksCard from "../components/TasksCard";
import { useState } from "react";
import exportCSV from "../functions/exportCSV";
import { v4 as uuidv4 } from "uuid";
import PageMainHeader from "../components/PageMainHeader";
import UploadButton from "../components/UploadButton";
import PagesFooter from "../components/PagesFooter";

export default function Tasks() {
  const [deletingId, setDeletingId] = useState(null);

  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  const [updatetasks, settasks] = useState(tasks);

  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const deleteTask = (id) => {
    setDeletingId(id);

    setTimeout(() => {
      handleDelete(id);
      setDeletingId(null);
    }, 300);
  };

  const handleDelete = (id) => {
    const updatedTasks = updatetasks.filter((task) => task.id !== id);

    settasks(updatedTasks);

    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const task = [
      {
        id: uuidv4(),
        title: formData.get("title"),
        description: formData.get("description"),
        dueDate: formData.get("dueDate"),
        priority: formData.get("priority"),
        status: "Pending",
        completed: false,
      },
    ];

    const updated = [...updatetasks, ...task];

    settasks(updated);

    localStorage.setItem("Tasks", JSON.stringify(updated));

    close();
    e.target.reset();
  };

  const handleUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const csv = event.target.result;

      const rows = csv.trim().split("\n");
      const clean = (value) => value.trim().replace(/^"|"$/g, "");

      const tasks = rows.slice(1).map((row) => {
        const [title, description, dueDate, priority, status, completed] = row
          .split(",")
          .map(clean);

        return {
          id: uuidv4(),
          title,
          description,
          priority,
          dueDate,
          status,
          completed: completed === "true",
        };
      });

      const updated = [...updatetasks, ...tasks];

      settasks(updated);
      localStorage.setItem("Tasks", JSON.stringify(updated));
    };

    reader.readAsText(file);
  };

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

        <UploadButton onUpload={handleUpload} />

        <TaskPopup
          isOpen={isOpen}
          open={open}
          close={close}
          handleSubmit={handleSubmit}
        />
      </PageMainHeader>

      <TasksCard
        deleteTask={deleteTask}
        deletingId={deletingId}
        tasksupdate={updatetasks}
      />

      <PagesFooter />
    </>
  );
}

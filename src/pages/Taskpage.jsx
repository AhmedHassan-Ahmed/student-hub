// not needed for now

// import TasksCard from "./TasksCard";
// import { useState } from "react";
// export default function Taskpage() {
//   const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
//   const [updatetasks, settasks] = useState(tasks);

//   const handleDelete = (id) => {
//     const updatedTasks = tasks.filter((task) => task.id !== id);

//     settasks(updatedTasks);
//     localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
//   };

//   return (
//     <TasksCard handleDelete={handleDelete} tasksupdate={updatetasks || []} />
//   );
// }

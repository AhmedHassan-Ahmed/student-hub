const exportCSV = () => {
  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

  if (tasks.length === 0) {
    alert("No tasks to export.");
    return;
  }

  const headers = [
    "Title",
    "Description",
    "Due Date",
    "Priority",
    "Status",
    "Completed",
  ];

  const rows = tasks.map((task) => [
    task.title,
    task.description,
    task.dueDate,
    task.priority,
    task.status,
    task.completed ? true : false,
  ]);
  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","),
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "tasks.csv";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default exportCSV;

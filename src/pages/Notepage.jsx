import NotesCard from "../components/NotesCard";
import PageMainHeader from "../components/PageMainHeader";
import NotePopup from "../components/NotePopup";
import { useState, useRef } from "react";
const Notepage = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("Notes")) || [],
  );
  const dialogRef = useRef();
  const open = () => dialogRef.current.showModal();
  const close = () => dialogRef.current.close();

  const handlesubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const note = {
      id: crypto.randomUUID(),
      title: form.title.value,
      content: form.content.value,
      tags: form.tags.value
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      createdAt: new Date().toLocaleDateString(),
    };
    const updatedNotes = [...notes, note];

    setNotes(updatedNotes);

    localStorage.setItem("Notes", JSON.stringify(updatedNotes));

    form.reset();
    close();
  };

  return (
    <>
      {" "}
      <PageMainHeader
        title="Academic Notebook"
        description="Manage and organize your research journals and study materials."
        currentPage="My Notes"
      ></PageMainHeader>
      <NotesCard notes={notes}>
        <NotePopup
          dialogRef={dialogRef}
          open={open}
          close={close}
          handlesubmit={handlesubmit}
        />
      </NotesCard>
    </>
  );
};

export default Notepage;

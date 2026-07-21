import NotesCard from "../components/NotesCard";
import PageMainHeader from "../components/PageMainHeader";
import NotePopup from "../components/NotePopup";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
const Notepage = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const viewDialogRef = useRef(null);
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
      id: uuidv4(),
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

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);

    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  };

  const handleView = (note) => {
    setSelectedNote(note);

    viewDialogRef.current.showModal();
  };

  const closeView = () => {
    viewDialogRef.current.close();
  };

  return (
    <>
      <PageMainHeader
        title="Academic Notebook"
        description="Manage and organize your research journals and study materials."
        currentPage="My Notes"
      ></PageMainHeader>
      <NotesCard
        notes={notes}
        handleView={handleView}
        handleDelete={handleDelete}
      >
        <NotePopup
          dialogRef={dialogRef}
          open={open}
          close={close}
          handlesubmit={handlesubmit}
        />
      </NotesCard>

      <dialog
        ref={viewDialogRef}
        className="m-auto w-[95%] max-w-xl rounded-xl p-0 shadow-2xl backdrop:bg-black/50"
      >
        {selectedNote && (
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedNote.title}</h2>

              <button
                onClick={closeView}
                className="text-2xl text-gray-500 hover:text-black"
              >
                x
              </button>
            </div>

            <p className="whitespace-pre-wrap leading-7 text-gray-700">
              {selectedNote.content}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedNote.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Created: {selectedNote.createdAt}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
};

export default Notepage;

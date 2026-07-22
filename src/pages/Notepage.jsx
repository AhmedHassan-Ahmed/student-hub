import NotesCard from "../components/NotesCard";
import PageMainHeader from "../components/PageMainHeader";
import NotePopup from "../components/NotePopup";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Notepage = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("Notes")) || [],
  );
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  const [deletingId, setDeletingId] = useState(null);

  const deleteNote = (id) => {
    setDeletingId(id);

    setTimeout(() => {
      handleDelete(id);
      setDeletingId(null);
    }, 300);
  };

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
    closePopup();
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);

    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  };

  const handleView = (note) => {
    setSelectedNote(note);
    setViewOpen(true);
  };

  const closeView = () => {
    setViewOpen(false);
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
        handleDelete={deleteNote}
        deletingId={deletingId}
      >
        <NotePopup
          isOpen={open}
          open={openPopup}
          close={closePopup}
          handlesubmit={handlesubmit}
        />
      </NotesCard>
      <AnimatePresence>
        {viewOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeView}
          >
            <motion.div
              className="w-full max-w-xl rounded-xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Notepage;

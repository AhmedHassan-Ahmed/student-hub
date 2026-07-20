import NotesCard from "../components/NotesCard"
import PageMainHeader from "../components/PageMainHeader"

const Notepage = () => {
  return (
    <>  <PageMainHeader
      title="Academic Notebook"
        description="Manage and organize your research journals and study materials."
        currentPage="My Notes"
  ></PageMainHeader>
  <NotesCard></NotesCard>
</>

  )
}

export default Notepage
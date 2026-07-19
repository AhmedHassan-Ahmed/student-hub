import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Resource from "./pages/Resource";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Resource />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;

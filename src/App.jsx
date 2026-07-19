import { Routes, Route } from "react-router-dom";
import Resource from "./pages/Resource";
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";
import Layout  from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/resource" element={<Resource />} />
        <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
      </Route>

    
    </Routes>
  );
}

export default App;

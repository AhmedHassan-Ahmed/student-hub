import { Routes, Route } from "react-router-dom";
import Resource from "../pages/Resource";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Tasks";
import Layout from "../layout/layout";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Notepage from "../pages/Notepage";
import Profile from "../pages/Profile";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/resource" element={<Resource />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

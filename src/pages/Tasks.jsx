import Button from "../components/Button";
import { Download } from "lucide-react";
import TaskPopup from "../components/TaskPopup";
export default function Tasks() {

  return (
    <div class="bg-white border-b border-gray-200 px-6 py-5">
      <div class="flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500">
        <a href="#" class="hover:text-gray-700">
          Dashboard
        </a>
        <span class="mx-2 text-gray-400">/</span>
        <a href="#" class="text-blue-600 hover:text-blue-700">
          My Tasks
        </a>
      </div>

      <div class="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-5xl font-serif font-bold text-gray-900">
            Academic Task Management
          </h1>
          <p class="mt-2 text-lg text-gray-600">
            Manage your research milestones and administrative obligations.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>

         

          <TaskPopup />
        </div>
      </div>
    </div>
  );
}

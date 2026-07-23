import { Menu, CalendarDays, ClipboardList, CheckCircle2, Clock3, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardSidebar from "../components/Sidebar";
import quotes from "../data/quotes";
function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = JSON .parse(localStorage.getItem("user")) || {};
    if(savedUser) {
      setUser(savedUser);
    }
  }, []);
  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;
  const progress = 
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);
      const recentTasks = [...tasks].reverse().slice(0, 5);
      const upcomingTasks = [...tasks]
        .filter((task) => !task.completed && task.dueDate)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 3);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
  return (
    <div className="flex min-h-screen bg-[#0A0F1F] text-white">
      <DashboardSidebar 
      isOpen={isOpen}
      setIsOpen={setIsOpen}/>
      <main className="flex-1 p-8">
        <button
        onClick={() => setIsOpen(true)}
        className="md:hidden mb-6">
          <Menu size={32} />
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Welcome Back, {user?.name || "Student"} 👋
            </h2>
            <div className="flex items-center gap-2 mt-2 text-gray-400">
              <CalendarDays size={18} />
              <span>{today}</span>
            </div>
            <p className="mt-2 text-gray-400">
              Let's finish your tasks today.
            </p>
          </div>
          <img
          src={user?.image || "https://placehold.co/60x60"}
          alt="profile"
          className="hidden md:block w-14 h-14 rounded-full object-cover border-2 border-blue-500"></img>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-[#18223B] rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-400">Total Tasks</h3>
              <ClipboardList className="text-blue-400" />
            </div>
            <p className="text-3xl font-bold mt-4">{totalTasks}</p>
          </div>
          <div className="bg-[#18223B] rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-400">Completed</h3>
              <CheckCircle2 className="text-green-400" />
            </div>
            <p className="text-3xl font-bold mt-4 text-green-400">
              {completedTasks}
            </p>
          </div>
          <div className="bg-[#18223B] rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-400">Pending</h3>
              <Clock3 className="text-yellow-400" />
            </div>
            <p className="text-3xl font-bold mt-4 text-yellow-400">
              {pendingTasks}
            </p>
          </div>
          <div className="bg-[#18223B] rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-400">Progress</h3>
              <TrendingUp className="text-cyan-400" />
            </div>
            <p className="text-3xl font-bold mt-4 text-cyan-400">
              {progress}%
            </p>
            <div className="w-full h-2 bg-gray-700 rounded-full mt-5">
              <div
                className="h-2 rounded-full bg-cyan-400 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#18223B] rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Recent Tasks
            </h2>
            {recentTasks.length === 0 ? (
              <p className="text-gray-400">
                No tasks yet.
              </p>
            ) : (
              <div className="space-y-4">
                {recentTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between bg-[#0F172A] rounded-lg p-4"
                  >
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-gray-400">
                        {task.description}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        task.completed
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {task.completed ? "Completed" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-[#18223B] rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Upcoming Deadlines
            </h2>
            {upcomingTasks.length === 0 ? (
              <p className="text-gray-400">
                No upcoming deadlines.
              </p>
            ) : (
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex justify-between items-center border-b border-slate-700 pb-3"
                  >
                    <div>
                      <h3 className="font-semibold">
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {task.dueDate}
                      </p>
                    </div>
                    <CalendarDays className="w-5 h-5 text-red-400"/>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 bg-[#18223B] rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-4">
            💡 Quote of the Day
          </h2>
          <p className="italic text-gray-300">
            "{randomQuote}"
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
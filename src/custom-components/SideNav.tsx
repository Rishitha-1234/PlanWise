import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Menu,
  LayoutDashboard,
  FolderKanban,
  Plus,
  ListTodo,
  Bell,
  Calendar,
  ClipboardList,
  Zap,
  LogOut,
  PlusCircle,
  FolderPlus,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <TooltipProvider>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="text-white p-2 focus:outline-none">
          <Menu size={24} />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-[#0d0d0d]/80 backdrop-blur-md text-white w-72 px-6 py-8 flex flex-col justify-between shadow-2xl border-r border-white/10 rounded-tr-xl rounded-br-xl"
        >
          {/* Top Menu */}
          <div className="flex flex-col gap-4 text-base font-medium">
            {/* Dashboard */}
            <Link
              to="/dashboard"
              onClick={handleClose}
              className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] transition shadow-sm hover:shadow-md"
            >
              <LayoutDashboard size={20} className="group-hover:text-white text-gray-300 transition" />
              <span className="group-hover:text-white">Dashboard</span>
            </Link>

            {/* Projects */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg transition hover:bg-[#1f1f1f]">
              <Link
                to="/"
                onClick={handleClose}
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <FolderKanban size={20} />
                <span>Projects</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-gradient-to-tr from-green-400 to-blue-500 p-1.5 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition duration-200">
                    <Plus size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-sm rounded-md shadow-md px-3 py-2">
                  Add Project
                </TooltipContent>
              </Tooltip>
            </div>

            {/* My Tasks */}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg transition hover:bg-[#1f1f1f]">
              <Link
                to="/"
                onClick={handleClose}
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <ListTodo size={20} />
                <span>My Tasks</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-gradient-to-tr from-green-400 to-blue-500 p-1.5 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition duration-200">
                    <Plus size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-sm rounded-md shadow-md px-3 py-2">
                  Add Task
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Other Links */}
            {[
              { icon: <Bell size={20} />, text: "Notifications" },
              { icon: <Calendar size={20} />, text: "Calendar" },
              { icon: <ClipboardList size={20} />, text: "To Do List" },
            ].map(({ icon, text }, i) => (
              <Link
                key={i}
                to="/"
                onClick={handleClose}
                className="group flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-[#1f1f1f]"
              >
                <span className="text-gray-300 group-hover:text-white">{icon}</span>
                <span className="group-hover:text-white">{text}</span>
              </Link>
            ))}

            {/* Quick Actions */}
            <Dialog>
            <DialogTrigger>
                <div className="flex items-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 justify-start gap-3 hover:bg-[#1f1f1f] px-3 py-2 rounded-md transition">
                    <Zap size={18} />
                    <span>Quick Actions</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>✨ Quick Actions</DialogTitle>
                <DialogDescription>
                <div className="space-y-3 mt-2">
          <button className="flex items-center gap-3 bg-gray-100 w-full px-4 py-2 rounded-lg hover:bg-indigo-100 transition">
            <PlusCircle size={18} className="text-indigo-600" />
            Create New Task
          </button>
          <button className="flex items-center gap-3 bg-gray-100 w-full px-4 py-2 rounded-lg hover:bg-purple-100 transition">
            <FolderPlus size={18} className="text-purple-600" />
            Add New Project
          </button>
          <button className="flex items-center gap-3 bg-gray-100 w-full px-4 py-2 rounded-lg hover:bg-green-100 transition">
            <Wrench size={18} className="text-green-600" />
            Open Tools
          </button>
        </div>

                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-white/10">
            <Link
              to="/"
              onClick={handleClose}
              className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] transition"
            >
              <LogOut size={20} className="group-hover:text-red-500 text-gray-300 transition" />
              <span className="group-hover:text-white">Log Out</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  );
};

export default SideNav;

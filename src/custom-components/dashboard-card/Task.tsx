import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const tasks = [
  { title: "Urgent: Finish UI Bug Fix --- high priority()", priority: "high", color: "text-pink-500" },
  { title: "Urgent: Finish UI Bug Fix --- high priority()", priority: "high", color: "text-pink-500" },
  { title: "Urgent: Finish UI Bug Fix --- medium priority()", priority: "medium", color: "text-yellow-400" },
  { title: "Urgent: Finish UI Bug Fix --- high priority()", priority: "high", color: "text-blue-500" },
];

const TaskCard = () => {
  const completed = 3;
  const total = 8;
  const progressPercent = (completed / total) * 100;

  return (
    <div className="bg-[#111111] hover:-translate-y-1 p-6 rounded-2xl shadow-lg w-auto text-white font-sans min-h-90 transition-shadow duration-300 hover:shadow-purple-800/30 hover:shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="text-white text-lg hover:scale-110 bg-purple-700 hover:bg-purple-600 transition-transform duration-200">
                +
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create New Task</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Progress Bar */}
      <div className="text-sm mb-2">{completed}/{total} completed</div>
      <div className="w-full bg-gray-700 h-2 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-cyan-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Task List */}
      <div className="space-y-4 mb-6">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <Checkbox id={`task-${index}`} />
            <label
              htmlFor={`task-${index}`}
              className={`text-sm ${task.color} transition-colors group-hover:font-semibold`}
            >
              {task.title}
            </label>
          </div>
        ))}
      </div>

      {/* View All Tasks Button */}
      <div className="group w-full">
        <button className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-500 text-white py-2 px-4 mx-auto rounded-md w-auto transition duration-200 hover:shadow-xl flex items-center justify-center gap-2">
          <span>View all Tasks</span>
          <ArrowRight
            className="w-4 h-4 transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
            style={{ minWidth: "1rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

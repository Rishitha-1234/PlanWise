import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="bg-[#111111] hover:-translate-y-1 p-6 rounded-2xl shadow-md hover:shadow-purple-800/40 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform w-auto text-white font-sans min-h-90">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Projects</h2>

        <div className="flex items-center gap-4">
          <select
            className="bg-[#1c1c1c] text-sm text-gray-300 px-1 py-2 rounded-lg border border-gray-700 cursor-pointer hover:border-gray-500 focus:outline-none focus-visible:outline-none focus:ring-0 transition-all duration-150"
            defaultValue="recent"
          >
            <option value="recent">Sort by: Recent</option>
            <option value="starred">Sort by: Starred</option>
          </select>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="text-white text-lg hover:scale-110 transition-transform duration-200 bg-purple-700 hover:bg-purple-600 rounded-md">
                  +
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create New Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="flex items-center gap-8 hover:bg-[#1a1a1a] p-2 rounded-lg transition-all duration-200 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gray-300 rounded shadow-inner"></div>
            <span className="text-white">Project -{num}</span>
          </div>
        ))}
      </div>

      <div className="group w-full">
        <button className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-500 text-white py-2 px-4 mx-auto rounded-md w-auto transition duration-200 hover:shadow-xl flex items-center justify-center gap-2">
          <span>View all Projects</span>
          <ArrowRight
            className="w-4 h-4 transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
            style={{ minWidth: "1rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

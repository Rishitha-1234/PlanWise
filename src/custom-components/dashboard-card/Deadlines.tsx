import { AlarmClock, ArrowRight } from "lucide-react";

const deadlines = [
  {
    title: "Pitch Deck Submission",
    due: "Due Tomorrow",
    color: "text-pink-400",
  },
  {
    title: "Client Meeting",
    due: "In 4 Days",
    color: "text-yellow-400",
  },
];

const DeadlinesCard = () => {
  return (
    <div className="bg-[#111111] hover:-translate-y-1 p-6 rounded-2xl shadow-lg w-auto text-white font-sans min-h-90 transition-shadow duration-300 hover:shadow-purple-800/30 hover:shadow-2xl">
      <div className="text-white text-m mb-5 flex items-center gap-3">
        <AlarmClock className="w-7 h-7 text-violet-400 animate-ring drop-shadow-[0_0_6px_#a78bfa]" />
        <span>
          <span className="text-amber-500 font-semibold text-xl">
            {deadlines.length}
          </span>{" "}
          deadlines this week!
        </span>
      </div>

      <div className="mb-6 space-y-4">
        {deadlines.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 font-medium cursor-pointer transition-all hover:translate-x-1 ${item.color}`}
          >
            <div className="w-2 h-2 bg-current rounded-full"></div>
            <span>{item.title} - {item.due}</span>
          </div>
        ))}
      </div>

      <div className="group w-full">
        <button className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-500 text-white py-2 px-4 mx-auto rounded-md w-auto transition duration-200 hover:shadow-xl flex items-center justify-center gap-2">
          <span>View all Deadlines</span>
          <ArrowRight
            className="w-4 h-4 transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
            style={{ minWidth: "1rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default DeadlinesCard;

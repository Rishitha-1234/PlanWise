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
    <div className="bg-[#111111] p-6 rounded-xl text-white font-sans w-auto min-h-90">
      <h2 className="text-xl font-semibold mb-8">Upcoming Deadlines</h2>

      <div className="text-white text-m mb-5 flex items-center gap-3">
      <AlarmClock className="w-8 h-8 text-violet-400 animate-ring drop-shadow-[0_0_6px_#a78bfa]" />


        <span>
          <span className="text-amber-600 font-medium text-xl">
            {deadlines.length}
          </span>{" "}
          deadlines this week!
        </span>
      </div>

      <div className="space-y-3 text-m">
        {deadlines.map((item, index) => (
          <div key={index} className={`${item.color} font-medium`}>
            {item.title} - {item.due}
          </div>
        ))}
      </div>

      <div className="group w-full mt-8">
            <button className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-500 text-white py-2 px-4 mx-auto rounded-md w-auto transition duration-200 hover:shadow-xl flex items-center justify-center gap-2">
                <span>View all Deadlines</span>
                <ArrowRight
                className="w-4 h-4 transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                style={{ minWidth: "1rem" }} // reserve space even when hidden
                />
            </button>
        </div>
    </div>
  );
};

export default DeadlinesCard;

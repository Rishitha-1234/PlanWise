import { ArrowRight } from "lucide-react";

const recentActivities = [
    {
      name: "Alex",
      actionBefore: "completed",
      work: "wire frame design",
      color: "bg-pink-300",
      nameHref: "#",
      workHref: "#",
    },
    {
      name: "Mark",
      actionBefore: "added a new Task in",
      work: "project-2",
      color: "bg-purple-800",
      nameHref: "#",
      workHref: "#",
    },
  ];
  
  const RecentActivityCard = () => {
    return (
      <div className="bg-[#111111] p-6 rounded-xl text-white font-sans w-auto min-h-90">
        <h2 className="text-xl font-semibold mb-8">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <a href={activity.nameHref}>
                <div className={`w-7 h-7 rounded-full ${activity.color} hover:opacity-80 transition-all`} />
              </a>
              <div className="text-m">
                <a
                  href={activity.nameHref}
                  className="text-blue-400 hover:text-blue-300 font-medium no-underline"
                >
                  {activity.name}
                </a>{" "}
                {activity.actionBefore}{" "}
                <a
                  href={activity.workHref}
                  className="text-yellow-300 hover:text-yellow-200 font-medium no-underline"
                >
                  {activity.work}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="group w-full mt-8">
            <button className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-500 text-white py-2 px-4 mx-auto rounded-md w-auto transition duration-200 hover:shadow-xl flex items-center justify-center gap-2">
                <span>View all Recent Activity</span>
                <ArrowRight
                className="w-4 h-4 transform transition-all duration-200 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                style={{ minWidth: "1rem" }} // reserve space even when hidden
                />
            </button>
        </div>
      </div>
    );
  };
  
  export default RecentActivityCard;
  
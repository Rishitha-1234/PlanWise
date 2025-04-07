import { useEffect, useState } from "react";

const TimeCard = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-center p-4 sm:p-6 md:p-8">
      <p className="text-5xl sm:text-5xl lg:text-6xl font-lobster bg-gradient-to-r from-indigo-300 via-purple-500 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(139,92,246,0.7)] transition-all duration-300">
        {formattedTime}
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-2 rounded-md inline-block shadow-inner">
        {formattedDate}
      </p>
    </div>
  );
};

export default TimeCard;

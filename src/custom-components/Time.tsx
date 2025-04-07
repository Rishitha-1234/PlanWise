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
    <div className="text-center px-4 py-6 sm:py-8 md:py-10">
      <p className="text-4xl sm:text-5xl lg:text-6xl font-lobster bg-gradient-to-r from-indigo-300 via-purple-500 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300">
        {formattedTime}
      </p>
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-3 py-2 rounded-md inline-block shadow-inner max-w-xs mx-auto">
        {formattedDate}
      </p>
    </div>
  );
};

export default TimeCard;

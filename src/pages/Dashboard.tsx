import { Button } from '@/components/ui/button';
import CardGrid from '@/custom-components/DashboardCards';
import Navbar from '@/custom-components/Navbar';
import TimeCard from '@/custom-components/Time';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <Navbar />

      {/* Time Card */}
      <div className="p-6 flex justify-center items-center">
        <div className="shadow-xl shadow-black/40 rounded-xl">
          <TimeCard />
        </div>
      </div>

      {/* Greeting Text */}
      <div className="text-white text-center text-lg sm:text-xl md:text-2xl font-medium mt-4 px-4">
        Hey User, Ready to conquer your tasks?
      </div>

      {/* Task Info */}
      <div className="text-white text-center text-base sm:text-lg md:text-xl mt-4 flex flex-wrap items-center justify-center gap-2 px-4">
        <span className="fire-glow text-xl">🔥</span>
        You’ve completed <div className="text-blue-400 font-semibold">3</div> tasks today! Keep going!
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6 sm:gap-8 px-4">
        <Button className="w-auto sm:w-auto h-12 bg-gradient-to-r from-[#4A90E2] to-[#1F62B1] hover:from-[#5aa2f0] hover:to-[#3576d0] text-white px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base">
          View My Project
        </Button>
        <Button className="w-auto sm:w-auto h-12 bg-gradient-to-r from-[#4A90E2] to-[#1F62B1] hover:from-[#5aa2f0] hover:to-[#3576d0] text-white px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base">
          Create New Task
        </Button>
        <Button className="w-auto sm:w-auto h-12 bg-gradient-to-r from-[#4A90E2] to-[#1F62B1] hover:from-[#5aa2f0] hover:to-[#3576d0] text-white px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base">
          Open Calendar
        </Button>
      </div>

      {/* Cards Section */}
      <div className="mt-16 px-4">
        <CardGrid />
      </div>
    </div>
  );
};

export default Dashboard;

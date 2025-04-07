import { Button } from '@/components/ui/button';
import CardGrid from '@/custom-components/DashboardCards';
import Navbar from '@/custom-components/Navbar';
import TimeCard from '@/custom-components/Time';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <Navbar />


      <div className="p-6 flex justify-center items-center">
        <div className="shadow-xl shadow-black/40 rounded-xl">
          <TimeCard />
        </div>
      </div>

      <div className="greet text-white text-center text-[22px]">
        Hey User, Ready to conquer your tasks?
      </div>

      <div className="task-info text-white text-center text-[22px] mt-5 flex items-center justify-center gap-2">
        <span className="fire-glow">🔥</span>
        You’ve completed <div className='text-blue-400' >3</div> tasks today! Keep going!
      </div>


      {/* buttons */}
      <div className="flex items-center justify-evenly mt-20 gap-6">
        <Button className="h-12 bg-gradient-to-r from-[#4A90E2] to-[#1F62B1] hover:from-[#5aa2f0] hover:to-[#3576d0] text-white px-6 py-2 rounded-lg transition-all duration-300">
          View My Project
        </Button>
        <Button className="h-12 bg-gradient-to-r from-[#4A90E2] to-[#1F62B1] hover:from-[#5aa2f0] hover:to-[#3576d0] text-white px-6 py-2 rounded-lg transition-all duration-300">
          Create New Task
        </Button>
        <Button className="h-12 bg-gradient-to-r from-[#4A90E2] to-[#1F62B1] hover:from-[#5aa2f0] hover:to-[#3576d0] text-white px-6 py-2 rounded-lg transition-all duration-300">
          Open Calender
        </Button>
      </div>


      <div className="mt-20">
        <CardGrid />
      </div>

    </div>
  );
};

export default Dashboard;

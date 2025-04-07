import { useState } from "react";
import {
  Calendar,
  Plus,
  Bell,
  Settings,
  Search,
} from "lucide-react";
import SideNav from "./SideNav";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-[#252525] w-full h-15 px-6 flex items-center shadow">
      <div className="w-full flex items-center justify-between">
        {/* SideNav and Left Logo */}
        <div className="flex items-center gap-4">
        <SideNav />

          <div className="flex items-center gap-2 cursor-pointer">
            <Calendar size={26} className="text-white" />
            <span className="text-white font-semibold text-xl">PlanWise</span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center">
          {/* Large Screens: Full Search */}
          <div className="hidden lg:block relative">
            <Search
              size={20}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-[400px] h-10 pl-10 pr-2 rounded bg-stone-100 text-black text-base font-medium outline-none"
            />
          </div>

          {/* Small Screens: Toggleable Search */}
          {showSearch && (
            <div className="block lg:hidden absolute left-1/2 -translate-x-1/2 top-24 z-50 w-[90%]">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-12 pl-10 pr-2 rounded bg-stone-100 text-black text-base font-medium outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Large Screens: Full Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Create Button */}
            <button className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
              <Plus size={20} className="text-white" />
              <span className="text-white text-base font-medium">Create</span>
            </button>

            {/* Profile */}
            <div className="w-9 h-9 bg-gray-300 rounded-full cursor-pointer" />

            {/* Notification */}
            <Bell size={22} className="text-white cursor-pointer hover:opacity-80" />

            {/* Settings */}
            <Settings size={22} className="text-white cursor-pointer hover:opacity-80" />
          </div>

          {/* Small Screens: Icons only */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Search Toggle */}
            <button onClick={() => setShowSearch((prev) => !prev)}>
              <Search size={22} className="text-white hover:opacity-80" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <div
                onClick={() => setShowDropdown((prev) => !prev)}
                className="w-9 h-9 bg-gray-300 rounded-full cursor-pointer"
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md z-50 py-2">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
                    <Plus size={16} /> Create
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
                    <Bell size={16} /> Notifications
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
                    <Settings size={16} /> Settings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

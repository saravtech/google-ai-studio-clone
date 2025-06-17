import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center relative">
      {/* Left: Logo */}
      <div className="text-xl font-semibold text-gray-800 hidden md:block">
        Google <span className="text-blue-600">AI Studio</span>
      </div>

      {/* Right: Actions (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <button className="bg-gray-100 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 border text-gray-800">
          Get API key
        </button>
        <a href="#" className="text-gray-700 hover:text-black font-medium">Studio</a>
        <a href="#" className="text-gray-700 hover:text-black font-medium">Dashboard</a>
        <a href="#" className="text-gray-700 hover:text-black font-medium">Documentation</a>
        <IoSettingsOutline size={20} className="text-gray-700 hover:text-black cursor-pointer" />
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 flex flex-col p-4 md:hidden">
          <button className="text-left py-2 px-2 hover:bg-gray-100 rounded" onClick={() => setMenuOpen(false)}>Studio</button>
          <button className="text-left py-2 px-2 hover:bg-gray-100 rounded" onClick={() => setMenuOpen(false)}>Dashboard</button>
          <button className="text-left py-2 px-2 hover:bg-gray-100 rounded" onClick={() => setMenuOpen(false)}>Documentation</button>
          <button className="text-left py-2 px-2 hover:bg-gray-100 rounded" onClick={() => setMenuOpen(false)}>Get API key</button>
        </div>
      )}
    </header>
  );
};

export default TopNav;
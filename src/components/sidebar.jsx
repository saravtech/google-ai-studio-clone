import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCommentDots, FaHistory, FaTools, FaBars, FaTimes } from "react-icons/fa";
import { MdGraphicEq, MdMovieCreation } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { activeSection, setActiveSection } = useAppContext();
  const [open, setOpen] = useState(false);
  // Normalize activeSection for case-insensitive comparison
  const active = (section) => (activeSection?.toLowerCase() === section.toLowerCase());

  // Sidebar content
  const sidebarContent = (
    <div className="flex flex-col justify-between h-full">
      <div>
        <nav className="space-y-2 mt-2">
          <button
            onClick={() => { setActiveSection("chat"); setOpen(false); }}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${active("chat") ? "bg-gray-200 font-semibold text-gray-900 shadow-inner" : "text-gray-800 hover:bg-gray-100"}`}
          >
            <FaCommentDots /> <Link to="/chat">Chat</Link>
          </button>
          <button
            onClick={() => { setActiveSection("stream"); setOpen(false); }}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${active("stream") ? "bg-gray-200 font-semibold text-gray-900 shadow-inner" : "text-gray-800 hover:bg-gray-100"}`}
          >
            <MdGraphicEq /> <Link to="/Stream">Stream</Link>
          </button>
          <button
            onClick={() => { setActiveSection("generate media"); setOpen(false); }}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${active("generate media") ? "bg-gray-200 font-semibold text-gray-900 shadow-inner" : "text-gray-800 hover:bg-gray-100"}`}
          >
            <MdMovieCreation /> Generate Media
          </button>
          <button
            onClick={() => { setActiveSection("build"); setOpen(false); }}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${active("build") ? "bg-gray-200 font-semibold text-gray-900 shadow-inner" : "text-gray-800 hover:bg-gray-100"}`}
          >
            <FaTools /> Build
          </button>
          <button
            onClick={() => { setActiveSection("history"); setOpen(false); }}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${active("history") ? "bg-gray-200 font-semibold text-gray-900 shadow-inner" : "text-gray-800 hover:bg-gray-100"}`}
          >
            <FaHistory /> History
          </button>
          <button
            onClick={() => { setActiveSection("enable saving"); setOpen(false); }}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-full transition ${active("enable saving") ? "bg-gray-200 font-semibold text-gray-900 shadow-inner" : "text-gray-800 hover:bg-gray-100"}`}
          >
            <TbPlugConnected /> Enable saving
          </button>
        </nav>
      </div>
      <div className="text-xs text-gray-500 mt-8">
        This model is not stable and may not be suitable for production use.{" "}
        <a href="#" className="text-blue-600 hover:underline">Learn more.</a>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md border border-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 z-30 bg-gray-100 transition-opacity duration-300 ${open ? "block" : "hidden"} lg:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar drawer for mobile */}
      <aside
        className={`fixed top-0 left-0 z-40 min-h-screen w-64 bg-gray-100 p-4 transform transition-transform duration-300 lg:static lg:translate-x-0 lg:flex ${open ? "translate-x-0" : "-translate-x-full"} ${open ? "block" : "hidden"} lg:block`}
        style={{ minWidth: "16rem" }}
      >
        {/* Close button for mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 z-50 bg-white p-1 rounded-full shadow border border-gray-200"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <FaTimes size={18} />
        </button>
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
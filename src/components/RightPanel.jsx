import { IoClose } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";
import ChatSettings from "./ChatSettings";
import StreamSettings from "./StreamSettings";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

const RightPanel = () => {
  const { activeSection } = useAppContext();
  const [open, setOpen] = useState(false);

  const renderRightPanel = () => {
    switch (activeSection) {
      case "chat":
        return <ChatSettings />;
      case "stream":
        return <StreamSettings />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile: Button to open right panel */}
      <button
        className="block lg:hidden absolute top-4 right-4 z-40 bg-white p-2 rounded-full shadow-md border border-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Open settings panel"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M4 12h16" /></svg>
      </button>

      {/* Mobile: Overlay and drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-30 transition-opacity duration-300 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 right-0 z-40 h-full w-72 bg-gray-50 p-4 rounded-l-2xl overflow-y-auto shadow-lg transition-transform duration-300 lg:hidden">
            <button
              className="absolute top-4 right-4 z-50 bg-white p-1 rounded-full shadow border border-gray-200"
              onClick={() => setOpen(false)}
              aria-label="Close settings panel"
            >
              <IoClose size={18} />
            </button>
            {renderRightPanel()}
          </aside>
        </>
      )}

      {/* Desktop: Static right panel */}
      <aside className="w-72 bg-gray-50 h-full p-4 rounded-2xl overflow-y-auto hidden lg:block">
        {renderRightPanel()}
      </aside>
    </>
  );
};

export default RightPanel;

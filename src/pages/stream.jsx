import AppLayout from "../layouts/AppLayout";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

const Stream = () => {
    const { setActiveSection } = useAppContext();

    useEffect(() => {
        setActiveSection("stream");
    }, []);

    return (
        <AppLayout>
            {/* Stream Realtime Header */}
            <div className="mb-2 text-sm font-semibold text-gray-800">Stream Realtime</div>
            <hr className="mb-8" />
            <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-2 sm:px-4">
                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl font-semibold text-blue-700 text-center mb-8 sm:mb-10">Talk to Gemini live</h2>

                {/* Prompt input with Run button and + icon outside */}
                <div className="flex flex-col sm:flex-row justify-center w-full mb-6 sm:mb-8 gap-2 items-center">
                    <div className="flex items-center w-full max-w-2xl bg-white rounded-full border border-gray-300 px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
                        <input
                            type="text"
                            placeholder="Start typing a prompt"
                            className="flex-grow outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                        <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-gray-300 text-xl sm:text-2xl text-gray-400 bg-white">＋</span>
                        <div className="relative group flex items-center">
                            <button className="flex items-center gap-1 px-4 sm:px-6 py-1 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-300 text-sm sm:text-base text-gray-700 ml-2 sm:ml-3 font-medium">
                                Run
                                <span className="ml-1 text-xs text-gray-500">Ctrl ⏎</span>
                            </button>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded shadow text-xs whitespace-nowrap bg-gray-100 text-gray-800 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition border border-gray-300">
                                Run prompt
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap w-full max-w-xs sm:max-w-none">
                    <button className="flex items-center gap-2 px-4 sm:px-6 py-1 border-1 border-blue-300 rounded-full bg-white hover:border-blue-500 transition w-full sm:w-auto justify-center">
                        <span className="text-lg">🎤</span> Talk
                    </button>
                    <button className="flex items-center gap-2 px-4 sm:px-6 py-1 border-1 border-blue-300 rounded-full bg-white hover:border-blue-500 transition w-full sm:w-auto justify-center">
                        <span className="text-lg">📷</span> Webcam
                    </button>
                    <button className="flex items-center gap-2 px-4 sm:px-6 py-1 border-1 border-blue-300 rounded-full bg-white hover:border-blue-500 transition w-full sm:w-auto justify-center">
                        <span className="text-lg">🖥</span> Share Screen
                    </button>
                </div>
            </div>
        </AppLayout>
    );
};

export default Stream;

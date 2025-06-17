import { FiSend } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const PromptBox = () => {
  return (
    <section className="text-center my-8 sm:my-12 max-w-4xl mx-auto px-2">
      {/* Welcome Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-blue-600 mb-6 sm:mb-8">
        Welcome to AI Studio
      </h2>

      {/* Input box with buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
        <div className="flex items-center bg-white px-3 sm:px-4 py-2 sm:py-3 w-full rounded-full shadow-md border max-w-2xl">
          <input
            type="text"
            placeholder="Explain the probability of rolling two dice and getting 7"
            className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
          <FiSend className="text-gray-500 hover:text-black cursor-pointer ml-2 sm:ml-3" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm text-gray-600 bg-gray-200 hover:bg-gray-200 w-full sm:w-auto justify-center">
            <IoMdAdd /> Run
            <span className="ml-1 text-xs text-gray-500">Ctrl ⏎</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromptBox;
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

// Switch component
const Switch = ({ checked, onChange }) => (
  <button
    type="button"
    className={`relative w-10 h-6 flex items-center rounded-full transition-colors duration-200 focus:outline-none ${
      checked ? "bg-blue-500" : "bg-gray-300"
    }`}
    onClick={() => onChange(!checked)}
    aria-pressed={checked}
  >
    <span className="sr-only">Toggle</span>
    <span
      className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center shadow transition-transform duration-200 ${
        checked ? "translate-x-4 bg-blue-700" : "translate-x-0 bg-gray-800"
      }`}
    >
      <span className="text-white text-lg">–</span>
    </span>
  </button>
);

const ChatSettings = () => {
    const [thinkingMode, setThinkingMode] = useState(false);
    const [thinkingBudget, setThinkingBudget] = useState(false);
    const [structuredOutput, setStructuredOutput] = useState(false);
    const [codeExecution, setCodeExecution] = useState(false);
    const [functionCalling, setFunctionCalling] = useState(false);
    const [grounding, setGrounding] = useState(false);
    const [urlContext, setUrlContext] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Run settings</h3>
                <IoClose className="text-gray-500 cursor-pointer hover:text-black" />
            </div>

            {/* Dropdown */}
            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-1">Model</label>
                <select className="w-full border rounded p-2 text-sm">
                    <option>Gemini 2.5 Pro Preview</option>
                    <option>Gemini 1.5 Flash</option>
                </select>
            </div>

            {/* Token count */}
            <div className="text-sm text-gray-700 mb-4">
                <span className="font-medium">Token count:</span> 0 / 1,048,576
            </div>

            {/* Temperature */}
            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-1">Temperature</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    defaultValue="1"
                    className="w-full"
                />
            </div>

            {/* Toggles */}
            <div className="text-sm text-gray-800 font-medium mb-2">Thinking</div>
            <div className="flex items-center justify-between mb-4">
                <span>Thinking mode</span>
                <Switch checked={thinkingMode} onChange={setThinkingMode} />
            </div>
            <div className="flex items-center justify-between mb-6">
                <span>Set thinking budget</span>
                <Switch checked={thinkingBudget} onChange={setThinkingBudget} />
            </div>

            <div className="text-sm text-gray-800 font-medium mb-2">Tools</div>
            <div className="flex flex-col gap-4 mb-4">
                <div className="flex items-center justify-between">
                    <span>Structured output</span>
                    <Switch checked={structuredOutput} onChange={setStructuredOutput} />
                </div>
                <div className="flex items-center justify-between">
                    <span>Code execution</span>
                    <Switch checked={codeExecution} onChange={setCodeExecution} />
                </div>
                <div className="flex items-center justify-between">
                    <span>Function calling</span>
                    <Switch checked={functionCalling} onChange={setFunctionCalling} />
                </div>
                <div className="flex items-center justify-between">
                    <span>Grounding with Google Search</span>
                    <Switch checked={grounding} onChange={setGrounding} />
                </div>
                <div className="flex items-center justify-between">
                    <span>URL context</span>
                    <Switch checked={urlContext} onChange={setUrlContext} />
                </div>
            </div>
        </>
    )
};

export default ChatSettings;
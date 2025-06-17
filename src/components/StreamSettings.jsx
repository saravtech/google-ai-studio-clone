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

const StreamSettings = () => {
    const [turnCoverage, setTurnCoverage] = useState(false);
    const [affectiveDialog, setAffectiveDialog] = useState(false);
    const [proactiveAudio, setProactiveAudio] = useState(false);

    return (
        <>
            <h3 className="font-semibold text-gray-800 mb-4">Run settings</h3>

            {/* Model selection */}
            <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">Model</label>
                <select className="w-full border rounded p-2 text-sm">
                    <option>Gemini 2.5 Flash Preview Native Audio Dialog</option>
                    <option>Gemini 1.5 Flash</option>
                </select>
            </div>

            {/* Output format */}
            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-1">Output format</label>
                <button className="w-full bg-blue-50 text-blue-700 font-medium rounded p-2 flex items-center justify-center border">
                    🎧 Audio & Text
                </button>
            </div>

            {/* Voice */}
            <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">Voice</label>
                <select className="w-full border rounded p-2 text-sm">
                    <option>Charon</option>
                    <option>Gemini</option>
                </select>
            </div>

            {/* Media resolution */}
            <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-1">Media resolution</label>
                <select className="w-full border rounded p-2 text-sm">
                    <option>258 tokens / image</option>
                    <option>512 tokens / image</option>
                </select>
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-4 mb-4 text-sm">
                <div className="flex justify-between items-center">
                    <span>Turn coverage</span>
                    <Switch checked={turnCoverage} onChange={setTurnCoverage} />
                </div>
                <div className="flex justify-between items-center">
                    <span>Affective dialog</span>
                    <Switch checked={affectiveDialog} onChange={setAffectiveDialog} />
                </div>
                <div className="flex justify-between items-center">
                    <span>Proactive audio</span>
                    <Switch checked={proactiveAudio} onChange={setProactiveAudio} />
                </div>
            </div>

            {/* Expandable: Session Context */}
            <div className="mt-6">
                <div className="text-sm font-medium text-gray-800 mb-2">Session Context</div>
                <div className="border rounded p-2 text-xs text-gray-500">▼ (collapsed)</div>
            </div>

            {/* Expandable: Tools */}
            <div className="mt-6">
                <div className="text-sm font-medium text-gray-800 mb-2">Tools</div>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span>Function calling</span>
                        <span className="text-gray-400 text-xs">Edit</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Automatic Function Response</span>
                        <span className="text-gray-400 text-xs">–</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default StreamSettings;
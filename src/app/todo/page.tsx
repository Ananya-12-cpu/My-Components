"use client";

import React, { useState } from "react";
import { TbX } from "react-icons/tb";
import BackLink from "../components/BackLink";

function ChipsInput() {
  const [state, setState] = useState<string>("");
  const [chipsArray, setChipsArray] = useState<string[]>([]);
  const [duplicateWarning, setDuplicateWarning] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && state.trim()) {
      const isDuplicate = chipsArray.find((x) => x == state.trim());
      if (!isDuplicate) {
        setChipsArray((prev) => [...prev, state.trim()]);
        setState("");
        setDuplicateWarning(false);
      } else {
        setDuplicateWarning(true);
        setTimeout(() => setDuplicateWarning(false), 2000);
      }
    }
  };

  const deleteChipHandler = (chip: string) => {
    setChipsArray((prev) => prev.filter((x) => x !== chip));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <BackLink />

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            To Do List
          </h1>

          <div className="mb-2">
            <input
              type="text"
              placeholder="Add a new task and press Enter"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/40 transition-all"
              value={state}
              onChange={(e) => setState(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <p
            className={`text-sm text-amber-400 mb-4 transition-opacity ${
              duplicateWarning ? "opacity-100" : "opacity-0"
            }`}
          >
            That task is already on your list.
          </p>

          <div className="flex flex-wrap gap-2">
            {chipsArray.map((chip, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 bg-purple-500/15 border border-purple-400/30 text-purple-100 px-4 py-2 rounded-full transition-all hover:bg-purple-500/25"
              >
                <span className="text-sm font-medium">{chip}</span>
                <button
                  onClick={() => deleteChipHandler(chip)}
                  className="text-purple-300 hover:text-white focus:outline-none transition-colors"
                  aria-label={`Delete ${chip}`}
                >
                  <TbX size={16} />
                </button>
              </div>
            ))}
          </div>

          {chipsArray.length === 0 && (
            <div className="text-center text-gray-500 mt-6 text-sm">
              No tasks added yet. Add your first task above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChipsInput;

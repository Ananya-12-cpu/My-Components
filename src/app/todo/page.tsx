"use client"

import React, { useState } from 'react';

function ChipsInput() {
  const [state, setState] = useState<string>('');
  const [chipsArray, setChipsArray] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && state.trim()) {

const isDuplicate=chipsArray.find(x=>x ==state.trim());
if (!isDuplicate) {
  setChipsArray((prev) => [...prev, state.trim()]);
      setState('');
}else{
  alert("Don't send duplicate data")
}

      
    }
  };

  const deleteChipHandler = (chip: string) => {
    setChipsArray((prev) => prev.filter((x) => x !== chip));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Todo List
          </h2>
          
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Add a new task and press Enter"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                value={state}
                onChange={(e) => setState(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {chipsArray.map((chip, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full transition-all duration-200 hover:bg-blue-200"
              >
                <span className="text-sm font-medium">{chip}</span>
                <button
                  onClick={() => deleteChipHandler(chip)}
                  className="text-blue-600 hover:text-blue-800 focus:outline-none transition-colors duration-200"
                  aria-label={`Delete ${chip}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {chipsArray.length === 0 && (
            <div className="text-center text-gray-500 mt-4">
              No tasks added yet. Add your first task above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChipsInput;
'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    setSeconds(0);
  }, [stopTimer]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-white text-3xl mb-6 flex gap-4">
        <span className="px-6 py-3 border border-gray-500 rounded-lg bg-gray-800">
          {formatTime(minutes)} mins
        </span>
        <span className="px-6 py-3 border border-gray-500 rounded-lg bg-gray-800">
          {formatTime(remainingSeconds)} secs
        </span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={startTimer}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={isRunning}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

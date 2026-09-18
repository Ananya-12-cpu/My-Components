'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { TbPlayerPlay, TbPlayerStop, TbRefresh } from 'react-icons/tb';
import BackLink from '../components/BackLink';

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
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <BackLink />

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl text-center">
          <h1 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Stop Watch
          </h1>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex flex-col items-center px-6 py-4 rounded-xl bg-white/5 border border-white/10 min-w-[90px]">
              <span className="text-4xl font-mono font-semibold">{formatTime(minutes)}</span>
              <span className="text-xs uppercase tracking-wide text-gray-400 mt-1">mins</span>
            </div>
            <span className="text-3xl text-gray-500 pb-5">:</span>
            <div className="flex flex-col items-center px-6 py-4 rounded-xl bg-white/5 border border-white/10 min-w-[90px]">
              <span className="text-4xl font-mono font-semibold">{formatTime(remainingSeconds)}</span>
              <span className="text-xs uppercase tracking-wide text-gray-400 mt-1">secs</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={startTimer}
              disabled={isRunning}
              className="flex items-center gap-2 bg-emerald-500/90 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <TbPlayerPlay size={18} />
              Start
            </button>
            <button
              onClick={stopTimer}
              disabled={!isRunning}
              className="flex items-center gap-2 bg-amber-500/90 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <TbPlayerStop size={18} />
              Stop
            </button>
            <button
              onClick={resetTimer}
              className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/40 text-white px-5 py-2.5 rounded-lg font-medium transition-all"
            >
              <TbRefresh size={18} />
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

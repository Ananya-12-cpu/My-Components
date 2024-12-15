'use client'


// export default function App() {
//   const [timer, setTimer] = useState(0);

//   const startTimer = () => {
//     window.myTimer = setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//   };
//   const stopTimer = () => {
//     clearInterval(window.myTimer);
//   };
//   const resetTimer = () => {
//     clearInterval(window.myTimer);
//     setTimer(0);
//   };
//   return (
//     <div className="container">
//       <h1 className='text-white'>Timer</h1>
//       <span className='text-white'>{Math.trunc(timer / 60)} mins </span>
//       <span className='text-white'>{timer % 60} secs</span>
//       <div>
//         <button onClick={startTimer} className='bg-slate-600 text-white mx-3 p-2'>Start</button>
//         <button onClick={stopTimer} className='bg-slate-600 text-white mx-3 p-2'>Stop</button>
//         <button onClick={resetTimer} className='bg-slate-600 text-white mx-3 p-2'>Reset</button>
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const timerRef :any = useRef(null); // Use useRef instead of window.myTimer

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Clear the reference
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Clear the reference
    setTimer(0);
  };
console.log(timer / 60);

  return (
    <div className="container"> 
    <div className="flex items-center justify-center my-3">
    <span className="text-white border-spacing-2 border-solid border-2 border-gray-600 p-4">{Math.trunc(timer / 60)} mins </span>
    <span className="text-white border-spacing-2 border-solid border-2 border-gray-600 p-4">{timer % 60} secs</span>
    </div>
     
      <div className="flex items-center justify-center">
        <button onClick={startTimer} className="bg-slate-600 text-white mx-3 p-2">
          Start
        </button>
        <button onClick={stopTimer} className="bg-slate-600 text-white mx-3 p-2">
          Stop
        </button>
        <button onClick={resetTimer} className="bg-slate-600 text-white mx-3 p-2">
          Reset
        </button>
      </div>
    </div>
  );
}

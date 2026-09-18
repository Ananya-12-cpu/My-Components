import { useState } from 'react';
import BackLink from '../components/BackLink';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleNumberClick = (number) => {
    setDisplay(prev => prev + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplay(prev => prev + operator);
  };

  const handleEqual = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  const numberButtonClass =
    'py-5 rounded-xl text-lg font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-400/40 transition-all active:scale-95';
  const operatorButtonClass =
    'py-5 rounded-xl text-lg font-semibold bg-purple-500/20 border border-purple-400/30 text-purple-200 hover:bg-purple-500/30 transition-all active:scale-95';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <BackLink />

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Calculator
          </h1>

          <input
            type="text"
            value={display}
            readOnly
            className="w-full h-16 mb-4 px-4 text-right text-3xl font-mono rounded-xl bg-black/20 border border-white/10 text-white"
          />

          <div className="grid grid-cols-4 gap-3 mb-4">
            <button className={numberButtonClass} onClick={() => handleNumberClick('1')}>1</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('2')}>2</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('3')}>3</button>
            <button className={operatorButtonClass} onClick={() => handleOperatorClick('+')}>+</button>

            <button className={numberButtonClass} onClick={() => handleNumberClick('4')}>4</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('5')}>5</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('6')}>6</button>
            <button className={operatorButtonClass} onClick={() => handleOperatorClick('-')}>-</button>

            <button className={numberButtonClass} onClick={() => handleNumberClick('7')}>7</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('8')}>8</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('9')}>9</button>
            <button className={operatorButtonClass} onClick={() => handleOperatorClick('*')}>&times;</button>

            <button className={operatorButtonClass} onClick={() => handleOperatorClick('/')}>&divide;</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('0')}>0</button>
            <button className={numberButtonClass} onClick={() => handleNumberClick('.')}>.</button>
            <button
              className="py-5 rounded-xl text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-all active:scale-95"
              onClick={handleEqual}
            >
              =
            </button>
          </div>

          <button
            onClick={handleClear}
            className="w-full py-3 rounded-xl font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-red-400/10 hover:text-red-300 hover:border-red-400/40 transition-all"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

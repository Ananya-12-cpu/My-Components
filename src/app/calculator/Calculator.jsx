import React, { useState } from 'react';
import styles from './Calculator.module.css';

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

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Calculator Program in React</h1> */}
      <div className={styles.calculator}>
        <input
          type="text"
          value={display}
          readOnly
          className={styles.display}
        />
        <div className={styles.buttonGrid}>
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>

          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>

          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>

          <button onClick={() => handleOperatorClick('/')}>/</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleNumberClick('.')}>.</button>
          <button onClick={handleEqual}>=</button>
        </div>
        <button onClick={handleClear} className={styles.clearButton}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Calculator; 
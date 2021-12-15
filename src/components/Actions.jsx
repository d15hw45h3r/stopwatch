import React from 'react';

const Actions = ({ handleStart, handleReset, handleWait, isRunning }) => {
  return (
    <div className='action-buttons'>
      <button onClick={handleStart} className={isRunning ? 'stop' : 'start'}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleWait} className='wait'>
        Wait
      </button>
      <button onClick={handleReset} className='reset'>
        Reset
      </button>
    </div>
  );
};

export default Actions;

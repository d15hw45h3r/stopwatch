import React from 'react';

const Timer = ({ time }) => {
  const formatDate = (date) => {
    const seconds = `0${date % 60}`.slice(-2),
      minutes = `0${Math.floor(date / 60) % 60}`.slice(-2),
      hours = `0${Math.floor(date / 3600)}`.slice(-2);

    return `${hours}: ${minutes}: ${seconds}`;
  };

  return <h1 className='timer'>{formatDate(time)}</h1>;
};

export default Timer;

import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import './App.css';
import Actions from './components/Actions';
import Timer from './components/Timer';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    let observable = new Observable((subscriber) => {
      setInterval(() => {
        subscriber.next();
      }, 1000);
    }).subscribe(() => {
      if (isRunning) {
        setTime((val) => val + 1);
      }
    });

    return () => observable.unsubscribe();
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(!isRunning);
    if (isRunning) {
      setTime(0);
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(true);
  };

  const handleWait = () => {
    if (isRunning) {
      setClicks(clicks + 1);
      if (clicks + 1 === 1) {
        setTimeout(() => {
          setClicks(0);
        }, 300);
      } else if (clicks + 1 === 2) {
        setClicks(0);
        setIsRunning(false);
      } else {
        setClicks(0);
      }
    }
  };

  return (
    <div className='App'>
      <Timer time={time} />
      <Actions
        handleStart={handleStart}
        handleReset={handleReset}
        handleWait={handleWait}
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;

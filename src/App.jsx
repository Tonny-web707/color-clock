import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-card">

        <h1>My Color Clock</h1>

        <p className="clock-time">
          {format(currentTime, 'hh:mm:ss a')}
        </p>

        <p className="clock-date">
          {format(currentTime, 'EEEE, MMMM do, yyyy')}
        </p>

        <p className="clock-message">
          Time flies- its just a shame it doesn't have a frequent flyer program!
        </p>

      </div>
    </div>
  );
}

export default App;

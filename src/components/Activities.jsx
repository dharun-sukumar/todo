import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(60);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="progress-bar">
      
      <div className="progress-t">Progress : </div>
      <div
        className="progress"
        style={{ width: `${progress}%`, background: '#22cc62' }}
      />
      <div className="progress-text">{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        onTimeUpdate={handleTimeUpdate}
      >
      </video>

      <div>
        <p>Status: {isPlaying ? 'Playing' : 'Paused'}</p>
        <p>Current Time: {Math.floor(currentTime)} seconds</p>
      </div>

      <div>
        <button onClick={handleRewind}>⏪ Rewind</button>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
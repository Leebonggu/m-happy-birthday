import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Song() {
  return (
    <AudioPlayer
      style={{
        width: '500px',
      }}
      autoPlay
      src='/song.mp3'
      volume={0.5}
    />
  );
}

export default Song;

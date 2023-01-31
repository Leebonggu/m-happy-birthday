import { Fireworks } from '@fireworks-js/react';
import sound1 from '../public/mp3/sounds_explosion0.mp3';
import sound2 from '../public/mp3/sounds_explosion1.mp3';
import sound3 from '../public/mp3/sounds_explosion2.mp3';

function Party() {
  return (
    <Fireworks
      options={{
        hue: {
          min: 0,
          max: 345,
        },
        brightness: {
          min: 50,
          max: 100,
        },
        decay: {
          min: 0.025,
          max: 0.045,
        },
        rocketsPoint: {
          min: 0,
          max: 100,
        },
        traceLength: 5,
        particles: 150,
        explosion: 5,
        traceSpeed: 10,
        friction: 1,
        intensity: 60,
        mouse: {
          click: true,
          max: 10,
        },
        sound: {
          enabled: true,
          files: [sound1, sound2, sound3],
        },
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000',
        backgroundImage: `url(./night_city.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    />
  );
}

export default Party;

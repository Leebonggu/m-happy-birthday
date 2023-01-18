/**with interactive inflearn */
import React, { useRef } from 'react';
import {
  Container,
  Stage,
  House,
  WallLeft,
  WallRight,
  WallFront,
  WallContent,
  WallTitle,
} from './Travel.styles';
import Gift from './Gift';
import { useMouse } from '../lib/hooks';
import Card from './Card';
import Cake from './Cake';
import Song from './Song';
import { animated } from '@react-spring/web';

function Travel({ scrollPositionRatio }: { scrollPositionRatio: number }) {
  const ref = useRef<null | HTMLDivElement>(null);
  const { x, y } = useMouse();

  return (
    <Container>
      <Stage ref={ref} x={x} y={y}>
        <House z={scrollPositionRatio * 980}>
          <WallLeft></WallLeft>
          <WallRight></WallRight>
          <WallFront distance={400}>
            <WallContent className='flex flex-col'>
              <Song />
              <animated.div className='mt-2'>BGM ON</animated.div>
            </WallContent>
          </WallFront>
          <WallFront distance={200}>
            <WallContent>
              <WallTitle>
                <Card name='준수' />
              </WallTitle>
            </WallContent>
          </WallFront>
          <WallFront distance={50}>
            <WallContent>
              <WallTitle>
                <Cake />
              </WallTitle>
            </WallContent>
          </WallFront>
          <WallFront distance={-200}>
            <WallContent>
              <WallTitle>
                <Gift />
              </WallTitle>
            </WallContent>
          </WallFront>
          <WallFront
            distance={-500}
            style={{
              backgroundImage: `url(/logo.svg)`,
            }}
          >
            <WallContent>
              <WallTitle
                style={{
                  width: '70%',
                  height: '80%',
                  backgroundImage: `url(/ceo.png)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></WallTitle>
            </WallContent>
          </WallFront>
        </House>
      </Stage>
    </Container>
  );
}

export default Travel;

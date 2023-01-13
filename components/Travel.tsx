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

function Travel({ scrollPositionRatio }: { scrollPositionRatio: number }) {
  const ref = useRef<null | HTMLDivElement>(null);
  const { x, y } = useMouse();

  return (
    <Container>
      <Stage ref={ref} x={x} y={y}>
        <House z={scrollPositionRatio * 980}>
          <WallLeft></WallLeft>
          <WallRight></WallRight>
          <WallFront distance={350}>
            <WallContent>
              <WallTitle>
                <Card />
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
          <WallFront distance={-500}>
            <WallContent>
              <WallTitle>4444</WallTitle>
            </WallContent>
          </WallFront>
        </House>
      </Stage>
    </Container>
  );
}

export default Travel;

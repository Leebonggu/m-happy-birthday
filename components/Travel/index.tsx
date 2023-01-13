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
import Gift from '../Gift';
import { useMouse } from '../../lib/hooks';

function Travel({ scrollPositionRatio }: { scrollPositionRatio: number }) {
  const ref = useRef<null | HTMLDivElement>(null);
  const { x, y } = useMouse();

  return (
    <Container>
      <Stage ref={ref} x={x} y={y}>
        <House z={scrollPositionRatio * 980}>
          <WallLeft></WallLeft>
          <WallRight></WallRight>
          <WallFront distance={300}>
            <WallContent>
              <WallTitle>
                <Gift />
              </WallTitle>
            </WallContent>
          </WallFront>
          <WallFront distance={50}>
            <WallContent>
              <WallTitle>22</WallTitle>
            </WallContent>
          </WallFront>
          <WallFront distance={-200}>
            <WallContent>
              <WallTitle>333</WallTitle>
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

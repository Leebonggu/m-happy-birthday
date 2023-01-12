/**with interactive inflearn */
import React from 'react';
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

function Go() {
  return (
    <Container>
      <Stage>
        <House>
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
          <WallFront distance={-300}>
            <WallContent>
              <WallTitle>4444</WallTitle>
            </WallContent>
          </WallFront>
        </House>
      </Stage>
    </Container>
  );
}

export default Go;

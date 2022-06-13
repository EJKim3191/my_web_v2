import styled from "styled-components";

export const Background = styled.img`
  position: absolute;
  width: ${props => (props.wheight/props.wwidth) >= (9 / 16) ? '100%' : `${props.wheight * 16 / 9}px`};
  height: ${props => (props.wheight/props.wwidth) >= (9 / 16) ? `${props.wwidth * 9 / 16}px` : '100%'};
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  top: ${props => (props.wheight/props.wwidth) >= (9 / 16) ? `${(props.wheight - props.wwidth * 9 / 16)/2}px` : '0vh'};
`;

export const Background2 = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
`;

import styled from "styled-components";

export const Interactive_PersonImg = styled.img`
  position: absolute;
  height: 7vh;
  top: 50vh;
  left: 32vw;
  z-index: 3;
`;
export const HeaderImg = styled.img`
  position: absolute;
  width: 50vw;
  top: ${props => (props.wheight/props.wwidth) >= (9 / 16) ? `${(props.wheight - props.wwidth * 9 / 16)/2}px` : '0vh'};
  left: 25vw;
  z-index: 3;
`;
export const HouseImg = styled.img`
  display: inline-block;
  position: absolute;
  // width: 100%;
  width: ${props => (props.wheight/props.wwidth) >= (9 / 16) ? '100%' : `${props.wheight * 16 / 9}px`};
  padding-top: 56.25%;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: ${props => (props.wheight/props.wwidth) >= (9 / 16) ? `${(props.wheight - props.wwidth * 9 / 16)/2}px` : '0vh'};
  z-index: 3;
`;
export const SinglePaperImg = styled.img`
  position: absolute;
  width: 2vw;
  top: 70vh;
  left: 55vw;
  z-index: 3;
`;
export const RedArrow = styled.img`
  position: absolute;
  width: 3vw;
  top: 65vh;
  left: 55vw;
  z-index: 3;
`;
export const BlueArrow = styled.img`
  position: absolute;
  width: 3vw;
  top: 50vh;
  left: 66vw;
  z-index: 3;
`;
export const YellowArrow = styled.img`
  position: absolute;
  width: 3vw;
  top: 45vh;
  left: 32vw;
  z-index: 3;
`;

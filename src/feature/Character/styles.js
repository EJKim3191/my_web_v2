import styled from "styled-components";

export const CharacterImg = styled.img`
  position: absolute;
  top: ${(props) => props.y || `0px`};
  left: ${(props) => props.x || `0px`};
  height: 7vh;
  z-index: 3;
`;

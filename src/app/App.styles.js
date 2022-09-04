import styled from "styled-components";

export const App = styled.div`
    display: flex;
    widht: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: solid 1px gray;
`
export const MainContainer = styled.div`
    position: relative;
    top: 100px;
    width: 1500px;
    height: 800px;
`

export const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
`;

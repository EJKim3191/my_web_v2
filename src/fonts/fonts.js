import { createGlobalStyle } from "styled-components";

import Cafe24Ssurround from "./Cafe24Ssurround/Cafe24Ssurround.ttf";

export default createGlobalStyle`
@font-face {
    font-family: "Cafe24Ssurround";
    src: local("Cafe24Ssurround"), 
    url(${Cafe24Ssurround}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

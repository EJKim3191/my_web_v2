import { createGlobalStyle } from "styled-components";

import neodgm_pro from "./Neodgm/neodgm_pro.ttf";

export default createGlobalStyle`
@font-face {
    font-family: "neodgm_pro";
    src: local("neodgm_pro"), 
    url(${neodgm_pro}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

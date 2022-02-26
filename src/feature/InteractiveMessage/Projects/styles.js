import styled from "styled-components";

// project image
import nadeul_main from "../../../img/pixelImg/projects/nadeulSeoul/nadeul_main.PNG";
import ssafy_project from "../../../img/pixelImg/projects/ssafy_project/ssafy_project.PNG";

export const ProjectNadeulImg = styled.div`
  width: 600px;
  height: 250px;
  background-size: contain;
  background-image: url(${nadeul_main});
`;

export const BoxContent = styled.div`
  font-family: "neodgm_pro";
`;

export const ProjectSsafy = styled.div`
  width: 450px;
  height: 250px;
  background-size: contain;
  background-image: url(${ssafy_project});
`;

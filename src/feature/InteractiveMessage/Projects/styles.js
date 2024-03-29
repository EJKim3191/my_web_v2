import styled from "styled-components";

// project image
import nadeul_main from "../../../img/pixelImg/projects/nadeulSeoul/nadeul_main.PNG";
import ssafy_project from "../../../img/pixelImg/projects/ssafy_project/ssafy_project.PNG";
import machineLearningPJT from "../../../img/pixelImg/projects/machineLearning/machineLearningPJT.PNG";
import tras from "../../../img/pixelImg/projects/tras/Tras.png";
import ssgame from "../../../img/pixelImg/projects/ssgame/ssgame.png"
import onda from "../../../img/pixelImg/projects/onda/onda.png"

export const ProjectNadeulImg = styled.div`
  width: 50vw;
  height: 40vh;
  background-size: cover;
  background-image: url(${nadeul_main});
`;

export const ProjectSsgameImg = styled.div`
  width: 50vw;
  height: 40vh;
  background-size: cover;
  background-image: url(${ssgame});
`

export const ProjectOndaImg = styled.div`
width: 50vw;
height: 40vh;
background-size: cover;
background-image: url(${onda});
`

export const BoxContent = styled.div`
  font-family: "neodgm_pro";
`;

export const ProjectSsafyImg = styled.div`
  width: 50vw;
  height: 40vh;
  background-size: cover;
  background-image: url(${ssafy_project});
`;

export const MachineLearningPJTImg = styled.div`
  width: 50vw;
  height: 60vh;
  background-size: cover;
  background-image: url(${machineLearningPJT});
`;

export const TrasImg = styled.div`
  width: 50vw;
  height: 50vh;
  background-size: cover;
  background-image: url(${tras});
`;

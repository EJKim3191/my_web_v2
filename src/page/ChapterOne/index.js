import React, { useEffect } from "react";
import { BackgroundContainer, Background } from "./styles";
import webonconstruction from "../../img/pixelImg/background/webonconstruction.png"; //05->12
import Loader from "../../components/Loader/Loader";

export default function ChapterOne() {
  const to = "https://team-scheduler-ai-omega.vercel.app/";
  const delay = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = to;
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BackgroundContainer>
      <Background alt="background" src={webonconstruction} />
      <Loader
        open={true}
        multiLine={true}
        labels={[
          "치명적 오류 발생....",
          "포트폴리오 사이트로 이동합니다...",
          "대기중입니다...",
        ]}
        fillsPerLabel={1}
      />
    </BackgroundContainer>
  );
}

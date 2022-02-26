import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { ProjectNadeulImg, BoxContent } from "./styles";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ProjectNadeulSeoul() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button style={{ fontFamily: "neodgm_pro" }} onClick={handleOpen}>
        나들서울
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <BoxContent>
            <h2 id="child-modal-title">나들서울 프로젝트</h2>
            <ProjectNadeulImg />
            <p>
              <a
                target="_blank"
                href="http://i6a303.p.ssafy.io/"
                id="child-modal-description"
                rel="noreferrer"
              >
                💚나들서울💚
              </a>
              <br />
              <br />
              Keyword: 여행, 코스, 공유
              <br />
              Concept: 초록, 깔끔한, 가벼운
              <br />
              <br />
              나만의 서울 나들이 코스를 공유하고 다른 사용자들이 큐레이팅 해
              놓은 코스를 구경, 저장, 추천할 수 있는 ‘서울 나들이 코스 공유’
              서비스입니다!
              <br />
              <br />먼 곳으로 여행을 떠나기 힘든 요즘, 주변으로라도 놀러 다니고
              싶지만 매일 같은 곳만 가게 되는 사용자들에게 다른 사람들의 나들이
              코스를 소개하고 정보를 제공합니다
            </p>
            <Button
              style={{ fontFamily: "neodgm_pro", left: `550px` }}
              onClick={handleClose}
            >
              닫기
            </Button>
          </BoxContent>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

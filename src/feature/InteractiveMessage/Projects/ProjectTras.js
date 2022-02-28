import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { TrasImg } from "./styles";
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

export default function ProjectTras() {
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
        TRAS
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: "50vw" }}>
          <h2 id="child-modal-title">
            방한 외국인을 위한 여행 분석 사이트 : 빅데이터 프로젝트
          </h2>
          <TrasImg />
          <p id="child-modal-description">
            <br />
            외국 사이트(영어권) 댓글들을 분석하여 장소에 대한 대표적인 감정과
            선호도 제공!
            <br />
            <br />
            이외에도 군집화를 통해 거리별 장소 묶음 및 다음 경로 추천
          </p>
          <Button
            style={{ fontFamily: "neodgm_pro", right: "0vw" }}
            onClick={handleClose}
          >
            닫기
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

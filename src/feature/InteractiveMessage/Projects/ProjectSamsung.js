import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { ProjectSsafy } from "./styles";
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

export default function ProjectSamsung() {
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
        SSAFY 관통프로젝트
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box style={{ fontFamily: "neodgm_pro" }} sx={{ ...style, width: 600 }}>
          <h2 id="child-modal-title">
            삼성청년소프트웨어아카데미 1학기 관통프로젝트
          </h2>
          <ProjectSsafy />
          <p id="child-modal-description">
            Java Project -{">"}
            Web(Front-End) -{">"}Project Web(Back-End) Project -{">"}DB Project
            FrameWork Project -{">"}알고리즘 적용 Project -{">"}Vue Project
            Final Project 순서로 진행된 관통 프로젝트
            <br />
            <br />
            기술들이 발전된 순서대로 적용해보며 마지막으로 Back(Spring Boot)과
            Front(Vue)를 적용해본 프로젝트
          </p>
          <Button
            style={{ fontFamily: "neodgm_pro", left: `550px` }}
            onClick={handleClose}
          >
            닫기
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

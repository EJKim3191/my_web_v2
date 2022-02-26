import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { MachineLearningPJTImg } from "./styles";
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

export default function ProjectGraduation() {
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
        라즈베리파이 음성인식 기능 구현
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: 650 }}>
          <h2 id="child-modal-title">
            독거노인을 위한 라즈베리파이에서의 음성인식 기능 구현
          </h2>
          <MachineLearningPJTImg />
          <p id="child-modal-description">
            <br />
            졸업작품으로 진행한 산학협력프로젝트!
            <br />
            <br />
            독거노인을 위한 음성인식 기능 구현을 위해 라즈베리파이 소형보드에서
            구현
          </p>
          <Button
            style={{ fontFamily: "neodgm_pro", left: "600px" }}
            onClick={handleClose}
          >
            닫기
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

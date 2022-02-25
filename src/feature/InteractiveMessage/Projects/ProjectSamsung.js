import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";

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
      <Button onClick={handleOpen}>SSAFY 관통프로젝트</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="child-modal-title">
            삼성청년소프트웨어아카데미 1학기 관통프로젝트
          </h2>
          <p id="child-modal-description">내용</p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

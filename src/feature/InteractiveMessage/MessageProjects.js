import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Box } from "@mui/material";
import ProjectNadeulSeoul from "./Projects/ProjectNadeulSeoul";
import ProjectSamsung from "./Projects/ProjectSamsung";
import ProjectTras from "./Projects/ProjectTras";
import ProjectGraduation from "./Projects/ProjectsGraduation";

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

export default function MessageProjects() {
  const x = useSelector((state) => state.main.x);
  const y = useSelector((state) => state.main.y);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const hadnleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (x === 400 && y === 400) {
      console.log("닿았지롱");
      hadnleOpen();
    } else {
      handleClose();
    }
  }, [x, y]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">나의 프로젝트...</h2>
          <p id="parent-modal-description">
            누군가는 내 노고를... 알아주리라 생각하며... 이렇게 기록을...
            남긴다...
          </p>
          <ProjectNadeulSeoul />
          <br />
          <ProjectSamsung />
          <br />
          <ProjectTras />
          <br />
          <ProjectGraduation />
        </Box>
      </Modal>
    </div>
  );
}

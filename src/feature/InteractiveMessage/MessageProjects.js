import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Box } from "@mui/material";
import ProjectTemplate from "./Projects/ProjectTemplate";
import projectInfo from './Projects/projectInfo.json'
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
  const movementValueByX = useSelector((state) => state.main.movementValueByX);
  const movementValueByY = useSelector((state) => state.main.movementValueByY);
  const startPosX = useSelector((state) => state.main.startPosX);
  const startPosY = useSelector((state) => state.main.startPosY);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const hadnleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (
      x <= startPosX + 8.5 * movementValueByX &&
      x >= startPosX + 7.5 * movementValueByX &&
      y <= startPosY - 5.5 * movementValueByY &&
      y >= startPosY - 6.5 * movementValueByY
    ) {
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
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: 400 }}>
          <h2 id="parent-modal-title">나의 프로젝트...</h2>
          <p id="parent-modal-description">
            누군가는 내 노고를... 알아주리라 생각하며... 이렇게 기록을...
            남긴다...
          </p>
          <p>
            혹시... 관심이 생겼다면... <a style={{ color: "red" }}>노션</a>에 더
            많은 정보가 있다하니... 꼭 들려주시길...
          </p>
          {projectInfo.map((project, i) => {
            return <ProjectTemplate key={i} project={project} />
          })}

        </Box>
      </Modal>
    </div>
  );
}

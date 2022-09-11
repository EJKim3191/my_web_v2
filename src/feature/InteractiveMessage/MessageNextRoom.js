import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Box, Button } from "@mui/material";

import { setChapter } from "../../feature/MainReducer"

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

export default function MessageNextRoom() {
  const dispatch = useDispatch();
  const x = useSelector((state) => state.main.x);
  const y = useSelector((state) => state.main.y);
  const movementValueByX= useSelector((state) => state.main.movementValueByX);
  const movementValueByY= useSelector((state) => state.main.movementValueByY);

  const startPosX = useSelector((state) => state.main.startPosX);
  const startPosY = useSelector((state) => state.main.startPosY);
  
  const chapter = useSelector((state) => state.main.chapter);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const hadnleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (
      x <= startPosX + 13.5 * movementValueByX &&
      x >= startPosX + 12.5 * movementValueByX &&
      y <= startPosY + 0.5 * movementValueByY &&
      y >= startPosY - 1.5 * movementValueByY
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
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: 350 }}>
          <h2 id="parent-modal-title">다음으로 이동하시겠습니까...?</h2>
          <p id="parent-modal-description">
            <Button onClick={()=>{
                console.log(chapter+1)
                dispatch(setChapter(chapter+1))}
                }>네</Button>
            <br/>
            <br/>
            <Button>아니요</Button>
          </p>
        </Box>
      </Modal>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Box } from "@mui/material";

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

export default function MessageContatct() {
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
    if (x === 100 && y === 100) {
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
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: 150 }}>
          <h2 id="parent-modal-title">Contact...</h2>
          <p id="parent-modal-description">
            <br />
            <a
              target="_blank"
              href="https://github.com/EJKim3191"
              rel="noreferrer"
            >
              👷Github
            </a>
            <br />
            <br />
            <a
              target="_blank"
              href="https://github.com/EJKim3191"
              rel="noreferrer"
            >
              💻Notion
            </a>
            <br />
            <br />
            <a
              target="_blank"
              href="https://eungjukim.netlify.app/"
              rel="noreferrer"
            >
              🚧Homepage V1
            </a>
            <br />
            <br />
            <a
              target="_blank"
              href="https://www.instagram.com/e_jukim/"
              rel="noreferrer"
            >
              💕Instagram
            </a>
            <br />
            <br />
            <a
              target="_blank"
              href="https://velog.io/@dmdwn3979"
              rel="noreferrer"
            >
              👨‍🏫Velog
            </a>
            <br />
            <br />
            <a>💌Email</a>
          </p>
        </Box>
      </Modal>
    </div>
  );
}

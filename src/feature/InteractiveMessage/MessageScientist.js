import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MessageScientist() {
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
    if (x === 600 && y === 600) {
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default MessageScientist;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Box, Button } from "@mui/material";

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
  const movementValueByX = useSelector((state) => state.main.movementValueByX);
  const movementValueByY = useSelector((state) => state.main.movementValueByY);
  const startPosX = useSelector((state) => state.main.startPosX);
  const startPosY = useSelector((state) => state.main.startPosY);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const hadnleOpen = () => {
    setOpen(true);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const beforePage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (
      x <= startPosX - 7.5 * movementValueByX &&
      x >= startPosX - 8.5 * movementValueByX &&
      y <= startPosY + 0.5 * movementValueByY &&
      y >= startPosY - 0.5 * movementValueByY
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: 400 }}>
          {page === 0 && <p id="modal-modal-title">Who am I...?</p>}
          <p id="modal-modal-description">
            {page === 0 && (
              <>
                π₯λ¦μλ€κ³  μκ°νμ λκ° μ§μ§ λλ¬΄ λ¦μλ€π₯
                <br />
                <br />
                <br /> κ°κ·Έλ§¨ λ°λͺμκ° νλ λ§μλλ€.
                <br />
                <br />
                νμ¬ μνλμ μ»€λ¦¬νλΌλ§ λ°λΌμ¨ μ μκ² μ§λ¬΄μ λν κΏκ³Ό ν₯λ―Έλ
                μ λ¬΄νμ΅λλ€.
                <br />
                <br />
                κ·Έλμ λ€μν κ²½νκ³Ό μ ν₯μ μ¦κ²Όλ μ λ‘μ¨λ λ€λ¦κ² λΈλ ₯μ΄λ κ²μ
                μΌμ±μ²­λμννΈμ¨μ΄μμΉ΄λ°λ―Έ μμ ν  μ μμμ΅λλ€.
                <br />
                <br />
                μ²μμΌλ‘ λΈλ ₯μ΄λ κ²μ κΉ¨λ«κ² λμκ³ , κ·Έκ²μ μ±ν ν  μ
                μμμ΅λλ€.
                <br />
                <br />
              </>
            )}
            {page === 1 && (
              <>
                μ΄κ³³μμ μ λ μ²«λ²μ§Έλ‘ βλΈλ ₯βνλ λ°©λ²μ μκ²λμμ΅λλ€.
                <br />
                <br />
                κΏκΎΈκ³ , κ°λ§νλ κ² μμ΄ λΈλ ₯μ κΈ°λνλ κ²μ λ§€μ° κΈ°λ§ν
                μκ°μ΄μμ΅λλ€.
                <br />
                <br />
                μκ³ λ¦¬μ¦ ν λ¬Έμ λ₯Ό λ§€μΌ νΈλ κ²μΌλ‘ λΆν° μ΄λ ν κ°λ°μκ° λκΈ°
                μνλκ² κΉμ§, μμ λͺ©νμμ ν° λͺ©νλ‘κΉμ§μ λͺ©ν μ€μ μ ν΅ν΄
                νλ£¨νλ£¨ λΈλ ₯νκ² λμμ΅λλ€.
                <br />
                <br />
                λλ²μ§Έλ‘ μ λ βκΏβμ μ€μ νκ² λμμ΅λλ€.
                <br /> μ΄λ ν μ§λ¬΄μ μκ΄μμ΄ λ¨λ€μ λλμ΄μ λ§μΆκ³  μΆμ΄,
                νμ¬μ Name Valueμ payμλ§ μ κ²½μ°κ³€ νμ΅λλ€.
                <br />
                <br />
                μμΌλ‘ μ΄λ ν κΏμ μ΄λ£¨κ³  μΆμκ°μ μ΄μ μ λμ΄ νμ¬λ μ κ°
                λ°μ ν  μ μκ³ , κΈ°μμ μ±μ₯κ°μΉκ° μμΌλ©°, ν¨κ» μ±μ₯ ν  μ μλ
                κ³³μ μ§μνκ³  μΆμ visionμ κ°κ² λμμ΅λλ€.
              </>
            )}
            {page === 2 && (
              <>
                <br />
                μ¬λμ μΈμ λ Burn Outμ΄ μ¨λ€κ³  μκ°ν©λλ€.
                <br />
                <br />
                λ§μΉ νλ²λ¦° λλ¬΄μ²λΌ λ¬΄κΈ°λ ₯νκ³  νλ€κ² λκ»΄μ§ λκ° μμ΅λλ€.
                <br />
                <br />
                νμ§λ§ μ λ μ€ν¨λ‘ νλ²λ¦° μ―μ΄λΌκ³  μκ°ν©λλ€.
                <br />
                <br />
                λ€μ‘μ μ μμ΄ νλ κ³Όκ±°λ₯Ό λ€λ‘, μ’μ ν₯μ μν΄ λ€μ νμ€λ₯Ό
                μ€λΉκ° λμκ³  κ³΅μ λμλ€κ³  μκ°ν©λλ€.
                <br />
                <br />
                μ΄λ ν νκ²½μμμλ μ΅μ μ λ€νκΈ° μν΄ κ·Έλ¦¬κ³  μ΅κ³ κ° λκΈ° μν
                μμΈλ₯Ό μ‘μλ€κ³  μκ°ν©λλ€.
                <br />
                <br />
                λκ΅¬λ³΄λ€λ μ΄μ¬ν, μ΅μ μ λ€νλ©° μ€μ€λ‘μ νμ κ·Έλ¦¬κ³  κ³ κ°μκ²
                μν κ²°κ³Ό, λ§μ‘±μ€λ½κ³  ν‘μ‘±ν κ²°κ³Όλ₯Ό λ΄κΈ° μν΄ ν­μ λΈλ ₯νλ
                κ°λ°μκ° λ  κ²μλλ€.
              </>
            )}
          </p>
          {page !== 0 && (
            <Button style={{ fontFamily: "neodgm_pro" }} onClick={beforePage}>
              go back..
            </Button>
          )}
          {page !== 2 && (
            <Button style={{ fontFamily: "neodgm_pro" }} onClick={nextPage}>
              next page..
            </Button>
          )}{" "}
          <Button
            onClick={handleClose}
            style={{ fontFamily: "neodgm_pro", right: "0vw" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
export default MessageScientist;

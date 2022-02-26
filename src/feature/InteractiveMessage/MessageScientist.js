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
    if (x === 300 && y === 100) {
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
        <Box sx={{ ...style, fontFamily: "neodgm_pro", width: 400 }}>
          {page === 0 && <p id="modal-modal-title">Who am I...?</p>}
          <p id="modal-modal-description">
            {page === 0 && (
              <>
                🔥늦었다고 생각했을 때가 진짜 너무 늦었다🔥
                <br />
                <br />
                <br /> 개그맨 박명수가 했던 말입니다.
                <br />
                <br />
                학사 생활동안 커리큘럼만 따라온 저에게 직무에 대한 꿈과 흥미는
                전무했습니다.
                <br />
                <br />
                그동안 다양한 경험과 유흥을 즐겼던 저로써는 뒤늦게 노력이란 것을
                삼성청년소프트웨어아카데미 에서 할 수 있었습니다.
                <br />
                <br />
                처음으로 노력이란 것을 깨닫게 되었고, 그것을 채화 할 수
                있었습니다.
                <br />
                <br />
              </>
            )}
            {page === 1 && (
              <>
                이곳에서 저는 첫번째로 “노력”하는 방법을 알게되었습니다.
                <br />
                <br />
                꿈꾸고, 갈망하는 것 없이 노력을 기대하는 것은 매우 기만한
                생각이었습니다.
                <br />
                <br />
                알고리즘 한 문제를 매일 푸는 것으로 부터 어떠한 개발자가 되기
                원하는것 까지, 작은 목표에서 큰 목표로까지의 목표 설정을 통해
                하루하루 노력하게 되었습니다.
                <br />
                <br />
                두번째로 저는 “꿈”을 설정하게 되었습니다.
                <br /> 어떠한 직무에 상관없이 남들의 눈높이에 맞추고 싶어,
                회사의 Name Value와 pay에만 신경쓰곤 했습니다.
                <br />
                <br />
                앞으로 어떠한 꿈을 이루고 싶은가에 초점을 두어 현재는 제가
                발전할 수 있고, 기업의 성장가치가 있으며, 함께 성장 할 수 있는
                곳을 지원하고 싶은 vision을 갖게 되었습니다.
              </>
            )}
            {page === 2 && (
              <>
                <br />
                사람은 언제나 Burn Out이 온다고 생각합니다.
                <br />
                <br />
                마치 타버린 나무처럼 무기력하고 힘들게 느껴질 때가 있습니다.
                <br />
                <br />
                하지만 저는 실패로 타버린 숯이라고 생각합니다.
                <br />
                <br />
                뒤잡을 수 없이 타던 과거를 뒤로, 좋은 향을 위해 다시 타오를
                준비가 되있고 공정되있다고 생각합니다.
                <br />
                <br />
                어떠한 환경속에서도 최선을 다하기 위해 그리고 최고가 되기 위한
                자세를 잡았다고 생각합니다.
                <br />
                <br />
                누구보다도 열심히, 최선을 다하며 스스로와 팀원 그리고 고객에게
                잘한 결과, 만족스럽고 흡족한 결과를 내기 위해 항상 노력하는
                개발자가 될 것입니다.
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
          <Button style={{ fontFamily: "neodgm_pro" }}>닫기</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default MessageScientist;

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { ProjectNadeulImg, ProjectSsafyImg, BoxContent } from "./styles";

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

export default function ProjectTemplate({project}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const projectImg = () => {
      console.log(project.title)
      if(project.title === '나들서울') return <ProjectNadeulImg />
      else if(project.title === '삼성청년소프트웨어아카데미 1학기 관통프로젝트') return <ProjectSsafyImg />
  }
  return (
    <React.Fragment>
    <Button style={{ fontFamily: "neodgm_pro" }} onClick={handleOpen}>
        {project.title}
    </Button>
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
        <Box sx={{ ...style, width: "50vw" }}>
            <BoxContent>
                <h2 id="child-modal-title">나들서울 프로젝트</h2>
                    {projectImg()}
                <br />
                    {project.description.split('\n').map((line, i) => {
                        return (<span key={i}>{line}<br/></span>)
                    })}
                    <Button
                        style={{ fontFamily: "neodgm_pro", right: "0vw" }}
                        onClick={handleClose}
                    >
                        닫기
                    </Button>
                </BoxContent>
            </Box>
        </Modal>
    </React.Fragment>
    );
}
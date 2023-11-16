import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SelectBlockv2 } from "../../Block/Select/SelectBlockv2";
import { InnerBoxContainer } from "./LinkModalStyle";

const style = {
  width: "80%",
  height: "80%",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface LinkModalProps {
  linkNum: number;
}

export default function LinkModal(props: LinkModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>경로설정</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InnerBoxContainer width="50%">
              <SelectBlockv2 data={[]} />
            </InnerBoxContainer>
            {/* ====정보=== */}
            <InnerBoxContainer width="50%" height="80%">
              <InnerBoxContainer width="30%" height="50%">
                링크 :
              </InnerBoxContainer>
              <InnerBoxContainer width="70%" height="50%">
                {props.linkNum}
              </InnerBoxContainer>
            </InnerBoxContainer>
            {/* ====버튼=== */}
            <InnerBoxContainer width="100%" height="20%">
              <Button onClick={handleClose}>저장</Button>
            </InnerBoxContainer>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

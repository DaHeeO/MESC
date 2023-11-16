import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as S from "../../Block/Select/SelectBlockStyle";
import * as C from "../../common/theme";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  deleteBlock: (item: number) => void;
  itemId: number;
  chatbotTitle: string;
}

export default function AboutModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <S.RedButton onClick={handleOpen}>
        <S.Text size={16} color={C.colors.buttonRed} weight={500}>
          삭제하기
        </S.Text>
      </S.RedButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              챗봇삭제
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1rem",
                margin: "1rem",
              }}
            >
              {props.chatbotTitle}번 블록을 삭제하시겠습니까?
            </div>
            <div
              style={{
                justifyContent: "space-around",
                alignContent: "center",
                display: "flex",
              }}
            >
              <S.RedButton
                onClick={() => {
                  props.deleteBlock(props.itemId);
                  handleClose();
                }}
                style={{ width: "20%" }}
              >
                <S.Text size={16} color={C.colors.buttonRed} weight={500}>
                  삭제
                </S.Text>
              </S.RedButton>
              <S.BlueButton onClick={handleClose} style={{ width: "20%" }}>
                <S.Text size={16} color={C.colors.buttonBlue} weight={500}>
                  취소
                </S.Text>
              </S.BlueButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

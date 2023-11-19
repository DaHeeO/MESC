import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SelectBlockv2 } from "../../Block/Select/SelectBlockv2";
import { InnerBoxContainer } from "./LinkModalStyle";
import { LinkIdState } from "../../../state/linkId";
import { useRecoilState } from "recoil";
import { CardState, Card } from "../../../state/create/BlockState";
import { Btn, ComponentItem } from "../../../state/create/CreateState";

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
  card: Card;
  btnIndex: number;
}

export default function LinkModal(props: LinkModalProps) {
  const [cards, setCards] = useRecoilState(CardState);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    // setCards((prevCards) => {
    //   const originBtn = props.card.componentList[props.btnIndex].object;
    //   const btn: Btn = {
    //     ...originBtn,
    //     link: linkId,
    //   };
    //   const originComponent = props.card.componentList[props.btnIndex];
    //   const componentItem: ComponentItem = {
    //     ...originComponent,
    //     object: btn,
    //   };
    //   const originComponentList = props.card.componentList;
    //   const componentList = originComponentList.map((component) => {
    //     return component.sequence === originComponent.sequence
    //       ? componentItem
    //       : component;
    //   });
    //   return prevCards.map((nowCard) => {
    //     // console.log(nowCard.sequence, "   ", props.card.sequence);
    //     return nowCard.sequence === props.card.sequence
    //       ? { ...nowCard, componentList: componentList }
    //       : nowCard;
    //   });
    // });
    // setOpen(false);
    // console.log(cards);
  };
  const [linkId, setLinkId] = useRecoilState(LinkIdState);

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
              <SelectBlockv2 type={"linkModal"} />
            </InnerBoxContainer>
            {/* ====정보=== */}
            <InnerBoxContainer width="50%" height="80%">
              <InnerBoxContainer width="30%" height="50%">
                링크 :
              </InnerBoxContainer>
              <InnerBoxContainer width="70%" height="50%">
                {linkId}
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

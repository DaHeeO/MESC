//React
import { useState } from "react";
// style component
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// recoil
import { useRecoilState } from "recoil";
import { CardIdState } from "../../state/CardIdState";

interface SelectLabelsProps {
  onType: (type: any) => void;
}

export const SelectLabels = ({ onType }: SelectLabelsProps) => {
  // export const SelectLabels = (CardType: string) => {
  const [cardIdState, setCardIdState] = useState("TX");
  // select box에서 선택된 값 저장하기
  // const [cardType, setcardType] = useRecoilState(CardIdState);

  // let cardType = "TX";
  const handleChange = (event: SelectChangeEvent) => {
    // setcardType(event.target.value);
    // console.log("cardType===================", cardType);
    // cardType = event.target.value;
    setCardIdState(event.target.value);
    onType(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 80,
        height: "40px",
        justifyContent: "center",
      }}
    >
      <Select
        value={cardIdState}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={{ height: "90%" }}
      >
        <MenuItem value={"TX"}>말풍선</MenuItem>
        <MenuItem value={"CH1"}>버튼1개 박스</MenuItem>
        <MenuItem value={"CH2"}>버튼2개 박스</MenuItem>
        <MenuItem value={"TA"}>스크롤박스</MenuItem>
        {/* <MenuItem value={30}>모달</MenuItem> */}
      </Select>
    </FormControl>
  );
};

// style component
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// recoil
import { useRecoilState } from "recoil";
import { CardIdState } from "../../state/CardIdState";

export const SelectLabels = () => {
// export const SelectLabels = (CardType: string) => {

  // select box에서 선택된 값 저장하기
  const [cardType, setcardType] = useRecoilState(CardIdState);

  const handleChange = (event: SelectChangeEvent) => {
    setcardType(event.target.value);
    console.log("cardType===================", cardType);
  };
  const CardType = cardType;

  return (
    <FormControl
      sx={{
        minWidth: 100,
        height: "40px",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Select
        value={CardType}
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

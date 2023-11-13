import * as React from "react";
// style component
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// recoil
import { useRecoilState } from "recoil";
import { ComponentIdState } from "../../state/ComponentId";

export const SelectLabels = () => {
  const [cardType, setcardType] = useRecoilState(ComponentIdState);

  const handleChange = (event: SelectChangeEvent) => {
    setcardType(event.target.value);
    console.log("cardType", cardType);
  };

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
        value={cardType}
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

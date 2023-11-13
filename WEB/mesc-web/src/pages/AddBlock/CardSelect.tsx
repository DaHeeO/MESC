import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectLabels() {
  const [cardType, setcardType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setcardType(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        value={cardType}
        onChange={handleChange}
        // displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"TX"}>말풍선</MenuItem>
        <MenuItem value={"CH1"}>버튼1개 박스</MenuItem>
        <MenuItem value={"CH2"}>버튼2개 박스</MenuItem>
        <MenuItem value={"TA"}>스크롤박스</MenuItem>
        <MenuItem value={30}>모달</MenuItem>
      </Select>
    </FormControl>
  );
}

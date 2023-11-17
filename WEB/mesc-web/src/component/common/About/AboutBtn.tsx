import Button from "@mui/material/Button";
//mui
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

interface BtnProps {
  content?: string;
  size?: string;
  onClick?: () => void;
  tooltip?: string;
  color?: string;
  onClickSave?: (id: number) => void;
}

export const ContainedBtn = (props: BtnProps) => {
  return (
    <Button variant="contained" onClick={props.onClick}>
      {props.content}
    </Button>
  );
};

export const OutlinedBtn = (props: BtnProps) => {
  return (
    <Button variant="outlined" onClick={props.onClick}>
      {props.content}
    </Button>
  );
};

export const TextBtn = (props: BtnProps) => {
  return <Button variant="text">{props.content}</Button>;
};

export const SaveBtn: React.FC<BtnProps> = (props) => {
  return (
    <Tooltip title="블록저장" arrow>
      <Fab
        color="success"
        onClick={props.onClick}
        sx={{ position: "absolute", bottom: 16, right: 100 }}
      >
        <CheckOutlinedIcon />
      </Fab>
    </Tooltip>
  );
};

export default function BasicSpeedDial(props: BtnProps) {
  return (
    <Tooltip title="카드추가" arrow>
      <Fab
        color="primary"
        onClick={props.onClick}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <SpeedDialIcon />
      </Fab>
    </Tooltip>
  );
}

export const CardBtn = (props: BtnProps) => {
  return (
    <Tooltip title={props.tooltip} arrow>
      <Button variant="contained" size="small" onClick={props.onClick}>
        {props.content}
      </Button>
    </Tooltip>
  );
};

export function AddSpeedDial(props: BtnProps) {
  return (
    <Tooltip title="카드추가" arrow>
      <Fab
        color="primary"
        onClick={props.onClick}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <SpeedDialIcon />
      </Fab>
    </Tooltip>
  );
}

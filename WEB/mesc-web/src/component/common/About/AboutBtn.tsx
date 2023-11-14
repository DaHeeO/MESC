import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface BtnProps {
  content: string;
  size?: string;
  onClick?: () => void;
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

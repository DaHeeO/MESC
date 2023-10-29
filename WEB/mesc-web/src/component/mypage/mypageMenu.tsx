import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logout = () => {
    alert("로그아웃 되었습니다.");
  };
  const goMyChatbot = () => {
    navigate("/MyChatbot");
  };
  const goMypage = () => {
    navigate("/Mypage");
  };

  const UserName = "김싸피";

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {UserName} 님
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            goMypage();
          }}
        >
          회원정보 수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            goMyChatbot();
          }}
        >
          내 챗봇
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          로그아웃
        </MenuItem>
      </Menu>
    </div>
  );
}

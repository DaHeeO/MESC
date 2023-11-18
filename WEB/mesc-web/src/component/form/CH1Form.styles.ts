import styled from "styled-components";
import { colors } from "../common/theme";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
  background-color: ${colors.buttonBlueBackground};
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #7879f1;
  border-radius: 10px 10px 0px 0px;
`;

export const TopInput = styled.textarea`
  width: 40%;
  height: 50%;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  outline: none;
  font-family: inherit;
  overflow-wrap: break-word; /* or overflow-wrap: anywhere; for more aggressive line breaking */
  resize: none; /* Disable textarea resize */

  &::placeholder {
    color: white;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
`;

export const Context = styled.textarea`
  padding-top: 10px;
  width: 90%;
  height: 30%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: "#1B2559";
  font-weight: 500;
  outline: none;
  font-family: inherit;
  overflow-wrap: break-word; /* or overflow-wrap: anywhere; for more aggressive line breaking */
  resize: none; /* Disable textarea resize */

  &::placeholder {
    color: #1b2559;
  }
`;

export const Button = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebecef;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 16px;
  color: "#1B2559";
  font-weight: 600;
  outline: none;
  font-family: inherit;

  &::placeholder {
    color: #1b2559;
  }
`;

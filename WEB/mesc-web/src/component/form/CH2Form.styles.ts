import styled from "styled-components";
import { colors } from "../common/theme";

interface FormProps {
  width?: string;
  height?: string;
  radius?: string;
  backColor?: string;
  justify?: string;
  align?: string;
  flexDirection?: string;
}

export const FormTextarea = styled.textarea`
  width: 90%;
  height: 90%;
  font-size: 1.5rem;
`;

export const FormInput = styled.input`
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "90%"};
  border: 1px solid #000; /* Set border style and color */
  background-color: transparent; /* Set background color to transparent */
  outline: none; /* Remove the default input outline */
  padding: 8px; /* Adjust padding as needed */
`;

export const ComponentContainer = styled.div<FormProps>`
  background-color: ${(props) => props.backColor};
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const FormBtn = styled.div<FormProps>`
  width: 90%;
  height: ${(props) => props.height || "90%"};
  border-radius: 10px;
  border: none;
  background-color: #ebecef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TAContainer = styled.div<FormProps>`
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "90%"};
  background-color: #f5f8fc;
  border-radius: 10px;
  overflow-x: scroll;
  overflow-y: scroll;
`;

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
  background-color: #3d55a0;
  border-radius: 10px 10px 0px 0px;
`;

export const TopInput = styled.textarea`
  width: 50%;
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

  &::-webkit-scrollbar {
    width: 0;
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
  height: 30%;
  diplay: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebecef;
  border-radius: 10px;
`;

export const ButtonText = styled.textarea`
  padding-top: 18px;
  width: 100%;
  height: 90%;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 16px;
  color: "#1B2559";
  font-weight: 600;
  outline: none;
  font-family: inherit;
  overflow-wrap: break-word; /* or overflow-wrap: anywhere; for more aggressive line breaking */
  resize: none; /* Disable textarea resize */

  &::placeholder {
    color: #1b2559;
  }
`;

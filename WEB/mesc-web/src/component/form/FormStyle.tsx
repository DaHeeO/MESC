import styled from "styled-components";

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

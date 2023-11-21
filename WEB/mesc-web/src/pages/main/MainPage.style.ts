import styled from "styled-components";
import Sonny from "../../assets/img/Mr.Son.jpg";

interface TextProps {
  size: number;
  color: string;
  weight?: number;
}

export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const BlockContainer = styled.div`
  height: 95%;
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const BlockHeader = styled.div`
  height: 10%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SeeMore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const BlockBody = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const RightDiv = styled.div`
  height: 95%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InfoDiv = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
`;

export const InfoBody = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const UserImg = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  justify-content: center;
  background-image: url(${Sonny});
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

export const UpperText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RoleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaf0f7;
  border-radius: 10px;
  padding: 2px 10px;
  margin-left: 10px;
`;

export const FaqDiv = styled.div`
  height: 54%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
`;

export const FaqBody = styled.div`
  height: 80%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #f6f8fd;
  justify-content: center;
  align-items: center;
`;

export const FaqBottom = styled.div`
  height: 10%;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

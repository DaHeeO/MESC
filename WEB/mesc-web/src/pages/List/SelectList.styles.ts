import styled from 'styled-components';
import { colors } from '../../component/common/theme';

interface TextProps {
    size: number;
    color: string;
    weight?: number;
}

interface TableProps {
    width: string;
    justify?: string | undefined;
}

export const Text = styled.text<TextProps>`
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    font-weight: ${props => (props.weight ? props.weight : 400)};
`;

export const Total = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const TitleBox = styled.div`
    width: 90%;
    height: 14%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
`;

export const TitleDiv = styled.div<TableProps>`
    width: ${props => props.width};
    padding: 2px 10px;
    display: flex;
    align-items: center;
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};

    // border: 1px solid #ddd;
    // background-color: green;
`;

export const TableContainer = styled.div`
    width: 100%;
    height: 85%;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TableDiv = styled.div`
    width: 90%;
    height: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0px;

    &:hover {
        background-color: ${colors.buttonBlueBackground};
        cursor: pointer;
    }
`;

export const RedButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    border-radius: 5px;
    background-color: ${colors.buttonRedBackground};
    &:hover {
        cursor: pointer;
    }
`;

export const BlueButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    border-radius: 5px;
    background-color: ${colors.buttonBlueBackground};
    &:hover {
        cursor: pointer;
    }
`;

export const AddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.buttonBlue};
    border-radius: 8px;
    padding: 6px 20px;
    margin-left: 10px;
    &:hover {
        box-shadow: 0px 0px 10px rgba(68, 97, 242, 0.3);
        cursor: pointer;
    }
`;

export const CancelBox = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${colors.buttonRedBackground};
`;

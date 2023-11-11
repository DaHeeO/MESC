import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

export const // mesc 말하는 텍스트 창
  MescContainer = styled.View`
    background-color: ${colors.icy};
    border-radius: 10px;
    min-height: 25px;
    height: auto;
    border: solid 1px red;
    // margin-bottom: 10px;
    margin-top: 10px;
    padding: 3px;
  `;

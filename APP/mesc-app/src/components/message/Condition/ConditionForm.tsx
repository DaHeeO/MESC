import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ConditionState} from '../../../states/ConditionState';
import {DropdownState} from '../../../states/DropdownState';
import {FormContainer, TextBox, TextBtn} from './ConditionFormStyle';
import {ProcessSelect} from '../../common/about/ProcessSelect';
import {LineSelect} from '../../common/about/LineSelect';
import {OkayBtn} from '../Btn/SaveBtn';
import {DatePicker} from '../../common/about/AboutDate';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {getBlock} from '../../../../Api';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {ActionIdState} from '../../../states/ReadDataState';
import * as S from './ConditionFormStyle';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import {drop, first, set} from 'lodash';

export const ConditionForm = () => {
  // Recoil에서 조건과 Dropdown 꺼내오기
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [condition, setCondition] = useRecoilState(ConditionState);
  const [dropdownList, setDropdownList] = useRecoilState(DropdownState);
  const [isModalPossible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);

  // 액션 아이디
  const [actionId, setActionId] = useRecoilState(ActionIdState);

  // 조건 초기화 버튼
  // const resetCondition = () => {
  //   setCondition({
  //     process: '',
  //     startDate: '',
  //     endDate: '',
  //     line: '',
  //   });
  // };

  const firstTableName = dropdownList[0].tableName;
  const firstColumnName = dropdownList[0].columnName;
  const secondTableName = dropdownList[1].tableName;
  const secondColumnName = dropdownList[1].columnName;

  return (
    <FormContainer direction="column">
      {/* 조건초기화, 적용 버튼 Container */}
      <S.Header>
        {/* 조건초기화 */}
        {/* <FormContainer
          width="100px"
          height="70%"
          // style={{backgroundColor: 'red'}}
        >
          <TextBtn
            onPress={resetCondition}
            // style={{backgroundColor: 'pink'}}
          >
            <TextBox>조건초기화</TextBox>
          </TextBtn>
        </FormContainer> */}
        {/* 적용버튼 */}
        <FormContainer
          width="100px"
          height="70%"
          // style={{backgroundColor: 'blue'}}
        >
          <OkayBtn
            content={'적용'}
            color="#ECECEC"
            onPress={() => {
              const conditionsQuery = `where ${firstTableName}.${firstColumnName} = ${condition.product} and ${secondTableName}.${secondColumnName} = ${condition.line} and ${firstTableName}.WO_YMD between ${condition.startDate} and ${condition.endDate}`;
              setIsModalVisible(false);

              console.log(condition.query);

              console.log('쿠리=====================', conditionsQuery);

              const body = {
                actionId: actionId,
                conditions: conditionsQuery,
                queryList: null,
              };

              const newBlock = getBlock(4, body);
              console.log(newBlock);
            }}
          />
        </FormContainer>
      </S.Header>

      {/* 조건 Container */}
      <FormContainer height="90%" direction="column">
        {/* 조건 1 */}
        <FormContainer
          height="20%"
          width="100%"
          direction="column"
          style={{
            // backgroundColor: 'gold',
            zIndex: 4000,
          }}>
          <FormContainer height="30%" width="100%">
            <TextBox>{dropdownList[0].name}</TextBox>
          </FormContainer>

          <FormContainer
            height="70%"
            width="90%"
            align="flex-start"
            // style={{backgroundColor: 'skyblue'}}
          >
            {/* AboutSelect 컴포넌트에 dropdownList를 props로 전달 */}
            <ProcessSelect valuesList={dropdownList[0].valuesList} />
          </FormContainer>
        </FormContainer>

        {/* 날짜조건 */}
        <FormContainer
          height="40%"
          width="100%"
          direction="column"
          style={{
            // backgroundColor: 'pink',
            zIndex: 2900,
          }}>
          <FormContainer
            height="16%"
            width="100%"
            align="flex-start"
            // style={{backgroundColor: 'gray'}}
          >
            <TextBox>기간설정</TextBox>
          </FormContainer>

          <FormContainer
            height="80%"
            width="93%"
            align="flex-start"
            direction="column"
            // style={{backgroundColor: 'skyblue'}}
          >
            <FormContainer
              width="100%"
              height="50%"
              // style={{backgroundColor: 'yellow'}}
            >
              <DatePicker date={'start'} />
            </FormContainer>
            <FormContainer width="100%" height="50%">
              <DatePicker date={'end'} />
            </FormContainer>
          </FormContainer>
        </FormContainer>
        {/* 조건3 */}

        <FormContainer
          height="24%"
          width="100%"
          direction="column"
          justify="flex-start"
          style={{
            zIndex: 3000,
          }}>
          <FormContainer height="30%" width="100%">
            <TextBox>{dropdownList[1].name}</TextBox>
          </FormContainer>

          <FormContainer height="50%" width="90%" align="flex-start">
            {/* AboutSelect 컴포넌트에 dropdownList를 props로 전달 */}
            <LineSelect valuesList={dropdownList[1].valuesList} />
          </FormContainer>
        </FormContainer>
      </FormContainer>
    </FormContainer>
  );
};

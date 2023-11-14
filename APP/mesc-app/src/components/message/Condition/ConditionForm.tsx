import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ConditionState} from '../../../states/ConditionState';
import {DropdownState} from '../../../states/DropdownState';
import {FormContainer, TextBox, TextBtn} from './ConditionFormStyle';
import {ProcessSelect} from '../../common/about/ProcessSelect';
import {LineSelect} from '../../common/about/LineSelect';
import {OkayBtn} from '../Btn/SaveBtn';
import {DatePicker} from '../../common/about/AboutDate';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import * as S from './ConditionFormStyle';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

export const ConditionForm = () => {
  // Recoil에서 조건과 Dropdown 꺼내오기
  const [condition, setCondition] = useRecoilState(ConditionState);
  const [dropdownList, setDropdownList] = useRecoilState(DropdownState);
  const [isModalPossible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);

  // 조건 초기화 버튼
  // const resetCondition = () => {
  //   setCondition({
  //     process: '',
  //     startDate: '',
  //     endDate: '',
  //     line: '',
  //   });
  // };

  return (
    <FormContainer direction="column">
      {/* 조건초기화, 적용 버튼 Container */}
      <S.Header style={{backgroundColor: 'yellow'}}>
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
              console.log('hii');
              console.log(condition);
              // const newQuery = condition.query + " " + where
              setIsModalVisible(false);
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
            backgroundColor: 'gold',
            zIndex: 3000,
          }}>
          <FormContainer height="30%" width="100%">
            <TextBox>{dropdownList[0].columnName}</TextBox>
          </FormContainer>

          <FormContainer
            height="70%"
            width="90%"
            align="flex-start"
            style={{backgroundColor: 'skyblue'}}>
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
            backgroundColor: 'pink',
            zIndex: 2900,
          }}>
          <FormContainer
            height="20%"
            width="100%"
            style={{backgroundColor: 'gray'}}>
            <TextBox>기간설정</TextBox>
          </FormContainer>

          <FormContainer
            height="80%"
            width="95%"
            align="flex-start"
            direction="column"
            style={{backgroundColor: 'skyblue'}}>
            <FormContainer
              width="100%"
              height="50%"
              style={{backgroundColor: 'yellow'}}>
              <DatePicker date={'start'} />
            </FormContainer>
            <FormContainer width="100%" height="50%">
              <DatePicker date={'end'} />
            </FormContainer>
          </FormContainer>
        </FormContainer>
        {/* 조건3 */}

        <FormContainer
          height="30%"
          width="100%"
          direction="column"
          style={{
            zIndex: 3000,
          }}>
          <FormContainer height="30%" width="100%">
            <TextBox>{dropdownList[1].columnName}</TextBox>
          </FormContainer>

          <FormContainer height="70%" width="90%" align="flex-start">
            {/* AboutSelect 컴포넌트에 dropdownList를 props로 전달 */}
            <LineSelect valuesList={dropdownList[1].valuesList} />
          </FormContainer>
        </FormContainer>
      </FormContainer>
    </FormContainer>
  );
};

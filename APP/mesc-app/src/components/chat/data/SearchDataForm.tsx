import React, {useState, useEffect} from 'react';
import * as S from './SearchDataForm.styles';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBtn from '../../../assets/icons/searchbtn.svg';
import NextBtn from '../../../assets/icons/nextBtn.svg';
import {useRecoilValue, useRecoilState} from 'recoil';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {getBlock} from '../../../../Api';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import UserMessage from '../UserMessage';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {is} from 'date-fns/locale';
import {ActionIdState, ActionIdTitleState} from '../../../states/ReadDataState';
import {ProcessNameState} from '../../../states/ProcessNameState';
import {LoadingState} from '../../../states/LoadingState';
import {set} from 'lodash';

type ButtonItem = {
  id: number;
  name: string;
  linkType: string;
  link: string;
  actionId: number;
};

const SearchDataForm = () => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  //액션 아이디
  const [actionId, setActionId] = useRecoilState(ActionIdState);
  const [processName, setProcessName] = useState<string[]>([]);
  //액션 타이틀
  const [actionIdTitle, setActionIdTitle] = useRecoilState(ActionIdTitleState);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  // 모달 띄우기 관련
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isWordSelected, setIsWordSelected] = useState(false);
  const [isLoading, setIsLoading] = useRecoilState(LoadingState);
  const cardList = block.cardList;

  const mlCard = cardList.find(card => card.cardType === 'ML');

  useEffect(() => {
    if (mlCard && Array.isArray(mlCard.button)) {
      const buttonNames = mlCard.button.map(btn => btn.name);
      setProcessName(prevProcessNames => [...prevProcessNames, ...buttonNames]);
    }
  }, [mlCard]);

  const handleButtonClick = async (button: ButtonItem) => {
    setIsLoading(true);
    // mlCard의 button 배열에서 각 name 추출 및 추가
    setIsModalVisible(false);
    setChatbotHistory([
      ...chatbotHistory,
      <UserMessage message={button.name} />,
    ]);

    setActionId(button.actionId);
    const body = {
      actionId: button.actionId,
      title: button.name,
      conditions: '',
    };

    const block = await getBlock(4, body);
    // console.log('block================', block);
    setIsLoading(false);
    setBlock(block);
    setActionIdTitle(button.name);
  };

  return (
    <S.Container>
      {/* =========================== */}
      {/* <S.InputContainer>
        <S.SearchInput>
          <S.ImageBox>
            <SearchBtn />
          </S.ImageBox>
          <S.SearchText placeholder="검색어를 입력하세요" />
        </S.SearchInput>
      </S.InputContainer> */}
      {/* =========================== */}
      <S.ButtonContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mlCard &&
            mlCard.button &&
            mlCard.button.map((button: ButtonItem) => (
              <S.ButtonRow
                key={button.id}
                onPress={() => handleButtonClick(button)}>
                <S.ButtonName>{button.name}</S.ButtonName>
                <S.ImageBox>
                  <NextBtn />
                </S.ImageBox>
              </S.ButtonRow>
            ))}
        </ScrollView>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default SearchDataForm;

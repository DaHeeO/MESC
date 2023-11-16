// React
import { useState } from "react";

//Recoil
import { useRecoilState } from "recoil";
import { FAQState } from "../../state/FAQState";
import { FAQListState } from "../../state/FAQState";

//style
import * as S from "./Faq.style";
import * as C from "../../component/common/theme";

// Components
import { AboutBody } from "../../component/common/About/AboutBody";
import { AboutContainer } from "../../component/common/About/AboutContainer";
import { Header } from "../../component/common/Header/Header";
import { FAQBlock } from "../../component/Block/FAQ/FAQBlock";
import { FAQForm } from "../../component/Block/FAQ/FAQForm";

//etc

export const Faq = () => {
  const [focusedButtonIndex, setFocusedButtonIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useRecoilState(FAQState);
  const [FAQList, setFAQList] = useRecoilState(FAQListState);
  const [addButton, setAddButton] = useState(false);

  const handleButtonClick = (index: number) => {
    setFocusedButtonIndex(index);
  };

  const handleAddButtonClick = () => {
    setSelectedItem(null);
    setAddButton(true);
  };

  const handleCancelButtonClick = () => {
    setSelectedItem(null);
    setAddButton(false);
  };

  return (
    // 메인페이지 전체
    <AboutBody>
      {/* 헤더 height: 13%  width 89% */}
      <Header />
      <AboutContainer
        height="87%"
        width="89%"
        justifyContent="space-between"
        align="flex-start"
      >
        {/* MainBody의 왼쪽 - FAQ전체 조회 */}
        <S.LeftDiv>
          <S.LeftHeader>
            <S.HeaderDiv>
              <S.CategoryDiv>
                <S.Text
                  size={18}
                  color={C.colors.textBlack}
                  weight={700}
                  style={{ paddingRight: "30px" }}
                >
                  FAQ
                </S.Text>
                <S.ButtonHug
                  isFocused={focusedButtonIndex === 0}
                  onClick={() => handleButtonClick(0)}
                >
                  <S.ButtonText isFocused={focusedButtonIndex === 0}>
                    전체보기
                  </S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug
                  isFocused={focusedButtonIndex === 1}
                  onClick={() => handleButtonClick(1)}
                >
                  <S.ButtonText isFocused={focusedButtonIndex === 1}>
                    로그인
                  </S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug
                  isFocused={focusedButtonIndex === 2}
                  onClick={() => handleButtonClick(2)}
                >
                  <S.ButtonText isFocused={focusedButtonIndex === 2}>
                    챗봇
                  </S.ButtonText>
                </S.ButtonHug>
                <S.ButtonHug
                  isFocused={focusedButtonIndex === 3}
                  onClick={() => handleButtonClick(3)}
                >
                  <S.ButtonText isFocused={focusedButtonIndex === 3}>
                    연락처
                  </S.ButtonText>
                </S.ButtonHug>
              </S.CategoryDiv>
              {focusedButtonIndex !== 0 && (
                <S.AddButton onClick={handleAddButtonClick}>
                  <S.Text
                    size={16}
                    color={C.colors.buttonBlueBackground}
                    weight={500}
                  >
                    추가
                  </S.Text>
                </S.AddButton>
              )}
            </S.HeaderDiv>
          </S.LeftHeader>
          <S.LeftBody>
            <FAQBlock data={[]} focusedIndex={focusedButtonIndex} />
          </S.LeftBody>
        </S.LeftDiv>
        {/* MainBody의 오른쪽 - FAQ 추가 폼*/}
        <S.RightDiv>
          {(selectedItem !== null || addButton) && (
            <FAQForm
              data={[]}
              onCancel={handleCancelButtonClick}
              category={focusedButtonIndex}
            />
          )}
        </S.RightDiv>
      </AboutContainer>
    </AboutBody>
  );
};

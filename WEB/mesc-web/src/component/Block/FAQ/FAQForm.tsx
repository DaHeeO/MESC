// React
import React, { useEffect, useState } from "react";

// style
import * as S from "./FAQForm.styles";
import * as C from "../../common/theme";

// api
import { api } from "../../../apis/Api";
import { useRecoilState } from "recoil";
import { FAQState } from "../../../state/FAQState";

// function

interface TableProps {
  data: any;
  onCancel: () => void;
  category: number;
}

interface FAQItem {
  question: string;
  answer: string;
  section: {
    id: number;
    name: string;
  };
}

export const FAQForm: React.FC<TableProps> = ({ data, onCancel, category }) => {
  const [selectedItem, setSelectedItem] = useRecoilState(FAQState);
  const [question, setQuestion] = useState(
    selectedItem ? selectedItem.question : ""
  );
  const [answer, setAnswer] = useState(selectedItem ? selectedItem.answer : "");
  const [FAQId, setFAQId] = useState(selectedItem ? selectedItem.id : 0);

  // category 이름 변경
  const categoryName = ["전체보기", "로그인", "챗봇", "연락처"];

  useEffect(() => {
    setQuestion(selectedItem ? selectedItem.question : "");
    setAnswer(selectedItem ? selectedItem.answer : "");
  }, [selectedItem]);

  const handleCancelButtonClick = () => {
    setSelectedItem(null);
    onCancel();
  };

  const handleConfirmButtonClick = () => {
    const updatedFAQItem = {
      id: FAQId,
      question: question,
      answer: answer,
      section: {
        id: category,
        name: categoryName[category],
      },
    };

    // Recoil 상태 업데이트
    setSelectedItem(updatedFAQItem);

    //api 호출
    //추가
    if (FAQId === 0) {
      api
        .post(`faq`, {
          question: question,
          answer: answer,
          sectionId: category,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // 수정
    else {
      console.log(FAQId, question, answer, category);
      api
        .patch(`/faq/${FAQId}`, {
          question: question,
          answer: answer,
          sectionId: category,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setSelectedItem(null);
    onCancel();
  };

  return (
    <S.RightBody>
      {/* Header */}
      <S.FormHeader>
        <S.Text
          size={18}
          color={C.colors.textBlack}
          weight={700}
          style={{ paddingRight: "10px" }}
        >
          카테고리
        </S.Text>
        <S.ButtonHug color={C.colors.buttonBlueBackground}>
          <S.ButtonText>
            {selectedItem !== null
              ? selectedItem.section.name
              : categoryName[category]}
          </S.ButtonText>
        </S.ButtonHug>
      </S.FormHeader>
      <S.FormBody>
        <S.Form>
          <S.TitleBox>
            <S.Text
              size={18}
              color={C.colors.textBlack}
              weight={700}
              style={{ paddingRight: "10px" }}
            >
              질문
            </S.Text>
            <S.Text
              size={16}
              color={"#94918A"}
              weight={500}
              style={{ paddingRight: "10px" }}
            >
              (* 필수 입력칸 입니다.)
            </S.Text>
          </S.TitleBox>
          <S.TextBox height={100}>
            <S.Input
              placeholder="질문을 입력해주세요."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </S.TextBox>
        </S.Form>
        <S.Form>
          <S.TitleBox>
            <S.Text
              size={18}
              color={C.colors.textBlack}
              weight={700}
              style={{ paddingRight: "10px" }}
            >
              답변
            </S.Text>
            <S.Text
              size={16}
              color={"#94918A"}
              weight={500}
              style={{ paddingRight: "10px" }}
            >
              (* 필수 입력칸 입니다.)
            </S.Text>
          </S.TitleBox>
          <S.TextBox height={200}>
            <S.Input
              placeholder="질문을 입력해주세요."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </S.TextBox>
        </S.Form>
      </S.FormBody>

      <S.FormBottom>
        <S.ButtonFix
          color={C.colors.buttonRedBackground}
          onClick={handleCancelButtonClick}
        >
          <S.Text size={16} color={C.colors.buttonRed} weight={600}>
            취소
          </S.Text>
        </S.ButtonFix>
        <S.ButtonFix
          color={C.colors.buttonBlue}
          onClick={handleConfirmButtonClick}
        >
          <S.Text size={16} color={C.colors.buttonBlueBackground} weight={600}>
            확인
          </S.Text>
        </S.ButtonFix>
      </S.FormBottom>
    </S.RightBody>
  );
};

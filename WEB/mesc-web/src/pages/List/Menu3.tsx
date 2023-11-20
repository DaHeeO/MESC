//React
import { useEffect, useState } from 'react';
// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { CreatBlockState } from '../../state/create/AddBlock';
import { BlockState, Card, CardState, Btn, ComponentItem } from '../../state/create/CreateState'; // Card interface
import { CardIdState } from '../../state/CardIdState';
// API
import { api } from '../../apis/Api';
// style
import * as S from './Menu3.styles';
import * as C from '../../component/common/theme';
// component
import BasicSpeedDial from '../../component/common/About/AboutBtn';
import { AddCardComponent } from '../../component/page/AddCard';
import { AboutContainer } from '../../component/common/About/AboutContainer';
import { AboutBody } from '../../component/common/About/AboutBody';
import { Header } from '../../component/common/Header/Header';
import { SaveBtn } from '../../component/common/About/AboutBtn';
import { SelectList } from '../List/SelectList';
import { CardListState } from '../../state/read/GetCardList';
import { AddSpeedDial } from '../../component/common/About/AboutBtn';
import { TxTaState } from '../../state/create/CreateState';
import { CH1Form } from '../../component/form/CH1Form';
import { TAForm } from '../../component/form/TAForm';
import { CH2Form } from '../../component/form/CH2Form';
import { TXForm } from '../../component/form/TXForm';
import { SelectListPlusbutton } from '../../state/SelectListPlusButton';
import { AllActionIdList } from '../List/AllActionIdList';
import { ActionIdQuery } from '../../state/ActionIdQuery';
import { ShowActionIdQuery } from '../../state/ShowActionIdQuery';
import { DataListBody } from '../../state/DataListBody';
import { log } from 'console';
import { AddDataListSavePoint } from '../../state/AddDataListSavePoint';

export const Menu3 = () => {
    // =====================================================================

    const [plusbutton, setPlusbutton] = useRecoilState(SelectListPlusbutton);
    const [actionIdQuery, setActionIdQuery] = useRecoilState(ActionIdQuery);
    // 쿼리 페이지 true일 때만 보여주기
    const [showActionIdQuery, setShowActionIdQuery] = useRecoilState(ShowActionIdQuery);
    // body
    const [body, setBody] = useRecoilState(DataListBody);
    // 저장하고 useEffect 돌리기 위한것
    const [addDataListSavePoint, setAddDataListSavePoint] = useRecoilState(AddDataListSavePoint);

    // 블록 이름 저장을 위한
    const [blockTitleTyping, setBlockTitleTyping] = useState<string>('');
    const [blockState, setBlockState] = useRecoilState(CreatBlockState);
    const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
    const [cards, setCards] = useRecoilState(CardState); //카드
    const [blockName, setBlockName] = useState('');
    const [cardList, setCardList] = useRecoilState(CardListState);
    const [selectedValue, setSelectedValue] = useState('TX');

    useEffect(() => {
        // 페이지 들어왔을 때 오른쪽 부분 안 보여주기
        setPlusbutton(false);
    }, []);

    // 저장버튼
    const saveButton = () => {
        api.post('component/admin/4', { componentList: [body] })
            .then(res => {
                setAddDataListSavePoint(prevCount => prevCount + 1);
                alert('저장되었습니다.');
            })
            .catch(err => {
                alert('저장에 실패하였습니다.');
            });
    };

    // 제목 작성부분
    const handleBlockTitleChange = (newName: string) => {
        setBody(prevBody => ({
            ...prevBody,
            object: {
                ...prevBody.object,
                name: newName,
            },
        }));
    };

    return (
        <AboutBody>
            {/* 헤더 height: 13%  width 89% */}
            <Header />
            {/* 제목 height: 6% width 89% */}
            <AboutContainer height='87%' width='89%' justifyContent='space-between' align='flex-start'>
                {/* 좌측 데이터 보기 */}
                <S.LeftDiv>
                    <S.LeftHeader>
                        <S.HeaderDiv>
                            <S.CategoryDiv>
                                <S.Text size={18} color={C.colors.textBlack} weight={800}>
                                    데이터 조회 리스트 관리
                                </S.Text>
                            </S.CategoryDiv>
                        </S.HeaderDiv>
                    </S.LeftHeader>
                    <S.LeftBody>
                        <SelectList />
                    </S.LeftBody>
                </S.LeftDiv>
                {/* 우측 블록 컨트롤 추가 버튼 눌렀을 때 나타나기 */}
                {plusbutton && (
                    <S.RightDiv>
                        <S.RightBody>
                            <S.BlockHeader>
                                <S.InputBox color={C.colors.buttonBlueBackground}>
                                    <S.Input type='text' placeholder='데이터 제목을 작성해주세요.' onChange={e => handleBlockTitleChange(e.target.value)} />
                                </S.InputBox>
                                <S.AddButton onClick={saveButton}>
                                    <S.Text size={16} color='white' weight={500}>
                                        저장
                                    </S.Text>
                                </S.AddButton>
                            </S.BlockHeader>
                            {/* 중간 - */}
                            <S.RigthtMiddleBody>
                                <S.MiddleLeftBox>
                                    <S.MiddleLeftHeader>
                                        <S.Option>선택</S.Option>
                                        <S.ActionId>actionId</S.ActionId>
                                    </S.MiddleLeftHeader>
                                    {/* actionmap 리스트 */}
                                    <AllActionIdList />
                                </S.MiddleLeftBox>
                                {showActionIdQuery && (
                                    <S.MiddleRightBox>
                                        <S.QueryBox>{actionIdQuery}</S.QueryBox>
                                    </S.MiddleRightBox>
                                )}
                            </S.RigthtMiddleBody>
                        </S.RightBody>
                    </S.RightDiv>
                )}
            </AboutContainer>
        </AboutBody>
    );
};

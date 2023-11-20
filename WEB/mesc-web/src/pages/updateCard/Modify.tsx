//React
import { useEffect, useState } from 'react';
// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { CreatBlockState } from '../../state/create/AddBlock';
import { Card, BlockListState, CardListState, BlockState, CardState, ComponentListState, ComponentItem } from '../../state/create/BlockState';
import { CardIdState } from '../../state/CardIdState';
// API
import { api } from '../../apis/Api';
// style
import * as S from './Modify.styles';
import * as C from '../../component/common/theme';
// component
import { AddCardComponent } from '../../component/page/AddCard';
import { AboutContainer } from '../../component/common/About/AboutContainer';
import { AboutBody } from '../../component/common/About/AboutBody';
import { Header } from '../../component/common/Header/Header';
import { SelectBlockv2 } from '../../component/Block/Select/SelectBlockv2';
import { AddSpeedDial } from '../../component/common/About/AboutBtn';

export const Modify = () => {
    // =====================================================================

    // 블록 이름 저장을 위한
    const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
    const [blockList, setBlockList] = useRecoilState(BlockListState);
    const [cardList, setCardList] = useRecoilState(CardListState);
    const [card, setCard] = useRecoilState(CardState);
    const [blockState, setBlockState] = useRecoilState(CreatBlockState);
    const [selectedValue, setSelectedValue] = useState('TX');
    const [ComponentList, setComponentList] = useRecoilState(ComponentListState);

    const [blockName, setBlockName] = useState(blockInfo ? blockInfo.name : '');

    useEffect(() => {
        setBlockName(blockInfo ? blockInfo.name : '');
    }, [blockInfo]);

    const deleteBlock = (id?: number) => {
        api.delete(`block/admin/all/${id}`)
            .then(res => {
                // Update Recoil state after successful deletion
                setBlockList(prevBlockList => {
                    // Ensure prevBlockList is an array before using filter
                    if (Array.isArray(prevBlockList)) {
                        return prevBlockList.filter(block => block.id !== id);
                    } else {
                        console.error('prevBlockList is not an array:', prevBlockList);
                        return prevBlockList; // Return the original state if it's not an array
                    }
                });
                console.log(id);
                console.log('삭제완료');
                alert('삭제완료');

                // Reset the Recoil state
                setBlockInfo({ id: 0, name: '' });
                setCardList([]);
            })
            .catch(err => {
                console.log(err);
            });
    };

    // Block 이름 변경 및 API 호출 (버튼 클릭시)
    const UpdateBlockName = (newName: string) => {
        const updatedBlockItem = {
            id: blockInfo.id,
            name: newName,
        };
        console.log(cardList);
        console.log(blockInfo);

        //block아이디가 1035번이상이어야 api 호출
        if (blockInfo.id! > 1034 || blockInfo.id! === 0) {
            if (blockInfo.id! === 0) {
                updatedBlockItem.id = undefined;
            }
            api.post(`block/admin`, {
                blockInfo: updatedBlockItem,
                cardReqList: cardList,
            })
                .then(res => {
                    console.log('card==================', cardList);
                    console.log(res);
                    alert('저장완료');

                    // 바뀐 이름으로 Recoil state 갱신
                    setBlockInfo(updatedBlockItem);
                    setBlockList(prevBlockList => {
                        if (Array.isArray(prevBlockList)) {
                            const blockExists = prevBlockList.some(block => block.id === blockInfo.id);

                            if (blockExists) {
                                return prevBlockList.map(block => (block.id === blockInfo.id ? updatedBlockItem : block));
                            } else {
                                // If the block with blockInfo.id doesn't exist, add it to the end
                                return [...prevBlockList, { ...updatedBlockItem, id: res.data.data.blockInfo.id }];
                            }
                        } else {
                            console.error('prevBlockList is not an array:', prevBlockList);
                            return prevBlockList; // Return the original state if it's not an array
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                });

            // console.log(updatedBlockItem, "updatedBlockItem");
            // console.log("cardList", cardList);
        }
        // block아이디가 0이면 생성
        if (blockInfo.id! === 0) {
        }
    };
    // =======================================================

    // plus 버튼 누를 때 새로운 카드 생성===================================

    // 카드 타입을 저장하고 있는 recoil

    const handleClick = (value: string) => {
        setSelectedValue(value);
    };

    // 카드 추가 함수
    const addCard = (cardType: string) => {
        const newCard: Card = {
            name: '카드 이름을 작성해주세요.',
            sequence: cardList.length + 1,
            cardType: cardType,
            content: '',
            componentList: [],
        };

        if (cardType === 'CH1' || cardType === 'CH2') {
            const First: ComponentItem = {
                type: 'BU',
                sequence: 1,
                object: {
                    name: '',
                    linkType: 'B',
                    link: 1,
                    actionId: 0,
                    iconId: 0,
                    response: '',
                },
            };
            newCard.componentList.push(First);
        }
        if (cardType === 'CH2') {
            const Second: ComponentItem = {
                type: 'BU',
                sequence: 2,
                object: {
                    name: '',
                    linkType: 'B',
                    link: 1,
                    actionId: 0,
                    iconId: 0,
                    response: '',
                },
            };
            newCard.componentList.push(Second);
        }
        // Recoil을 사용하여 카드 상태 갱신
        // setCreateCard((prevCardState) => [...prevCardState, newCard]);
        setCardList(prevCardList => [...prevCardList, newCard]);
    };

    const resetRecoilState = () => {
        setCardList([]);
    };

    const showCards = cardList.map(card => {
        return <AddCardComponent card={card} />;
    });

    // =======================================================

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
                                    블록 수정하기
                                </S.Text>
                            </S.CategoryDiv>
                        </S.HeaderDiv>
                    </S.LeftHeader>
                    <S.LeftBody>
                        <SelectBlockv2 type={'modify'} />
                    </S.LeftBody>
                </S.LeftDiv>
                {/* 우측 블록 컨트롤 */}
                <S.RightDiv>
                    <S.RightBody>
                        <S.BlockHeader>
                            <S.InputBox color={C.colors.buttonBlueBackground}>
                                <S.Input type='text' placeholder='제목을 입력해주세요.' value={blockName} onChange={e => setBlockName(e.target.value)} />
                            </S.InputBox>
                            <S.ButtonDiv>
                                <S.DeleteButton
                                    onClick={() => {
                                        deleteBlock(blockInfo.id);
                                    }}
                                >
                                    <S.Text size={16} color='white' weight={500}>
                                        삭제
                                    </S.Text>
                                </S.DeleteButton>
                                <S.AddButton
                                    onClick={() => {
                                        UpdateBlockName(blockName);
                                    }}
                                >
                                    <S.Text size={16} color='white' weight={500}>
                                        저장
                                    </S.Text>
                                </S.AddButton>
                            </S.ButtonDiv>
                        </S.BlockHeader>
                        {/* 중간 - 카드리스트 고르기 */}
                        <S.BlockMiddle>
                            <S.SelectBox>
                                <S.Text size={18} color={C.colors.textBlack} weight={800} style={{ paddingRight: '30px' }}>
                                    카드 추가
                                </S.Text>
                                <S.ButtonHug isFocused={selectedValue === 'TX'} onClick={() => handleClick('TX')}>
                                    <S.ButtonText isFocused={selectedValue === 'TX'}>텍스트형</S.ButtonText>
                                </S.ButtonHug>
                                <S.ButtonHug isFocused={selectedValue === 'CH1'} onClick={() => handleClick('CH1')}>
                                    <S.ButtonText isFocused={selectedValue === 'CH1'}>버튼 1개 카드형</S.ButtonText>
                                </S.ButtonHug>
                                <S.ButtonHug isFocused={selectedValue === 'CH2'} onClick={() => handleClick('CH2')}>
                                    <S.ButtonText isFocused={selectedValue === 'CH2'}>버튼 2개 카드형</S.ButtonText>
                                </S.ButtonHug>
                                <S.ButtonHug isFocused={selectedValue === 'TA'} onClick={() => handleClick('TA')}>
                                    <S.ButtonText isFocused={selectedValue === 'TA'}>스크롤형</S.ButtonText>
                                </S.ButtonHug>
                            </S.SelectBox>
                            <S.AddButton color={C.colors.buttonRedBackground} onClick={resetRecoilState}>
                                <S.Text size={16} color={C.colors.buttonRed} weight={700}>
                                    초기화
                                </S.Text>
                            </S.AddButton>
                        </S.BlockMiddle>

                        {/* 하단 - 카드리스트 */}
                        <AboutContainer
                            height='85%'
                            width='100%'
                            flexDirection='row'
                            style={{
                                overflowX: 'auto',
                                overflowY: 'auto',
                                // overflowY: "hidden",
                            }}
                        >
                            {showCards}
                            <AddSpeedDial onClick={() => addCard(selectedValue)} />
                        </AboutContainer>
                    </S.RightBody>
                </S.RightDiv>
            </AboutContainer>
        </AboutBody>
    );
};

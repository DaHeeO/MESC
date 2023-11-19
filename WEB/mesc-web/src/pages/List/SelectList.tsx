// React
import React, { useEffect, useState } from 'react';
// style
import { TitleBox } from './SelectList.styles';
// api
import { api } from '../../apis/Api';
// recoil
import { useRecoilState } from 'recoil';
import { CreatBlockState } from '../../state/create/AddBlock';
import { BlockState } from '../../state/create/CreateState';
import { CardListState } from '../../state/read/GetCardList';
import { LinkIdState } from '../../state/linkId';
import { SelectListPlusbutton } from '../../state/SelectListPlusButton';
import { ShowActionIdQuery } from '../../state/ShowActionIdQuery';
import { AddDataListSavePoint } from '../../state/AddDataListSavePoint';

import * as S from './SelectList.styles';
import * as C from '../../component/common/theme';
import { log } from 'console';

export const SelectList = () => {
    const [plusbutton, setPlusbutton] = useRecoilState(SelectListPlusbutton);
    // 쿼리 페이지 true일 때만 보여주기
    const [showActionIdQuery, setShowActionIdQuery] = useRecoilState(ShowActionIdQuery);
    // 저장하고 useEffect 돌리기 위한것
    const [addDataListSavePoint, setAddDataListSavePoint] = useRecoilState(AddDataListSavePoint);
    const [resdata, setResData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [recentId, setRecentId] = useState<number>(0);

    // 동적버튼 추가 취소
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        api.get('card/admin/4')
            .then(res => {
                setResData(res.data.data.componentList);

                setLoading(false);
            })
            .catch(err => {
                setError('데이터를 조회하는데 실패하였습니다.');
                setLoading(false);
            });
    }, [addDataListSavePoint]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleAddButtonClick = () => {
        if (!isAdding) {
            // 추가 버튼을 클릭했을 때
            setPlusbutton(true);
            setIsAdding(true);
        } else {
            // 취소 버튼을 클릭했을 때
            setPlusbutton(false);
            setIsAdding(false);
            setShowActionIdQuery(false);
        }
    };

    const deleteList = () => {
        console.log('recentActionId', recentId);

        api.delete(`component/admin/4/${recentId}`)
            .then(res => {
                setAddDataListSavePoint(prevCount => prevCount + 1);
                alert('삭제되었습니다.');
            })
            .catch(err => {
                alert('삭제에 실패하였습니다.');
            });
    };

    return (
        <S.Total>
            {/* header */}
            <S.TitleBox>
                <S.TitleDiv width={'30%'}>
                    <S.Text size={16} color={'#94918A'} weight={500}>
                        actionId
                    </S.Text>
                </S.TitleDiv>
                <S.TitleDiv width={'70%'}>
                    <S.Text size={16} color={'#94918A'} weight={500}>
                        블록 이름
                    </S.Text>
                    <S.AddButton style={{ marginLeft: 30 }} onClick={handleAddButtonClick}>
                        <S.Text size={16} color={C.colors.buttonBlueBackground} weight={500}>
                            {isAdding ? '취소' : '추가'} {/* 상태에 따라 텍스트 변경 */}
                        </S.Text>
                    </S.AddButton>
                </S.TitleDiv>
            </S.TitleBox>
            {/* body */}
            <S.TableContainer>
                {resdata.map((item: any) => (
                    <S.TableDiv key={item.id}>
                        <S.TableDiv key={item.Index}>
                            <S.TitleDiv width={'27%'}>
                                <S.Text size={16} color={C.colors.textBlack} weight={500}>
                                    {item.object.actionId}
                                </S.Text>
                            </S.TitleDiv>

                            <S.TitleDiv width={'65%'}>
                                <S.Text size={16} color={C.colors.textBlack} weight={500}>
                                    {item.object.name}
                                </S.Text>
                            </S.TitleDiv>
                            <S.TitleDiv width={'8%'}>
                                <S.CancelBox
                                    onClick={() => {
                                        const confirmed: boolean = window.confirm('삭제하시겠습니까?');
                                        if (confirmed) {
                                            setRecentId(item.id);
                                            deleteList();
                                        } else {
                                        }
                                    }}
                                />
                            </S.TitleDiv>
                        </S.TableDiv>
                    </S.TableDiv>
                ))}
            </S.TableContainer>
        </S.Total>
    );
};

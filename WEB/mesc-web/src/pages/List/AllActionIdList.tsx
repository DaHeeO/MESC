// React
import React, { useEffect, useState } from 'react';
// style
import { TitleBox } from './AllActionIdList.styles';
// api
import { api } from '../../apis/Api';
// recoil
import { useRecoilState } from 'recoil';
import { CreatBlockState } from '../../state/create/AddBlock';
import { BlockState } from '../../state/create/CreateState';
import { CardListState } from '../../state/read/GetCardList';
import { ActionIdQuery } from '../../state/ActionIdQuery';
import { SelectListPlusbutton } from '../../state/SelectListPlusButton';
import { ShowActionIdQuery } from '../../state/ShowActionIdQuery';
import { DataListBody } from '../../state/DataListBody';

import * as S from './AllActionIdList.styles';
import * as C from '../../component/common/theme';
import { log } from 'console';

export const AllActionIdList = () => {
    const [plusbutton, setPlusbutton] = useRecoilState(SelectListPlusbutton);
    const [actionIdQuery, setActionIdQuery] = useRecoilState(ActionIdQuery);
    // 쿼리 페이지 true일 때만
    const [showActionIdQuery, setShowActionIdQuery] = useRecoilState(ShowActionIdQuery);

    // body
    const [body, setBody] = useRecoilState(DataListBody);
    const [resdata, setResData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // recoil에서 block값 가져오기
    const [cardList, setCardList] = useRecoilState(CardListState);
    // 데이터 조회하기 ============================>

    useEffect(() => {
        api.get('admin/action')
            .then(res => {
                setResData(res.data.data.actionMapList);

                setLoading(false);
            })
            .catch(err => {
                setError('데이터를 조회하는데 실패하였습니다.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <S.Total>
            {/* header */}
            {/* body */}
            <S.TableContainer>
                {resdata.map((item: any, index: number) => (
                    <S.TableDiv key={item.Index}>
                        <S.TitleDiv width={'70%'}>
                            <input
                                type='radio'
                                id={`radio-${index}`}
                                name='actionIdRadio'
                                // checked={id === item.id} // linkId가 현재 항목의 id와 같으면 체크된 상태로 설정
                                onChange={() => {
                                    setActionIdQuery(item.query);
                                    setShowActionIdQuery(true);

                                    setBody(prev => ({ ...prev, object: { ...prev.object, actionId: item.id } }));
                                }} // linkId를 현재 항목의 id로 업데이트
                                style={{ marginLeft: '30px', width: '20px', height: '20px' }}
                            />
                        </S.TitleDiv>

                        <S.TitleDiv width={'70%'}>
                            <S.Text size={16} color={C.colors.textBlack} weight={500} style={{ marginLeft: '35px' }}>
                                {item.id}
                            </S.Text>
                        </S.TitleDiv>
                    </S.TableDiv>
                ))}
            </S.TableContainer>
        </S.Total>
    );
};

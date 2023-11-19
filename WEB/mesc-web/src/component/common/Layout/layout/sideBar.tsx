import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AboutContainer } from '../../About/AboutContainer';
import * as C from '../../theme';
import * as S from './sideBar.styles';

import HomeFocus from '../../../../assets/icon/homeFocus.svg';
import AddFocus from '../../../../assets/icon/addFocus.svg';
import EditFocus from '../../../../assets/icon/editFocus.svg';
import FaqFocus from '../../../../assets/icon/faqFocus.svg';
import LogoutFocus from '../../../../assets/icon/logoutFocus.svg';
import Home from '../../../../assets/icon/home.svg';
import Add from '../../../../assets/icon/add.svg';
import Edit from '../../../../assets/icon/edit.svg';
import Faq from '../../../../assets/icon/faq.svg';
import Logout from '../../../../assets/icon/logout.svg';

function SideBar() {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const goMain = () => {
        navigate('/');
    };
    const goAdd = () => {
        navigate('/Add');
    };
    const goMenu2 = () => {
        navigate('/Modify');
    };

    const goMenu4 = () => {
        navigate('/Faq');
    };
    const goMenu5 = () => {
        navigate('/Menu3');
    };

    const goLogout = () => {
        localStorage.clear();
        alert('로그아웃 되었습니다.');
        navigate('/login');
    };

    const isActive = (path: string) => {
        if (location.pathname === path) {
            return true;
        }

        return location.pathname.startsWith(path + '/');
    };

    return (
        // {/* sideBar */}
        <AboutContainer
            height='100%'
            width='20%'
            flexDirection='column'
            justifyContent='flex-start'
            align='flex-end'
            style={{
                borderRight: '1px solid #dddddd',
                backgroundColor: C.colors.samsungBlue,
            }}
        >
            <S.HeaderDiv>
                <S.HeaderLogoDiv>
                    <S.Logo onClick={goMain}>
                        <S.Text size={22} color={C.colors.samsungBlue} weight={900}>
                            M
                        </S.Text>
                    </S.Logo>
                    <S.LogoBox onClick={goMain}>
                        <S.Text size={18} color='white' weight={800}>
                            MESC
                        </S.Text>
                        <S.Text size={10} color='white'>
                            ADMIN
                        </S.Text>
                    </S.LogoBox>
                </S.HeaderLogoDiv>
            </S.HeaderDiv>
            <S.BodyDiv>
                <S.MainDiv>
                    <S.NavContainer onClick={goMain}>
                        <img width={18} height={18} src={isActive('/') ? HomeFocus : Home} />
                        <S.Text size={14} color={isActive('/') ? 'white' : C.colors.textIcyGray} weight={500} style={{ paddingLeft: '14px' }}>
                            홈
                        </S.Text>
                    </S.NavContainer>
                    <S.NavContainer onClick={goAdd}>
                        <img width={18} height={18} src={isActive('/Add') ? AddFocus : Add} />
                        <S.Text size={14} color={isActive('/Add') ? 'white' : C.colors.textIcyGray} weight={500} style={{ paddingLeft: '14px' }}>
                            블록 추가하기
                        </S.Text>
                    </S.NavContainer>
                    <S.NavContainer onClick={goMenu2}>
                        <img width={18} height={18} src={isActive('/Modify') ? EditFocus : Edit} />
                        <S.Text size={14} color={isActive('/Modify') ? 'white' : C.colors.textIcyGray} weight={500} style={{ paddingLeft: '14px' }}>
                            블록 수정하기
                        </S.Text>
                    </S.NavContainer>
                    <S.NavContainer onClick={goMenu5}>
                        <img width={18} height={18} src={isActive('/Menu3') ? FaqFocus : Faq} />

                        <S.Text size={14} color={isActive('/Menu3') ? 'white' : C.colors.textIcyGray} weight={500} style={{ paddingLeft: '14px' }}>
                            리스트
                        </S.Text>
                    </S.NavContainer>
                    <S.NavContainer onClick={goMenu4}>
                        <img width={18} height={18} src={isActive('/Faq') ? FaqFocus : Faq} />

                        <S.Text size={14} color={isActive('/Faq') ? 'white' : C.colors.textIcyGray} weight={500} style={{ paddingLeft: '14px' }}>
                            FAQ
                        </S.Text>
                    </S.NavContainer>
                </S.MainDiv>
                <S.LogoutContainer onClick={goLogout} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    {hovered ? <img width={18} height={18} src={LogoutFocus} /> : <img width={18} height={18} src={Logout} />}
                    <S.Text size={14} color={hovered ? 'white' : C.colors.textIcyGray} weight={500} style={{ paddingLeft: '14px', cursor: 'pointer' }}>
                        로그아웃
                    </S.Text>
                </S.LogoutContainer>
            </S.BodyDiv>
        </AboutContainer>
    );
}

export default SideBar;

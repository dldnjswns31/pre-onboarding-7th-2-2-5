import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <StSidebarContainer>
      <StLogoContainer>
        <StLogo src="https://lever.me/img/logo-black.svg" />
      </StLogoContainer>
      <StMenusContainer>
        <StMenuContainer>
          <StSubheadingContainer>
            <StSubheading>서비스</StSubheading>
          </StSubheadingContainer>
          <StServiceSelect>
            <option value="매드업">매드업</option>
            <option value="서비스 추가하기">서비스 추가하기</option>
          </StServiceSelect>
        </StMenuContainer>
        <StMenuContainer>
          <StSubheadingContainer>
            <StSubheading>광고 센터</StSubheading>
          </StSubheadingContainer>
          <Link to="/">
            <StMenuButton select={pathname === '/' ? true : false}>
              <StMenuButtonIcon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </StMenuButtonIcon>
              <StMenuName>대시보드</StMenuName>
            </StMenuButton>
          </Link>
          <Link to="/management">
            <StMenuButton select={pathname === '/management' ? true : false}>
              <StMenuButtonIcon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </StMenuButtonIcon>

              <StMenuName>광고관리</StMenuName>
            </StMenuButton>
          </Link>
        </StMenuContainer>
      </StMenusContainer>
    </StSidebarContainer>
  );
};

export default Sidebar;

const StSidebarContainer = styled.div`
  width: 100%;
`;

const StLogoContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  border-bottom: 1px solid #edeff1;
`;

const StLogo = styled.img`
  height: 30px;
`;

const StMenusContainer = styled.div``;

const StMenuContainer = styled.div`
  margin-top: 40px;
`;

const StSubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 20px;
`;

const StSubheading = styled.span`
  color: #94a2ad;
  font-size: 12px;
  font-weight: 700;
`;

const StServiceSelect = styled.select`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const StMenuButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  color: ${({ select }) => (select ? '#586cf5' : '#3a474e')};
  background-color: ${({ select }) => (select ? '#edeff1' : '#ffffff')};
  border: none;
  border-radius: 10px;
`;

const StMenuButtonIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const StMenuName = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

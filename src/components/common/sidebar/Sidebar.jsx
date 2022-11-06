import React from 'react';
import styled from 'styled-components';
import AdvertisementCenterTab from './AdvertisementCenterTab';
import Guide from './Guide';
import ServiceTab from './ServiceTab';

const Sidebar = () => {
  return (
    <StSidebarContainer>
      <StLogoContainer>
        <StLogo src="https://lever.me/img/logo-black.svg" />
      </StLogoContainer>
      <StMenusContainer>
        <StMenuContainer>
          <ServiceTab />
        </StMenuContainer>
        <StMenuContainer>
          <AdvertisementCenterTab />
        </StMenuContainer>
      </StMenusContainer>
      <Guide />
      <StDivContainer>
        <div>레버는 함께 만들어갑니다.</div>
        <div>이용약관</div>
      </StDivContainer>
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

const StMenusContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

const StMenuContainer = styled.div`
  margin-top: 40px;
`;

const StDivContainer = styled.div`
  margin-top: 40px;
  padding: 0 20px;
  div {
    margin-bottom: 10px;
    color: #94a2ad;
    font-size: 12px;
    font-weight: 500;
  }
`;

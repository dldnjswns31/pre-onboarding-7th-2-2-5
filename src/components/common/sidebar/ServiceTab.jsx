import React from 'react';
import styled from 'styled-components';

const ServiceTab = () => {
  return (
    <>
      <StSubheadingContainer>
        <StSubheading>서비스</StSubheading>
      </StSubheadingContainer>
      <StServiceSelect>
        <option value="매드업">매드업</option>
        <option value="서비스 추가하기">서비스 추가하기</option>
      </StServiceSelect>
    </>
  );
};

export default ServiceTab;

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

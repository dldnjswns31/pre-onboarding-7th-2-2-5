import React from 'react';
import styled from 'styled-components';

const ManagementSummaryItem = () => {
  return (
    <StContainer>
      <StItemTitle>웹광고</StItemTitle>
      <StInfoContainer>
        <StInfo>
          <StInfoKey>상태</StInfoKey>
          <StInfoValue>진행중</StInfoValue>
        </StInfo>
        <StInfo>
          <StInfoKey>광고 생성일</StInfoKey>
          <StInfoValue>2021-06-04</StInfoValue>
        </StInfo>
        <StInfo>
          <StInfoKey>일 희망 예산</StInfoKey>
          <StInfoValue>40만</StInfoValue>
        </StInfo>
        <StInfo>
          <StInfoKey>광고 수익률</StInfoKey>
          <StInfoValue>694%</StInfoValue>
        </StInfo>
        <StInfo>
          <StInfoKey>매출</StInfoKey>
          <StInfoValue>26,071만원</StInfoValue>
        </StInfo>
        <StInfo>
          <StInfoKey>광고 비용</StInfoKey>
          <StInfoValue>3,759만원</StInfoValue>
        </StInfo>
      </StInfoContainer>
      <StModifyButton>수정하기</StModifyButton>
    </StContainer>
  );
};

export default ManagementSummaryItem;

const StContainer = styled.div`
  width: 300px;
  height: 420px;
  margin-bottom: 20px;
  padding: 0 20px;
  color: #3a474e;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;

const StItemTitle = styled.div`
  width: 100%;
  margin-top: 40px;
  font-size: 16px;
  font-weight: 700;
`;

const StInfoContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  div:first-of-type {
    border-top: 1px solid #edeff1;
  }
`;

const StInfo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #edeff1;
`;

const StInfoKey = styled.span`
  flex: 4 0;
  color: #94a2ad;
  font-size: 12px;
  font-weight: 500;
`;
const StInfoValue = styled.span`
  flex: 6 0;
  color: #3a474e;
  font-size: 12px;
  font-weight: 700;
`;

const StModifyButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  background-color: #ffffff;
  color: #3a474e;
  font-size: 14px;
  font-weight: 700;
`;

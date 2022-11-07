import React from 'react';
import styled from 'styled-components';

const Guide = () => {
  return (
    <StContainer>
      <StImageContainer>
        <StBulb
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </StBulb>
      </StImageContainer>
      <StDivContainer>
        <StBigDiv>레버 이용 가이드</StBigDiv>
        <StSmallDiv>시작하기 전에 알아보기</StSmallDiv>
      </StDivContainer>
    </StContainer>
  );
};

export default Guide;

const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 260px;
  padding: 30px 20px;
  background-color: #e5f4fd;
  border-radius: 10px;
`;

const StImageContainer = styled.div`
  position: absolute;
  left: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #586cf5;
  border-radius: 50%;
`;

const StBulb = styled.svg`
  width: 70%;
  height: 70%;
  color: #ffffff;
`;

const StDivContainer = styled.div`
  display: flex;
  height: 100%;
  margin-left: 48px;
  flex-direction: column;
  justify-content: space-between;
`;

const StBigDiv = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const StSmallDiv = styled.div`
  color: #94a2ad;
  font-size: 12px;
  font-weight: 500;
`;

import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StContainer>
      <div>불러오는 중입니다...</div>
    </StContainer>
  );
};

export default Loading;

const StContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    color: #3a474e;
    font-size: 17px;
    font-weight: 700;
  }
`;

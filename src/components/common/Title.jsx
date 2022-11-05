import React from 'react';
import styled from 'styled-components';

const Title = ({ text }) => {
  return (
    <StTitleContainer>
      <StTitle>{text}</StTitle>
    </StTitleContainer>
  );
};

export default Title;

const StTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const StTitle = styled.span`
  font-size: 26px;
`;

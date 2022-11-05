import React from 'react';
import styled from 'styled-components';
import SummaryItem from './SummaryItem';

const Summary = () => {
  return (
    <StContainer>
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
      <SummaryItem />
    </StContainer>
  );
};

export default Summary;

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

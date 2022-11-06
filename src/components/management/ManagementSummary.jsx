import React from 'react';
import styled from 'styled-components';
import ManagementSummaryItem from './ManagementSummaryItem';

const ManagementSummary = () => {
  return (
    <StContainer>
      <ManagementSummaryItem />
      <ManagementSummaryItem />
      <ManagementSummaryItem />
      <ManagementSummaryItem />
      <ManagementSummaryItem />
      <ManagementSummaryItem />
    </StContainer>
  );
};

export default ManagementSummary;

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 40px;
`;

import React from 'react';
import styled from 'styled-components';
import FilterAndButton from './FilterAndButton';
import ManagementSummary from './ManagementSummary';

const Management = () => {
  return (
    <StContainer>
      <StManagementContainer>
        <FilterAndButton />
        <ManagementSummary />
      </StManagementContainer>
    </StContainer>
  );
};

export default Management;

const StContainer = styled.section`
  width: 100%;
  margin: 40px 0;
`;

const StManagementContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
`;

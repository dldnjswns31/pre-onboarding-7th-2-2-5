import React from 'react';
import styled from 'styled-components';

const FilterAndButton = () => {
  return (
    <StContainer>
      <StFilter>
        <option value="전체 광고">전체 광고</option>
        <option value="다른 광고">다른 광고</option>
        <option value="그냥 광고">그냥 광고</option>
      </StFilter>
      <StMakeButton>광고 만들기</StMakeButton>
    </StContainer>
  );
};

export default FilterAndButton;

const StContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  justify-content: space-between;
`;

const StFilter = styled.select`
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;

const StMakeButton = styled.button`
  padding: 0 20px;
  background-color: #586cf5;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

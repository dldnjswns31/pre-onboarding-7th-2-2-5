import React from 'react';
import styled from 'styled-components';

const ChartFilterOption = () => {
  return (
    <StFilterContainer>
      <StChartColorCircle />
      <StFilter>
        <option value="ROAS">ROAS</option>
        <option value="ROAS">광고비</option>
        <option value="ROAS">노출 수</option>
        <option value="ROAS">클릭 수</option>
        <option value="ROAS">전환 수</option>
        <option value="ROAS">매출</option>
      </StFilter>
    </StFilterContainer>
  );
};

export default ChartFilterOption;

const StFilterContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  width: 125px;
  height: 40px;
`;

const StFilter = styled.select`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 20px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('./images/chevron-down.svg') no-repeat right 10px center;
`;

const StChartColorCircle = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #85da47;
  border-radius: 50%;
`;

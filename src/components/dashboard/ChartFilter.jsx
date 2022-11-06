import React from 'react';
import styled from 'styled-components';
import { useFirstOption, useSecondOption } from '../../context/chartOptionContext';
import ChartFilterOption from './ChartFilterOption';

const ChartFilter = () => {
  const { firstOption, changeFirstOption } = useFirstOption();
  const { secondOption, changeSecondOption } = useSecondOption();
  return (
    <StContainer>
      <ChartFilterOption firstOption={firstOption} secondOption={secondOption} changeOption={changeFirstOption} first />
      <ChartFilterOption firstOption={firstOption} secondOption={secondOption} changeOption={changeSecondOption} />
      <StWeeklyDailyFilter>
        <option value="주간">주간</option>
        <option value="일간">일간</option>
      </StWeeklyDailyFilter>
    </StContainer>
  );
};

export default ChartFilter;

const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 40px;
`;

const StWeeklyDailyFilter = styled.select`
  position: absolute;
  right: 0;
  width: 80px;
  height: 40px;
  border: none;
`;

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useEndedDate, useStartDate } from '../../context/dateContext';
import { dataConverter } from '../../utils/trendDataConverter';
import SummaryItem from './SummaryItem';

const Summary = () => {
  const { startDate, _ } = useStartDate();
  const { endedDate, __ } = useEndedDate();
  const [incrementData, setIncrementData] = useState({});

  useEffect(() => {
    const roas = dataConverter.getRoas(startDate, endedDate);
    const cost = dataConverter.getCost(startDate, endedDate);
    const imp = dataConverter.getImp(startDate, endedDate);
    const click = dataConverter.getClick(startDate, endedDate);
    const conv = dataConverter.getConv(startDate, endedDate);
    const convValue = dataConverter.getConvValue(startDate, endedDate);
    setTimeout(() => {
      setIncrementData({
        roas,
        cost,
        imp,
        click,
        conv,
        convValue,
      });
    }, 500);
  }, [startDate, endedDate]);

  return (
    <StContainer>
      <SummaryItem text="ROAS" data={incrementData.roas} />
      <SummaryItem text="광고비" data={incrementData.cost} />
      <SummaryItem text="노출 수" data={incrementData.imp} />
      <SummaryItem text="클릭 수" data={incrementData.click} />
      <SummaryItem text="전환 수" data={incrementData.conv} />
      <SummaryItem text="매출" data={incrementData.convValue} />
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

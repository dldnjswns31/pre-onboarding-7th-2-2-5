import React from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import ChartFilter from './ChartFilter';
import Summary from './Summary';

const Dashboard = () => {
  return (
    <StContainer>
      <StTitle>통합 광고 현황</StTitle>
      <StDashboardContainer>
        <Summary />
        <ChartFilter />
        <Chart />
      </StDashboardContainer>
    </StContainer>
  );
};

export default Dashboard;

const StContainer = styled.section`
  width: 100%;
  margin: 40px 0;
`;

const StTitle = styled.div`
  margin-bottom: 20px;
  color: #3a474e;
  font-size: 16px;
  font-weight: 700;
`;

const StDashboardContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
`;

const StChartContainer = styled.div`
  display: inline-block;
  margin-top: 40px;
  width: 100%;
  height: 240px;
  background-color: #85da47;
`;

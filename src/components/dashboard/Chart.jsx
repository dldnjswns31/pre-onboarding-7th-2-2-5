import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGetChartValues } from '../../hooks/useGetChartValues';
import { useFirstOption, useSecondOption } from '../../context/chartOptionContext';

const Chart = () => {
  const { firstOption } = useFirstOption();
  const { secondOption } = useSecondOption();

  const [labels, firstValues, firstColor] = useGetChartValues(firstOption);
  const [_, secondValues, secondColor] = useGetChartValues(secondOption);
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        yAxisID: 'first',
        borderColor: firstColor,
        borderWidth: 2,
        data: firstValues,
      },
      {
        type: 'line',
        yAxisID: 'second',
        borderColor: secondColor,
        borderWidth: 2,
        data: secondValues,
      },
    ],
  };
  return (
    <StContainer>
      <Line
        type="line"
        data={data}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            xAxis: {
              grid: {
                display: false,
              },
            },
            first: {
              position: 'left',
              grid: {
                borderWidth: 0,
              },
              ticks: {
                maxTicksLimit: 5,
              },
            },
            second: {
              position: 'right',
              grid: {
                borderWidth: 0,
              },
              ticks: {
                maxTicksLimit: 5,
              },
            },
          },
          responsive: true,
        }}
      />
    </StContainer>
  );
};

export default Chart;

const StContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

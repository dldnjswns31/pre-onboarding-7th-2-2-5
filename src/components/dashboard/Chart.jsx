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
import { getChartOptionProps, getDataSet } from '../../utils/getChartDataOption';

const Chart = () => {
  const { firstOption } = useFirstOption();
  const { secondOption } = useSecondOption();

  const [labels, firstValues, firstColor] = useGetChartValues(firstOption);
  const [_, secondValues, secondColor] = useGetChartValues(secondOption);

  const datasets = getDataSet(labels, firstValues, secondValues, firstColor, secondColor);
  const options = getChartOptionProps(secondValues);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return (
    <StContainer>
      <Line type="line" data={datasets} options={options} />
    </StContainer>
  );
};

export default Chart;

const StContainer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

import { useEndedDate, useStartDate } from '../context/dateContext';
import trendDataSet from '../assets/database/trendDataSet.json';
import { CATEGORY_COLOR } from '../utils/filterCategory';

export const useGetChartValues = (option) => {
  const { startDate } = useStartDate();
  const { endedDate } = useEndedDate();

  const dailyData = trendDataSet.report.daily;
  let values = dailyData.filter((item) => {
    const itemDate = item.date;
    if (new Date(itemDate) >= new Date(startDate) && new Date(itemDate) <= new Date(endedDate)) {
      return item[option];
    }
  });

  values = values.map((item) => {
    return item[option];
  });

  let labels = dailyData.filter((item) => {
    const itemDate = item.date;
    if (new Date(itemDate) >= new Date(startDate) && new Date(itemDate) <= new Date(endedDate)) {
      return true;
    }
  });

  labels = labels.map((item) => {
    const itemDate = item.date;
    const month = new Date(itemDate).getMonth() + 1;
    const day = new Date(itemDate).getDate();
    return `${month}월 ${day}일`;
  });

  const color = CATEGORY_COLOR[option];

  return [labels, values, color];
};

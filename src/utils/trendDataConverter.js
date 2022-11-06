import mockData from '../assets/database/trendDataSet.json';
import { getDayDiff } from './getDayDiff';
import { getPrevDayRange } from './getPrevDayRange';
import { numberToKorean } from '../utils/numberToKorean';

// roas, cost(광고비), imp(노출수), click(클릭수), conv(전환수), convValue(매출)

const { daily: dailyData } = mockData.report;

const convert = (start, ended, keyword) => {
  // getDayDiff는 날짜의 차이를 반환하기에 때문에 일수를 구하려면 1을 더해줘야 된다.
  const dataNum = getDayDiff(start, ended) + 1;
  const [prevStartDate, prevEndedDate] = getPrevDayRange(start, ended, dataNum);
  let [cur, prev] = [0, 0];
  let increment;
  dailyData.forEach((data) => {
    if (new Date(data.date) >= new Date(start) && new Date(data.date) <= new Date(ended)) {
      cur += data[keyword];
    }
    if (new Date(data.date) >= new Date(prevStartDate) && new Date(data.date) <= new Date(prevEndedDate)) {
      prev += data[keyword];
    }
  });

  if (cur > prev) increment = 'increase';
  else if (cur < prev) increment = 'decrease';

  return {
    cur: Math.round(Number(cur)),
    diff: Math.round(Number(Math.abs(cur - prev))),
    increment,
  };
};

const returnConvert = (start, ended, keyword) => {
  if (keyword === 'roas') {
    const convertData = convert(start, ended, keyword);
    convertData.cur = convertData.cur.toLocaleString('ko-KR') + '%';
    convertData.diff = convertData.diff.toLocaleString('ko-KR') + '%';
    return convertData;
  } else if (keyword === 'conv' || keyword === 'click') {
    const convertData = convert(start, ended, keyword);
    convertData.cur = convertData.cur.toLocaleString('ko-KR') + '회';
    convertData.diff = convertData.diff.toLocaleString('ko-KR') + '회';
    return convertData;
  } else if (keyword === 'convValue' || keyword === 'cost') {
    const convertData = convert(start, ended, keyword);
    convertData.cur = numberToKorean(convertData.cur) + '원';
    convertData.diff = numberToKorean(convertData.diff) + '원';
    return convertData;
  } else if (keyword === 'imp') {
    const convertData = convert(start, ended, keyword);
    convertData.cur = numberToKorean(convertData.cur) + '회';
    convertData.diff = numberToKorean(convertData.diff) + '회';
    return convertData;
  } else {
    throw new Error('data convert error');
  }
};

export const dataConverter = {
  getRoas: (start, ended) => {
    return returnConvert(start, ended, 'roas');
  },
  getCost: (start, ended) => {
    return returnConvert(start, ended, 'cost');
  },
  getImp: (start, ended) => {
    return returnConvert(start, ended, 'imp');
  },
  getClick: (start, ended) => {
    return returnConvert(start, ended, 'click');
  },
  getConv: (start, ended) => {
    return returnConvert(start, ended, 'conv');
  },
  getConvValue: (start, ended) => {
    return returnConvert(start, ended, 'convValue');
  },
};

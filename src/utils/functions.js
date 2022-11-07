const getValueByKey = (obj, Key) => {
  return obj[Key];
};

function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const budgetConverter = (budget) => {
  return budget / 10000 + '만원';
};

const dateConverter = (startDate, endDate) => {
  return !endDate ? startDate.slice(0, 10) : startDate.slice(0, 10) + ` (` + endDate.slice(0, 10) + `)`;
};

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return year + '-' + month + '-' + day;
};

const costFormat = (cost) => {
  const costLength = String(cost).length;
  const newCost = String(cost).slice(0, costLength - 4);
  return Number(newCost).toLocaleString() + '만원';
};

const roasCalc = (convValue, cost) => {
  return parseInt((convValue / cost) * 100);
};

export { getValueByKey, budgetConverter, dateConverter, getToday, costFormat, roasCalc, getKeyByValue };

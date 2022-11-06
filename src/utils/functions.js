const getValueByKey = (obj, Key) => {
  return obj[Key];
};

function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const budgetConverter = (budget) => {
  const newBudget = String(budget);
  if (budget < 100000) return newBudget.slice(0, 2) + '천원';
  else if (newBudget.slice(3, 4) === '0') return newBudget.slice(0, 2) + '만원';
  else return newBudget.slice(0, 2) + '만 ' + newBudget.slice(3, 4) + '천원';
};

const dateConverter = (startDate, endDate) => {
  return !endDate ? startDate.slice(0, 10) : startDate.slice(0, 10) + ` (` + endDate.slice(0, 10) + `)`;
};

const costFormat = (cost) => {
  const costLength = String(cost).length;
  const newCost = String(cost).slice(0, costLength - 4);
  return Number(newCost).toLocaleString() + '만원';
};

const roasCalc = (convValue, cost) => {
  return parseInt((convValue / cost) * 100);
};

export { getValueByKey, budgetConverter, dateConverter, costFormat, roasCalc, getKeyByValue };

export const numberToKorean = (number) => {
  const koreanUnits = ['', '만', '억', '조'];
  let answer = '';
  let first = '';
  let unit = 10000;
  let index = 0;
  let division = Math.pow(unit, index);

  while (Math.floor(number / division) > 0) {
    const mod = Math.floor((number % (division * unit)) / division);
    if (mod) {
      const modToString = mod.toLocaleString();
      answer = `${modToString}${koreanUnits[index]} `;
    }
    division = Math.pow(unit, ++index);
  }
  return answer;
};

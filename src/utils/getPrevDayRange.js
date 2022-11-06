export const getPrevDayRange = (start, ended, diff) => {
  const startDate = new Date(new Date(start).getTime() - 1000 * 60 * 60 * 24 * diff);
  const endedDate = new Date(new Date(ended).getTime() - 1000 * 60 * 60 * 24 * diff);
  return [startDate.toLocaleDateString(), endedDate.toLocaleDateString()];
};

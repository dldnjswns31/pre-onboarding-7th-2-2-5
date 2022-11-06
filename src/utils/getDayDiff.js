export const getDayDiff = (start, ended) => {
  const diffMs = new Date(ended).getTime() - new Date(start).getTime();
  const diff = diffMs / (1000 * 60 * 60 * 24);
  return diff;
};

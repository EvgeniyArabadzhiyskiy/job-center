const DAY_MILLISECONDS: number = 86400000;

export const getCreateDate = (createdAt: string): string => {
  const todayDate = Date.now() / DAY_MILLISECONDS;
  const pastDate = Date.parse(createdAt) / DAY_MILLISECONDS;
  const days = Math.floor(todayDate - pastDate);

  if (days <= 0) {
    return 'Posted less day ago';
  }

  return `Posted ${days} day ago`;
};

import type { Transaction } from './excelParser';

export const filterTransactionsByTimeRange = (
  transactions: Transaction[],
  startTime: string,
  endTime: string
): number => {
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);

  return transactions
    .filter((t) => {
      const h = t.time.getHours();
      const m = t.time.getMinutes();
      const timeValue = h * 60 + m;
      return (
        timeValue >= startHour * 60 + startMin &&
        timeValue <= endHour * 60 + endMin
      );
    })
    .reduce((sum, t) => sum + t.amount, 0);
};

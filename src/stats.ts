type Stats = {
  min: number;
  max: number;
  average: number;
  sum: number;
  variance: number;
};

export function stats(data: Array<number>): Stats {
  const sum = data.reduce((acc, v) => acc + v, 0);
  const average = sum / data.length;
  const variance =
    data.reduce((acc, v) => acc + Math.pow(v - average, 2), 0) / data.length;
  return {
    min: Math.min(...data),
    max: Math.max(...data),
    average,
    sum,
    variance,
  };
}

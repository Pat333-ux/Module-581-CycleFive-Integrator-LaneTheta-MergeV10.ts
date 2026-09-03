export const integrateThetaV10 = (matrix) =>
  matrix
    .map(x => x.normalizeV10())
    .sort((a, b) => a.partition.localeCompare(b.partition))
    .reduce((acc, curr) => acc.merge(curr), INIT_THETA_STATE);

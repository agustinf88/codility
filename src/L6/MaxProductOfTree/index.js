function solution(A) {
  A.sort((a, b) => b - a);
  const l = A.length;
  const r1 = A[0] * A[1] * A[2];
  const r2 = A[0] * A[l - 1] * A[l - 2];
  return Math.max(r1, r2);
}

module.exports = list =>
  console.log(
    `** MaxProductOfTree ** - List:${list} - solution: ${solution(list)}`
  );

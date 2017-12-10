function solution(A) {
  const maxY = Math.max(...A);
  const maxX = maxY + A.length;
  let r = Array(maxX).fill(Array(maxY).fill(0));
  let sum = 0;
  for (var i = 0; i < A.length; i++) {
    let x = A[i] + i;
    let y = A[i];
    r[x][y]++;
    if (r[x][y] > 1) {
      sum++;
    }
  }
  return sum;
}
module.exports = list =>
  console.log(
    `** NumberOfDiscIntersections ** - List:${list} - solution: ${solution(
      list
    )}`
  );

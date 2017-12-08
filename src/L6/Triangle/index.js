function solution(A) {
  A.sort((a, b) => a - b);
  for (var i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return true;
    }
  }
  return false;
}

module.exports = list =>
  console.log(
    `** Trinagle       ** - List:${list} - solution: ${solution(list)}`
  );

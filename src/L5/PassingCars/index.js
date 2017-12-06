function solution(A) {
  let count = 0;
  let m = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      m++;
    }
    if (m > 0 && A[i] === 1) {
      count += m;
      if (count > 1000000000) {
        return -1;
      }
    }
  }
  return count;
}

module.exports = list =>
  console.log(
    `** PassingCars     ** - list: ${list} - solution: ${solution(list)}`
  );

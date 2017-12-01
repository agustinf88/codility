function solution(A) {
  A.sort((a, b) => a - b);
  let found = 1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      // console.log(`I: ${i} - Value: ${A[i]} - found: ${found}`);
      if (A[i] <= found) {
        found = A[i] + 1;
      } else {
        return found;
      }
    }
  }
  return found > 0 ? found : 1;
}

module.exports = list =>
  console.log(
    `** MissingInteger ** - List: ${list} - solution: ${solution(list)}`
  );

function solution(A) {
  let oldList = A.slice();
  A.sort((a, b) => a - b);
  let index = ~~(A.length / 2);
  let candidate = A[index];
  console.log(candidate);
  let count = 0;
  for (var i = 0; i < oldList.length; i++) {
    if (oldList[i] === candidate) {
      console.log(i);
      count++;
      if (count > A.length / 2) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = list =>
  console.log(
    `** Dominator       ** - list: ${list} - solution: ${solution(list)}`
  );

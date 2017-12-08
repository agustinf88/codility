function solution(A) {
  let counter = {};

  for (var i = 0; i < A.length; i++) {
    if (!counter[A[i]]) {
      counter = Object.assign(counter, { [A[i]]: true });
    }
  }

  return Object.keys(counter).length;
}

module.exports = list =>
  console.log(
    `** Distinct       ** - List:${list} - solution: ${solution(list)}`
  );

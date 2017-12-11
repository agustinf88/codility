function solution(A) {
  let stack = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] === "(") {
      stack.push(1);
    } else if (A[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

module.exports = list =>
  console.log(
    `** Brackets       ** - list: ${list} - solution: ${solution(list)}`
  );

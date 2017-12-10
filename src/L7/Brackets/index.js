function solution(A) {
  let stack = [];
  for (var i = 0; i < A.length; i++) {
    console.log(A[i]);
    if (A[i] === "{" || A[i] === "[" || A[i] === "(") {
      stack.push(A[i]);
    } else {
      let value = stack.pop();
      switch (A[i]) {
        case "}": {
          if (value !== "{") {
            return 0;
          }
          break;
        }
        case "]": {
          if (value !== "[") {
            return 0;
          }
          break;
        }
        case ")": {
          if (value !== "(") {
            return 0;
          }
          break;
        }
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

module.exports = list =>
  console.log(
    `** Brackets       ** - List:${list} - solution: ${solution(list)}`
  );

function solution(A) {
  A.sort((a, b) => a - b);
  var next = 1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== next) {
      return next;
    }
    next++;
  }
  return next;
}

const list = [2, 3,4 , 1, 5];
console.log("Solution: ", solution(list));

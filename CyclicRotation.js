function solution(A, K) {
  if (A.length === K) {
    return A;
  }
  var l;
  if (K > A.length) {
    if (K % A.length === 0) {
      return A;
    } else {
      const aRestar = ~~(K / A.length) * A.length;
      K = K - aRestar;
    }
  }
  l = A.length - K;
  const removed = A.splice(0, l);
  return [...A, ...removed];
}

const list = [3, 8, 9, 7, 6];
console.log("Array:    ", list);
console.log("Solución: ", solution(list, 101));

// console.log(~~(32 / 10));

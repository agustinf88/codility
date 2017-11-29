const solution = A => {
  const l = A.length;
  console.log(l);
  if (l === 1) {
    return A[0];
  }

  A.sort((a, b) => a - b);
  for (var i = 0; i < l - 1; i += 2) {
    if (A[i] !== A[i + 1]) {
      return A[i];
      break;
    }
  }
  if (l % 2 === 0) {
    return;
  }
  return A[l - 1];
};

// const list = [9, 3, 9, 3, 9, 7, 9];
const list = [9, 9, 9, 9, 9, 9, 9];

console.log("Array: ", list);
console.log("Resultado: ", solution(list));
console.log(list.sort((a, b) => b - a));
console.log(list);

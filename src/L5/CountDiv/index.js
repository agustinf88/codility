const solution = (A, B, K) => {
  let max = ~~(B / K);
  let min = ~~(A / K);
  if (A % K === 0) {
    return max - min + 1;
  }
  return max - min;
};

// const list = [9, 3, 9, 3, 9, 7, 9];
const list = [1, 2, 3];

// console.log("Array: ", list);
module.exports = (A, B, C) =>
  console.log(
    `CountDiv - Input: ${A}-${B}-${C} - Resultado: ${solution(A, B, C)}`
  );

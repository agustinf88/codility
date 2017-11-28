const solution = A => {
  let value = A[0];
  let current = 0;
  breack = false;

  while (!breack) {
    let i = A.slice(current + 1).indexOf(value);
    console.log(`Value: ${value} - current: ${current} - Index: ${i + current}`);
    if (i === -1) {
      breack = true;
    }
    current++;
    value = A[current];
  }
};

const list = [9, 3, 9, 3, 9, 7, 9];
console.log("Array: ", list);
console.log("Resultado: ", solution(list));

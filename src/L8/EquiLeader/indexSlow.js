const getEquilider = list => {
  console.log(list);
  if (list.length === 1) {
    return { hasEquilider: true, value: list[0] };
  }
  if (list.length === 2) {
    if (list[0] === list[1]) {
      return { hasEquilider: true, value: list[0] };
    }
  }

  list.sort((a, b) => a - b);
  let index = ~~(list.length / 2);
  let candidate = list[index];
  // console.log(candidate);
  let count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === candidate) {
      count++;
      if (count > list.length / 2) {
        return { hasEquilider: true, value: candidate };
      }
    }
  }
  return { hasEquilider: false };
};

function solution(A) {
  let count = 0;
  for (var i = 0; i < A.length - 1; i++) {
    let equiLiderLeft = getEquilider(A.slice(0, i + 1));
    let equiliderRight = getEquilider(A.slice(i + 1, A.length));
    console.log(
      `EquiliderLeft: ${equiLiderLeft.value} - equiliderRight: ${
        equiliderRight.value
      }`
    );
    if(equiLiderLeft.value === equiliderRight.value){
      count++;
    }
  }
  return count;
}

let list = [4, 3, 4, 4, 4, 2];

console.log(
  `** Equilider       ** - list: ${list} - solution: ${solution(list)}`
);

const getEquilider = list => {
  list.sort((a, b) => a - b);
  let index = ~~(list.length / 2);
  let candidate = list[index];
  // console.log(candidate);
  let count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === candidate) {
      count++;
    }
  }
  if (count > list.length / 2) {
    return { value: candidate, total: count };
  }
  return {};
};

function solution(A) {
  let leader = getEquilider(A.slice());
  // console.log(leader);
  cl = 0;
  cr = leader.total;
  let count = 0;
  for (var i = 0; i < A.length; i++) {
    if (leader.value === A[i]) {
      cl++;
      cr--;
    }
    // console.log(
    //   `Index: ${i} - Left: ${cl} - Rigrh: ${cr} Cuenta IZQ: ${i +
    //     1 / 2} - Cuenta Der: ${(A.length - i - 1) / 2}`
    // );
    if (cl > (i + 1) / 2 && cr > (A.length - i - 1) / 2) {
      count++;
      // console.log("Contador++", count);
    }
  }
  return count;
}

let list = [4, 3, 4, 4, 4, 2];

console.log(
  `** Equilider       ** - list: ${list} - solution: ${solution(list)}`
);

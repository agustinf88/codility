function solution(A) {
  let min = A[0];
  let max_diferencia = 0;

  for (var i = 0; i < A.length; i++) {
    if (min > A[i]  ) {
      min = A[i];
      // max_diferencia = 0;
    } else {
      let dif = A[i] - min;
      if (dif > max_diferencia) {
        max_diferencia = dif;
      }
    }
  }

  return max_diferencia;
}

let list = [23171, 21123, 21011, 21366, 21013, 21367];

console.log(
  `** MaxProfit     ** - list: ${list} - solution: ${solution(list)}`
);

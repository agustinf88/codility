function solution(A, B) {
  const UP = 0;
  const DOWN = 1;
  let upList = [];
  let downList = [];

  for (var i = 0; i < B.length; i++) {
    if (B[i] === DOWN) {
      downList.push(A[i]);
    } else {
      let adde = false;
      while (downList.length > 0 && downList[downList.length - 1] < A[i]) {
        downList.pop();
      }
      if (downList.length === 0) {
        upList.push(A[i]);
      }
    }
    // console.log(`Indice: ${i} UP: ${upList} - DOWN: ${downList}`);
  }
  return upList.length + downList.length;
}

module.exports = (A, B) =>
  console.log(
    `** Brackets       ** - sizes: ${A} - Directions: ${B} - solution: ${solution(
      A,
      B
    )}`
  );

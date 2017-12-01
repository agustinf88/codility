function solution(X, A) {
  // console.log("** FrogRiverOne** ", A);
  let distance = X;
  var list = Array(X);
  for (var i = 0; i < A.length && distance > 0; i++) {
    let pos = A[i] - 1;
    if (!list[pos] || list[pos] > A[i]) {
      list[A[i] - 1] = A[i];
      distance--;
      // console.log(`Time: ${i} - Position: ${A[i]} - List: ${list}`);
    }
  }
  if (distance > 0) {
    return -1;
  }
  return i - 1;
}

module.exports = (time, list) =>
  console.log(
    `** FrogRiverOne **  K:${time} - List:${list} - SOLUTION: ${solution(
      time,
      list
    )}`
  );

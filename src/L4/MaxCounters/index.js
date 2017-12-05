const solution = (N, A) => {
  const cList = Array(N);
  let max = 0;
  cList.fill(max);
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      let pos = A[i] - 1;
      cList[pos]++;
      if(cList[pos] > max){
        max = cList[pos];
      }
    } else {
      cList.fill(max);
    }
  }
  return cList;
};

module.exports = (number, list) =>
  console.log(
    `** MaxCounter ** - List: ${list} - solution: ${solution(number, list)}`
  );

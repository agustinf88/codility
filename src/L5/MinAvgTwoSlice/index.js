function solution(A) {
  // console.log("List: ", A);
  let minAvg = (A[0] + A[1]) / 2;
  let minPos = 0;
  for (var i = 0; i < A.length - 1; i++) {
    let min = ((A[i] + A[i+1]) / 2)
    if( min < minAvg){
      minAvg = min;
      minPos = i;
    }

    min = ((A[i] + A[i+1] + A[i+2]) / 3)
    if( min < minAvg){
      minAvg = min;
      minPos = i;
    }
  }
  return minPos;
}

module.exports = list =>
  console.log(
    `** MinAvgTwoSlice ** - List: ${list} - Solution: ${solution(list)}`
  );

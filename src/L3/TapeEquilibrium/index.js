function sum(list) {
  let value = 0;
  list.forEach(x => {
    value += x;
  });
  return value;
}

function solution(A) {
  const l = A.length;
  var min;
  var head = A[0];

  var tail = 0
  A.slice(1, l).forEach(x => tail += x);

  min = Math.abs(head - tail);
  // console.log(`'head: ${head} - Tail:${tail} - Min: ${min}`);

  for (var i = 1; i < l - 1; i++) {
    head += A[i];
    tail -= A[i];

    const r = Math.abs(head - tail);
    if (r < min) {
      min = r;
    }
    // console.log(`I: ${i} -  head: ${head} - Tail:${tail} - Min: ${min}`);
  }

  return min;
}


// console.log("Solution: ", solution(list));
module.exports = list =>
  console.log(
    `** TapEquilimbrium ** - list: ${list}  solution:${solution(list)}`
  );

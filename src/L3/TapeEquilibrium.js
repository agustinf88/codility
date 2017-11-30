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
  console.log(head);
  var tail = sum(A.slice(1, l));
  console.log(tail);

  min = Math.abs(head - tail);

  for (var i = 1; i < l; i++) {
    head += A[i];
    tail -= A[i];

    const r = Math.abs(head - tail);
    if (r < min) {
      min = r;
    }
  }

  return min;
}

const list = [-100, 100];
console.log("Solution: ", solution(list));

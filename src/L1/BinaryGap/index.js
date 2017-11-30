const solution = n => {
  const list = n.toString(2);
  var results = [];
  var count = 0;
  const length = list.length;
  list.split("").forEach((x, i) => {
    if (x === "0") {
      count++;
    } else {
      if (count >= 1) {
        results.push(count);
      }
      count = 0;
    }
    if (i === length - 1) {
      if (count >= 1) {
        if (list[i] === "0") {
          count = 0;
        }
      }
    }
  });
  if (count >= 1) {
    results.push(count);
  }

  return results;
};

const lookForTheBigger = list => {
  var max = 0;
  list.forEach(x => {
    if (x > max) {
      max = x;
    }
  });
  return max;
};

const list = solution(20);
const max = lookForTheBigger(list);

console.log("BinaryGap: ", max);

module.exports = value => lookForTheBigger(solution(value));

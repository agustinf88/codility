function solution(x, y, d) {
  const r = (y - x) / d
  return Math.ceil(r);
}

console.log("Solución: ", solution(10, 85, 30));

// console.log(~~(32 / 10));

function solution(H) {
  let max = H.length;
  let count = 0;
  let current;
  for (var i = 0; i < H.length; i++) {
    let c = H[i];
    if (current > c) {
      
    } else {
      if (current + c > max) {
        current = c;
        coun++;
      }
    }
  }

  return "HOLA";
}

module.exports = list =>
  console.log(
    `** StoneWall       ** - list: ${list} - solution: ${solution(list)}`
  );

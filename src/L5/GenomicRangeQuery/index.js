const solution = (S, P, Q) => {
  let sequence = S.split("").map(x => {
    switch (x) {
      case "A":
        return 1;
      case "C":
        return 2;
      case "G":
        return 3;
      case "T":
        return 4;
        break;
    }
  });
  let r = Array(P.length);
  for (var i = 0; i < P.length; i++) {
    let init = Math.min(P[i], Q[i]);
    let end = Math.max(P[i], Q[i])
    let l = sequence.slice(init, end + 1).sort((a, b) => a - b);
    r[i] = l[0];
  }
  return r;
};

module.exports = (sequence, p, q) =>
  console.log(
    `** GenomicRangeQuery ** sequence: ${sequence} - P: ${p} - Q: ${q} - solution: ${solution(
      sequence,
      p,
      q
    )}`
  );

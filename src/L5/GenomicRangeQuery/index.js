// const solution = (S, P, Q) => {
//   let sequence = S.split("").map(x => {
//     switch (x) {
//       case "A":
//         return 1;
//       case "C":
//         return 2;
//       case "G":
//         return 3;
//       case "T":
//         return 4;
//         break;
//     }
//   });
//   let r = Array(P.length);
//   for (var i = 0; i < P.length; i++) {
//     let init = Math.min(P[i], Q[i]);
//     let end = Math.max(P[i], Q[i])
//     let l = sequence.slice(init, end + 1).sort((a, b) => a - b);
//     r[i] = l[0];
//   }
//   return r;
// };

const solution = (S, P, Q) => {
  const ponderation = { A: 1, C: 2, G: 3, T: 4 };
  // console.log("Ponderation: ", ponderation);
  const sums = { A: 0, C: 0, G: 0, T: 0 };
  const list = [];
  for (var i = 0; i <= S.length; i++) {
    list.push({ A: sums.A, C: sums.C, G: sums.G, T: sums.T });

    sums[S[i]]++;
  }
  // console.log(list);
  let mins = [];
  for (var i = 0; i < P.length; i++) {
    let start = P[i];
    let end = Q[i] + 1;

    // console.log(`Start: ${start} - End: ${end}`);

    if (list[end].A - list[start].A > 0) {
      // console.log(`${i} - Encontré A`);
      mins.push(ponderation.A);
    } else if (list[end].C - list[start].C > 0) {
      // console.log(`${i} - Encontré C`);
      mins.push(ponderation.C);
    } else if (list[end].G - list[start].G > 0) {
      // console.log(`${i} - Encontré G`);
      mins.push(ponderation.G);
    } else if (list[end].T - list[start].T > 0) {
      // console.log(`${i} - Encontré T`);
      mins.push(ponderation.T);
    }
  }

  return mins;
};

module.exports = (sequence, p, q) =>
  console.log(
    `** GenomicRangeQuery ** sequence: ${sequence} - P: ${p} - Q: ${q} - solution: ${solution(
      sequence,
      p,
      q
    )}`
  );

const solution = A => {
  var N = A.length;
    var sum = (N * (N+1)) / 2;
    var tap = [];
    for (var i in A) {
        sum-=A[i];
        if(tap[A[i]]) {
            return 0;
        }
        tap[A[i]] = true;
    }
    return +(sum==0);
};

// const list = [9, 3, 9, 3, 9, 7, 9];
const list = [1,2,3];

console.log("Array: ", list);
console.log("Resultado: ", solution(list));

function solution(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let big = arr1;
  let lit = arr2;
  let r = [];
  if (lit.length > big.length) {
    lit = arr1;
    big = arr2;
  }
  big = [...new Set(big)];

  for (let n = 0; n < lit.length; n++) {
    if (big.includes(lit[n])) r.push(lit[n]);
  }

  return r;
}

console.log(solution("aabcc", "adcaa"));

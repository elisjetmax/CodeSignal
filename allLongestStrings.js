function solution(inputArray) {
  var arr = [];
  var max = 0;

  for (let a = 0; a < inputArray.length; a++) {
    let text = inputArray[a];
    arr.push(text.length);
    max = Math.max.apply(Math, arr);
  }

  const r = inputArray.filter((x) => x.length === max);
  return r;
}

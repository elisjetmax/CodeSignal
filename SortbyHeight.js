function solution(a) {
  let nt = a.filter(n=> n !== -1);
  nt.sort((a,b)=> a-b);
  let r = [];
  let b = 0;
  a.forEach(n => {
    if(n=== -1) {
      r.push(-1);
    }else{
      r.push(nt[b]);
      b++;
    }
  });
   return r
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))

function solution(inputString) {
   let arr = inputString;
   let i = 0, start = 0, end = -1;
   while(end < start && i < arr.length){
   	if(arr[i] === '(') start = i;
   	if(arr[i] === ')') end = i;
    i++
   }
   
   let temp = arr.substring(start+1,end);
   if(start !== 1 && end !== -1){
   	let p1 = arr.substring(0,start);
    let p2 = [...temp].reverse().join('')
    let p3 = arr.substring(end + 1)
  	return solution(p1 + p2 + p3);
   }
   return arr;
}

function solution(n) {
	let firsts = n.toString().split('');
	if(firsts.length % 2 > 0) return false; 
    let lasts = firsts.splice(firsts.length / 2) 
    let n1 = firsts.reduce((pv,cv) => parseInt(pv) +parseInt(cv),0 );
    let n2 = lasts.reduce((pv,cv) => parseInt(pv) +parseInt(cv),0 );
	return n1 === n2
}

console.log(solution(1231))

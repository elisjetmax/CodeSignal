function solution(matrix) {
    let sum = 0;
     for(let row = 0; row < matrix.length; row++){
       const currRow =  matrix[row]; 
       for (let col = 0; col<currRow.length; col++){
         const currCol = currRow[col]; 
         if(currCol === 0){ 
          if(row + 1 < matrix.length){
         		matrix[row + 1][col] = 0;
          }
         }else{
         sum+=currCol;
         }
       }
          console.log('matrix', matrix);
     }
     return sum;
}

function solution(str){
   var arr1 = str.match(/(..?)/g);

   if (arr1[arr1.length-1].length == 1) {
    arr1[arr1.length-1] += '_';
   }
   return arr1;
}

console.log(solution('abc'));

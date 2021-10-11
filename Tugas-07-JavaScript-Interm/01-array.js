//1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
    const result = [];
    arr.forEach(function(value){
        result.unshift(value);
    })
    return result;
};

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr); //[1, 2, 3], [3, 2, 1]
console.log(arr2, newArr2); //[8, 1, 5, 7], [7, 5, 1, 8]



// 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(x) {
  let total = 0;
  let rata = 0;
  let bil = 0;

  for(let i=0; i<x.length; i++){
    total = total+x[i];
  }
  rata = total/x.length;
  for(let j=0; j<x.length; j++){
    if(x[j] > rata){
      bil = bil+1;
    }else{
      bil = bil+0;
    }
  } 
  return bil
}
console.log(getAverage(arr1)) //Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
console.log(getAverage(arr2)) // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8



//3
const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(x, s) {
  let value = true
  let temp = 0
  for(let i=0; i<x.length; i++) {
    for(let j=0; j<x[i].length; j++){
       temp += 1
       if(x[i][j] === s){
         return temp-1
         value = false
         break
       }
    }
  }
  if(value){
    return null
  }
}

console.log(searchInArray(arr, 3)); // null
console.log(searchInArray(arr, 2)); // 4
console.log(searchInArray(arr, 4)); // null
console.log(searchInArray(arr, 8)); // 5
/// 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
  if(arr.length === 0){
    return 0
  }
  const nilai = arr[0]
  return nilai + sumOfArray(arr.slice(1))
}

console.log(sumOfArray(arr1)); // 15
console.log(sumOfArray(arr2)); // 36



/// 2
const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;
function countAboveAvg( arr, avg ) { 
  if(arr.length === 0) {
    return 0
  }  return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg)
 }

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1); // 3
console.log(totalAboveAvg2); // 2



/// 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, number) {
    if (arr[arr.length - 1] === number) {
        console.log(`Angka ditemukan pada index : ${arr.length -1}`);
        return null
    }
    if (arr.length === 1) {
        console.log('Angka tidak ditemukan')
        return null
    }
    const arr_1 = arr.slice()
    arr_1.pop()
    return searchInArray(arr_1, number)
}
searchInArray(arr, 6); // "angka tidak ditemukan"
searchInArray(arr, 1); // "angka ditemukan pada index: 0"
searchInArray(arr, 8); // "angka tidak ditemukan"



///4
function trianglePattern(a,b) {
    if (a === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < b; i++) {
        if (i < a - 1) {
            space += " " 
        }else{
         space += String.fromCharCode(64 + (b - a + (i - a) + 2))
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
}

trianglePattern(5, 5);
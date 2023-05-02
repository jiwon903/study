// 실무에서 사용하는 코드는 아닙니다.
const arr = Array(100).fill(0)
const arr2 = []


// 같은 코드1 (이름이 없는 함수 사용)
 arr.forEach(function(item, index){
     arr2.push(index+1)
 })
console.log(arr2)
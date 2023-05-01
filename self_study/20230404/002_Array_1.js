// arr(*****)
const arr = [10, 20, 30]
arr[0] = 100 // const는 값의 변화가 안된다고 하지 않았나? // 변경가능, mutable
// arr = 100
// arr = [10, 20, 30]
console.log(arr)
console.dir(arr) // 프러퍼티와 메서를 볼 수 있습니다.

// 문자열(string)
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 불변, immutable
console.log(s[0])

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을찍어서 호출할 수 있습니다.
arr[1]
arr.length
console.log('이거' + arr['length'])

// 두개가 같은 얘기입니다.
arr.length = 10
arr[0] = 100
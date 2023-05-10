// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

let answer = Array.from('hello mark').filter((el) => !['a','e','i','o','u',' '].includes(el))
console.log(answer);
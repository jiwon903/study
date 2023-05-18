

function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
console.log(함수1(1, 1))

function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
// a와 c에 들어갈 것이라고 생각했지만 a와 b에 들어갑니다.
console.log(함수1(a = 1, c = 1))
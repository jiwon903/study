// random은 확률적으로 random이 맞나?
// 게임 확률

//Math.random()함수는 0~1(1은 미포함)사이의 부동소숫점 랜덤한 수를 생성한다.
//Math.floor() 함수는 소수점 1번째 자리를 버림하여 정수를 리턴하는 함수(소숫점 이하를 버린다.)
let answer = Math.floor(Math.random() * 100)
let count = 0

for (; ;) {
    count += 1
    let userInput = parseInt(window.prompt('값을 입력해주세요!'))
    if (answer > userInput) {
        window.alert('UP!')
    }
    else if (answer < userInput) {
        window.alert('DOWN!')
    }
    else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')
    }
    else {
        window.alert('Correct!')
        break
    }
}

console.log(`${count}번째 맞추셨습니다!`)
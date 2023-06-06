//랜덤한 값을 저장해두고 사용자에게 값을 받아서 그 값이 맞을 때 까지 추리해보는 게임을 만들자
//값을 제출하면 정답보다 큰지 작은지 판단할 수 있게 알려주고
//정답을 맞출 경우 횟수와 함께 게임이 종료된다.

//<알고리즘>
//랜덤한 값을 저장할 변수 설정
//사용자의 입력 횟수를 저장할 count 변수 설정
//[for 문 작성]유저가 답을 맞출 때 까지, 사용자의 입력값을 받고 업다운을 알려줄 수 있게 만들어줌.
//유저가 정답을 맞출 경우 break 로 반복문 종료하고 결과 보여줌.

let randomNum = Math.floor(Math.random()*100);
let count=0;

for(;;){
    let userNum = parseInt(window.prompt('값을 입력해주세요','숫자를 입력해주세요'));
    if(randomNum>userNum) {
        window.alert('더 큰값을 입력해보세요!');
    }
    else if(randomNum<userNum) {
        window.alert('더 큰값을 입력해보세요!');
    }

}
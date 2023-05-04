// map (면접 질문에서도 많이 나옵니다. 데이터를 뽑으려고 많이 사용합니다.)
//map() 함수는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 함수이다.

// map은 forEach와 다르게 새로운 배열을 생성합니다.

const arr = [1, 2, 3]
const arr2 = arr.map(function (item, index) {
    return item ** 2
})
console.log(arr2);
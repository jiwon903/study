let num =10;

console.log(num);
console.log(num / 3);
console.log(parseInt(num/3));

console.log("더하기 : " , 2+2.5);
console.log('빼기 : ',5-7);
console.log('곱하기 : ',3*2);

console.log(0.1 + 0.2 ==0.3);
console.log(999999999999999999999);


let n =10000;
let nFloat = 10000.123123123;
let s = '10,000,000';
console.log(`n : ${n} `);
console.log(`n.toLocaleString() : ${n.toLocaleString()}`);
console.log(`s : ${s}`);
//replace() 의 의미는 특정 문자를 다른 문자로 치환해주는 메소드이다.
//아래에서 /,/g <- 의미는 //안의 값을 바꿔주겠다는 의미이고 이때 g가 뜻하는 바는 global 즉 모든 문자열을 변경해주겠단느 의미이다. g대신 i를 사용할 경우 영문 대소문자를 무시하고 일치하는 패턴을 검색해준다는 의미이다.(ignore)
//'' <- 의미는 변경할 문자열읠 의미한다.
console.log(`s.replace(/,/g,'') : ${s.replace(/,/g,'')}`);
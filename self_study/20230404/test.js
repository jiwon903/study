let arr = 'abcde1abc12abb';

console.log(arr.split('').filter(char => !isNaN(parseInt(char))).map(num => parseInt(num)).reduce((accumulator, currentValue) => accumulator + currentValue));
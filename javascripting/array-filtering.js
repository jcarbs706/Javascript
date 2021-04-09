const numbers = [1,2,3,4,5,6,7,8,9,10];
const filtered = numbers.filter(function evenNumbers(number){  //.filter automatically looks at each number in the
    return number % 2 === 0                                 //  array, the defined function tells it what to keep
})

console.log(filtered)
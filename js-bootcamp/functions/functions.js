// function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let ans = num * num
    return ans
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//Converter ===============================================

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * (5/9);
    return celcius
}

let tempOne = convertFahrenheitToCelcius(68)
let tempTwo = convertFahrenheitToCelcius(32)

console.log(tempOne)
console.log(tempTwo)
//define printHello using arrow function
let printHello = () => console.log('Hello World')

// define printMessage using arrow function
let printMessage = (msg) => console.log(msg)

// define addNumbers using arrow
let addNumbers = (num1, num2) => console.log(num1+num2)

// define squareNum using arrow
let squareNum = (num) => {
    let result = num * num
    return result
}

// call the arrow function
printHello()
printMessage('Hi Rajeshwari')
addNumbers(20,30)
let output = squareNum(15)
console.log('Output is ' + output)



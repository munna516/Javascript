// Number and a string +
var num1 = 10 + '4'
console.log(num1)
console.log("Type is : ", typeof num1)

// Number and a string -
var num2 = 10 - '4'
console.log(num2)
console.log("Type is : ", typeof num2)

// Number and a string *
var num3 = 10 * '4'
console.log(num3)
console.log("Type is : ", typeof num3)

// Number and a string /
var num4 = 10 / '4'
console.log(num4)
console.log("Type is : ", typeof num4)

// Not a Number
var x = 10 - "abc"
console.log(x)
console.log("Type is : ", typeof x)


// typeof NaN is Number
console.log(typeof NaN)

// One of the unique properties of NaN is that it is not equal to itself.it returns false
console.log(NaN == NaN)

// isNaN property
console.log(isNaN(NaN));        // true
console.log(isNaN(123));        // false
console.log(isNaN("Hello"));    // true, because "Hello" is not a number
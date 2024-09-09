function add(num1, num2) {
    return num1 + num2
}
function subtruct(num1, num2) {
    return num1 - num2
}
function multiplication(num1, num2) {
    return num1 * num2
}
function division(num1, num2) {
    return num1 / num2
}

function Calculator(num1, num2, operator) {
    if (operator === '+')
        return add(num1, num2)
    else if (operator === '-')
        return subtruct(num1, num2)
    else if (operator === '*')
        return multiplication(num1, num2)
    else if (operator === '/')
        return division(num1, num2)
    else
        return "Invalid Operator"
}

console.log(Calculator(22, 3, '*'))
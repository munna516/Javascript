let str = "my name is mehedi hasan munna"
let result = ''
for (let i = 0; i < str.length; i++) {
    if (i == 0) {
        result += str[i].toUpperCase()
        continue
    }
    if (str[i] === ' ') {
        let x = str[i + 1].toUpperCase()
        result += ' '
        result += x
        i += 2
    }
    result += str[i]
}
console.log(result)
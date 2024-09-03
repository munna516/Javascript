let str = "My name is Mehedi Hasan MunnA"
let count = 0

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'A')
        count++
}
console.log(count)
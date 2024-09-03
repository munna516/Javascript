const str1 = "My name is Mehedi Hasan Munna"

// Slice the string
const str2 = str1.slice(3, 9)
console.log(str2)

// Split the string. we found a split array
const str3 = str1.split(' ')
console.log(str3)

// Join the array
console.log(str3.join(" "))


// Reverse the string
const sentence = "I love my country"

const rev = sentence.split(' ').reverse().join(' ')
console.log(rev)
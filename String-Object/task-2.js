// Check whether a string contains all the vowels a, e, i, o, u
let str = "Money can not buy happiness"
let a = 0, e = 0, I = 0, o = 0, u = 0

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a')
        a++
    else if (str[i] === 'e')
        e++
    else if (str[i] === 'i')
        I++
    else if (str[i] === 'u')
        u++
    else if (str[i] === 'o')
        o++
}
if (a > 0 && e > 0 && I > 0 && o > 0 && u > 0)
    console.log("All Vowel Appers")
else
    console.log("Not All Vowel Appers")
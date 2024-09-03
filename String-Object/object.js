// Array and collection of strings ar object
const ar = [1, 2, 3, 4, 5]
const str = ["Bangla", "English", "Math", "Biology"]
console.log(typeof ar)
console.log(typeof str)

// Object
const bottle = {
    brand: "Apple",
    color: "White",
    price: 45,
    "Expire-date": "16-9-26"
}
console.log(typeof bottle)
console.log(bottle)

console.log(bottle.brand)
console.log(bottle['color'])
console.log(bottle["Expire-date"])


// Keys
const keys = Object.keys(bottle)
const values = Object.values(bottle)
console.log(keys)
console.log(values)

let str6 = "Mississippi";
console.log(str6.indexOf("i", 3));
var height = 1.64592
var weight = 85

var bmi = weight / (height * height)
console.log(bmi)
if (bmi < 18.5) {
    console.log("You are Under Weight")
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal.")
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("you are overweight")
}
else {
    console.log("you are obese.")
}
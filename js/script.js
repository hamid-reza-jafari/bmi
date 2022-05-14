let weight = document.getElementById("weight")
let height = document.getElementById("height")
let weightVal = document.getElementById("weight-val")
let heightVal = document.getElementById("height-val")
let result = document.getElementById("result")
let category = document.getElementById("category")
let body = document.body;

function weightChange() {
    weightVal.innerHTML = weight.value + " kg"
}

function heightChange() {
    heightVal.innerHTML = height.value + " cm"
}

function findBMI() {
    let convertMeter = height.value / 100
    let heightPow = convertMeter ** 2;
    let resultFormulla = weight.value / heightPow
    let finallResult = resultFormulla.toFixed(1)
    result.innerHTML = finallResult

    if (finallResult <= 18.5) {
        category.innerHTML = "you have losing weight !"
        result.style.color = "orange"
    } else if (finallResult <= 24.9 && finallResult > 18.5) {
        category.innerHTML = "Very Good, you are in the right range :)"
        result.style.color = "green"
    } else if (finallResult <= 29.9 && finallResult > 24.9) {
        category.innerHTML = "you have over weight !"
        result.style.color = "orange"
    } else if (finallResult <= 39.9 && finallResult > 29.9) {
        category.innerHTML = "Alarm ! you suffer from obesity..."
        result.style.color = "red"
    }
}

function backgroundChanger() {
    let backSrcArray = ["./image/w11\ \(1\).jpg", "./image/w11\ \(2\).jpg", "./image/w11\ \(3\).jpg", "./image/w11\ \(1\).webp"]
    let arrayIndex = backSrcArray.length
    let finallyIndex = Math.floor(Math.random() * arrayIndex);
    body.style.backgroundImage = "url('" + backSrcArray[finallyIndex] + "')"
}

weight.addEventListener("input", weightChange)
weight.addEventListener("input", findBMI)
height.addEventListener("input", heightChange)
height.addEventListener("input", findBMI)
window.addEventListener("load", backgroundChanger)

// setInterval(function () {
//     let backSrcArray = ["./image/w11\ \(1\).jpg", "./image/w11\ \(2\).jpg", "./image/w11\ \(3\).jpg", "./image/w11\ \(1\).webp"]
//     let arrayIndex = backSrcArray.length
//     let finallyIndex = Math.floor(Math.random() * arrayIndex);
//     body.style.backgroundImage = "url('" + backSrcArray[finallyIndex] + "')"
//     // if()
//     }, 2000)

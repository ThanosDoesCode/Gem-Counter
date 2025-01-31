let saveElLight = document.getElementById("save-el-light")
let saveElDark = document.getElementById("save-el-dark")
let countElLight = document.getElementById("count-el-light")
let countElDark = document.getElementById("count-el-dark")
let totalElLight = document.getElementById("total-el-light")
let totalElDark = document.getElementById("total-el-dark")

let countLight = 0
let countDark = 0
let totalCountLight = 0
let totalCountDark = 0

function increment() {
    countLight += 1
    countElLight.textContent = countLight
}

function increment2() {
    countLight += 2
    countElLight.textContent = countLight
}

function increment3() {
    countLight += 3
    countElLight.textContent = countLight
}

function increment4() {
    countDark += 1
    countElDark.textContent = countDark
}

function increment5() {
    countDark += 2
    countElDark.textContent = countDark
}

function increment6() {
    countDark += 3
    countElDark.textContent = countDark
}

function save() {
    let countStr = countLight + " - "
    saveElLight.textContent += countStr
    
    totalCountLight += countLight  // Add current count to total
    totalElLight.textContent = "Total gems: " + totalCountLight  // Update total display
    
    countElLight.textContent = 0
    countLight = 0
}

function save2() {
    let countStr = countDark + " - "
    saveElDark.textContent += countStr
    
    totalCountDark += countDark  // Add current count to total
    totalElDark.textContent = "Total gems: " + totalCountDark  // Update total display
    
    countElDark.textContent = 0
    countDark = 0
}

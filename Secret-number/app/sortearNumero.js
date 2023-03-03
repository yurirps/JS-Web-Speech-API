const lowerValue = 1
const highestValue = 100
const secretNumber = generateNumber()

function generateNumber() {
    return parseInt (Math.random() * highestValue + 1)
}

const lowestValueElement = document.getElementById ('menor-valor')
lowestValueElement.innerHTML = lowerValue

const highestValueElement = document.getElementById ('maior-valor')
highestValueElement.innerHTML = highestValue


//console.log ('Secret Number: ', secretNumber)
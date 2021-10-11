const cashInput = document.getElementById('cash-input')
const loadInput = document.getElementById('load-input')
const downInput = document.getElementById('down-input')
const closingInput = document.getElementById('closing-input')
const irInput = document.getElementById('ir-input')
const yearsInput = document.getElementById('years-input')
const rennovationInput = document.getElementById('rennovation-input')
const additionalInput = document.getElementById('additional-input')
const monthlyInput = document.getElementById('monthly-input')
const rentInput = document.getElementById('monthly-rent')

cashInput.addEventListener('input', () => {
    displayEvent()
})

loadInput.addEventListener('input', () => {
    displayEvent()
})

downInput.addEventListener('input', () => {
    displayEvent()
})

closingInput.addEventListener('input', () => {
    displayEvent()
})

irInput.addEventListener('input', () => {
    displayEvent()
})

yearsInput.addEventListener('input', () => {
    displayEvent()
})

rennovationInput.addEventListener('input', () => {
    displayEvent()
})

additionalInput.addEventListener('input', () => {
    displayEvent()
})

monthlyInput.addEventListener('input', () => {
    displayEvent()
})

rentInput.addEventListener('input', () => {
    displayEvent()
})

function displayEvent(){
    console.log(cashInput.value)
    console.log(loadInput.value)
    console.log(downInput.value)
    console.log(closingInput.value)
    console.log(irInput.value)
    console.log(yearsInput.value)
    console.log(rennovationInput.value)
    console.log(additionalInput.value)
    console.log(monthlyInput.value)
    console.log(rentInput.value)
}


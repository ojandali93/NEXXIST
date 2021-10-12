const loanAmount = document.getElementById('loan-amount-input')
const downPaymentAmount = document.getElementById('down-payment-input')
const closingCostAmount = document.getElementById('closing-cost-input')
const yearAmount = document.getElementById('year-input')
const interestRateAmount = document.getElementById('interest-rate-input')
const additionaCostAmount = document.getElementById('additional-cost-value')
const rentAmount = document.getElementById('rent-input')
const revenueAmount = document.getElementById('revenue-input')

loanAmount.addEventListener('input', () => {
    console.log(loanAmount.value)
})

downPaymentAmount.addEventListener('input', () => {
    console.log(downPaymentAmount.value)
})

closingCostAmount.addEventListener('input', () => {
    console.log(closingCostAmount.value)
})

yearAmount.addEventListener('input', () => {
    console.log(yearAmount.value)
})

interestRateAmount.addEventListener('input', () => {
    console.log(interestRateAmount.value)
})

additionaCostAmount.addEventListener('input', () => {
    console.log(additionaCostAmount.value)
})

rentAmount.addEventListener('input', () => {
    console.log(rentAmount.value)
})

revenueAmount.addEventListener('input', () => {
    console.log(revenueAmount.value)
})
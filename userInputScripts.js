document.querySelectorAll('#loan-amount-input').forEach(item => {
    item.addEventListener('input', event => {
        console.log(`Loan Amount: ${item.value}`)
    })
})

document.querySelectorAll('#down-payment-input').forEach(item => {
    item.addEventListener('input', event => {
        console.log(`Down Payment: ${item.value}`)
    })
})

document.querySelectorAll('#closing-cost-input').forEach(item => {
    item.addEventListener('input', event => {
        console.log(`Closing Costt: ${item.value}`)
    })
})

document.querySelectorAll('#year-input').forEach(item => {
    item.addEventListener('input', event => {
        console.log(`Loan Years: ${item.value}`)
    })
})

document.querySelectorAll('#interest-rate-input').forEach(item => {
    item.addEventListener('input', event => {
        console.log(`Interest Rate: ${item.value}`)
    })
})
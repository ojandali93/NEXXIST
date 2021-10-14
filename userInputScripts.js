import { testHomes } from './setDefaultValues.js'
import { calculateTotalMortgage } from './calculationScripts.js'
import { calculateTotalNoMortgage } from './calculationScripts.js'
import { calculateCashFlow } from './investmentMetrics.js'
import { calculateCashOnCashFlow } from './investmentMetrics.js'
import { calculateGrossOperatingIncome } from './investmentMetrics.js'

document.querySelectorAll('.additional-cost-value').forEach(item => {
    item.addEventListener('input', event => {
        let classList = item.classList
        updateTotalMonthly(item, classList)
    })
})

function updateTotalMonthly(item, classItem){
    const currentItemMortgage = document.getElementsByClassName(`total-expenses-mortgage-input ${classItem[1]}`)
    const currentItemNoMortgage = document.getElementsByClassName(`total-expenses-no-mortgage-input ${classItem[1]}`)
    for(let i = 0; i < testHomes.length; i++){
        if(classItem[1] == testHomes[i]['mls']){
            if(item.value >= 0){
                testHomes[i]['additional_cost'] = parseInt(item.value)
                let monthlyMortage = calculateTotalMortgage(testHomes[i])
                let monthlyNoMortgage = calculateTotalNoMortgage(testHomes[i])
                currentItemMortgage[0].innerHTML = `$${monthlyMortage}`
                currentItemNoMortgage[0].innerHTML = `$${monthlyNoMortgage}`
                calculateCashFlow(testHomes[i])
                calculateCashOnCashFlow(testHomes[i])
            }
        }
    }
}

document.querySelectorAll('.rent-input').forEach(item => {
    item.addEventListener('input', event => {
        let classList = item.classList
        const currentTotal = document.getElementsByClassName(`total-revenue-input ${classList[1]}`)
        for(let i = 0; i < testHomes.length; i++){
            if(classList[1] == testHomes[i]['mls']){
                if(item.value >= 0){
                    testHomes[i]['rent'] = parseInt(item.value)
                    let totalRevenue = updateTotalRevenue(testHomes[i])
                    currentTotal[0].innerHTML = `$${totalRevenue}`
                    calculateCashFlow(testHomes[i])
                    calculateCashOnCashFlow(testHomes[i])
                    calculateGrossOperatingIncome(testHomes[i])
                }
            }
        }
    })
})

document.querySelectorAll('.revenue-input').forEach(item => {
    item.addEventListener('input', event => {
        let classList = item.classList
        const currentTotal = document.getElementsByClassName(`total-revenue-input ${classList[1]}`)
        for(let i = 0; i < testHomes.length; i++){
            if(classList[1] == testHomes[i]['mls']){
                if(item.value >= 0){
                    testHomes[i]['revenue'] = parseInt(item.value)
                    let totalRevenue = updateTotalRevenue(testHomes[i])
                    currentTotal[0].innerHTML = `$${totalRevenue}`
                    calculateCashFlow(testHomes[i])
                    calculateCashOnCashFlow(testHomes[i])
                    calculateGrossOperatingIncome(testHomes[i])
                }
            }
        }
    })
})

function updateTotalRevenue(home){
    let rent = home['rent']
    let revenue = home['revenue']
    let monthlyRevenue = rent + revenue 
    home['total_revenue'] = monthlyRevenue
    return monthlyRevenue
}

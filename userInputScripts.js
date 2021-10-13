import { testHomes } from './setDefaultValues.js'
import { calculateTotalMortgage } from './calculationScripts.js'

document.querySelectorAll('.additional-cost-value').forEach(item => {
    item.addEventListener('input', event => {
        let classList = item.classList
        updateTotalMonthly(item, classList)
    })
})

function updateTotalMonthly(item, classItem){
    const currentItem = document.getElementsByClassName(`total-expenses-input ${classItem[1]}`)
    for(let i = 0; i < testHomes.length; i++){
        if(classItem[1] == testHomes[i]['mls']){
            if(item.value >= 0){
                testHomes[i]['additional_cost'] = item.value
                let newMonthly = calculateTotalMonthly(testHomes[i])
                currentItem[0].innerHTML = `$${newMonthly}`
                console.log(currentItem[0].innerHTML)
            }
        }
    }
}

document.querySelectorAll('.rent-input').forEach(item => {
    item.addEventListener('input', event => {
        let classList = item.classList
        const currentTotal = document.getElementsByClassName(`total-revenue-input ${classList[1]}`)
        console.log(currentTotal[0])
        for(let i = 0; i < testHomes.length; i++){
            if(classList[1] == testHomes[i]['mls']){
                if(item.value >= 0){
                    testHomes[i]['rent'] = parseInt(item.value)
                    console.log(testHomes[i]['rent'])
                    let totalRevenue = updateTotalRevenue(testHomes[i])
                    currentTotal[0].innerHTML = `$${totalRevenue}`
                }
            }
        }
    })
})

document.querySelectorAll('.revenue-input').forEach(item => {
    item.addEventListener('input', event => {
        let classList = item.classList
        const currentTotal = document.getElementsByClassName(`total-revenue-input ${classList[1]}`)
        console.log(currentTotal[0])
        for(let i = 0; i < testHomes.length; i++){
            if(classList[1] == testHomes[i]['mls']){
                if(item.value >= 0){
                    testHomes[i]['revenue'] = parseInt(item.value)
                    console.log(testHomes[i]['revenue'])
                    let totalRevenue = updateTotalRevenue(testHomes[i])
                    currentTotal[0].innerHTML = `$${totalRevenue}`
                }
            }
        }
    })
})

function updateTotalRevenue(home){
    let rent = home['rent']
    let revenue = home['revenue']
    let monthlyRevenue = rent + revenue 
    return monthlyRevenue
}

import { testHomes } from './setDefaultValues.js'
import { calculateTotalMonthly } from './calculationScripts.js'

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
                currentItem[0].innerHTML = newMonthly
                console.log(currentItem[0].innerHTML)
            }
        }
    }
}
import { calculateDownPayment } from './calculationScripts.js'

export function calculateCashFlow(home){
    const currentItem = document.getElementsByClassName(`cash-flow-value ${home['mls']}`)
    let cashFlowMortgage = parseInt(home['total_revenue']) - parseInt(home['monthly_mortgage'])
    let cashFlowNoMortgage = parseInt(home['total_revenue']) - parseInt(home['monthly_no_mortgage'])
    currentItem[0].innerHTML = `$${cashFlowMortgage} / $${cashFlowNoMortgage}`
}

export function calculateCashOnCashFlow(home){
    const currentItem = document.getElementsByClassName(`cash-on-cash-value ${home['mls']}`)
    let cashReceived = home['total_revenue']
    let cashInvestedMortgage = calculateDownPayment(home['price'])
    let cashInvestedNoMortgage = home['price']
    let cashOnCashReturnM = (cashReceived * 12) / cashInvestedMortgage
    let cashOnCashReturnNM = (cashReceived * 12) / cashInvestedNoMortgage
    let finalCOCRM = cashOnCashReturnM * 100
    let finalCOCNRM = cashOnCashReturnNM * 100
    currentItem[0].innerHTML = `%${finalCOCRM.toFixed(2)} / %${finalCOCNRM.toFixed(2)}`
}

export function calculateGrossOperatingIncome(home){
    const currentItem = document.getElementsByClassName(`gross-operating-income-value ${home['mls']}`)
    let rent = home['rent'] * 12
    let revenue = home['revenue']
    let vaccancyRate = .94 
    let grossOperatedIncome = (rent * vaccancyRate) + revenue
    currentItem[0].innerHTML = `$${grossOperatedIncome} W/ 8% VR`
}
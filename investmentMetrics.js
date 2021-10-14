import { calculateDownPayment } from './calculationScripts.js'
import { calculateClosingCost } from './calculationScripts.js'

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
    return grossOperatedIncome
}

export function calculateOperatingExpenseRatio(home){
    const currentItem = document.getElementsByClassName(`operating-expense-ratio-value ${home['mls']}`)
    let goi = calculateGrossOperatingIncome(home)
    let operatingExpensesMortgage = home['monthly_mortgage']
    let operatingExpensesNoMortgage = home['monthly_no_mortgage']
    let operatingEexpenseRatioMortgage = ((operatingExpensesMortgage* 12)/goi) * 100
    let operatingEexpenseRatioNoMortgage = ((operatingExpensesNoMortgage* 12)/goi) * 100
    currentItem[0].innerHTML = `%${operatingEexpenseRatioMortgage.toFixed(2)} / %${operatingEexpenseRatioNoMortgage.toFixed(2)}`
}

export function calculateNetOperatingExpenses(home){
    const currentItem = document.getElementsByClassName(`net-operating-income-value ${home['mls']}`)
    let goi = calculateGrossOperatingIncome(home)
    let operatingExpensesNoMortgage = home['monthly_no_mortgage']
    let netOperatingIncome = goi - (operatingExpensesNoMortgage * 12)
    currentItem[0].innerHTML = `$${netOperatingIncome.toFixed(2)}`
    return netOperatingIncome
}

export function calculateRentCostRatio(home){
    const currentItem = document.getElementsByClassName(`rent-cost-ratio-value ${home['mls']}`)
    let annualRent = home['rent'] * 12
    let price = home['price']
    let rentPriceRatio = (annualRent / price) * 100
    currentItem[0].innerHTML = `%${rentPriceRatio.toFixed(2)}`
}

export function calculateGrossRentMultiplier(home){
    const currentItem = document.getElementsByClassName(`gross-rent-multiplier-value ${home['mls']}`)
    let annualRent = home['rent'] * 12
    let price = home['price']
    let grossRentMultipler = (price / annualRent)
    currentItem[0].innerHTML = `${grossRentMultipler.toFixed(2)}`
}

export function calculateReturnOnInvestment(home){
    console.log(home)
    const currentItem = document.getElementsByClassName(`return-on-investment-value ${home['mls']}`)
    let initialInvestmentMortgage = parseInt(calculateDownPayment(home['price'])) + parseInt(calculateClosingCost(home['price']))
    let initialInvestmentNoMortgage = parseInt(home['price']) + parseInt(calculateClosingCost(home['price']))
    let monthlyRevenueMortgage = parseInt(home['total_revenue'] * 12) - parseInt(home['monthly_mortgage']) * 12
    let monthlyRevenueNoMortgage = parseInt(home['total_revenue'] * 12) - parseInt(home['monthly_no_mortgage']) * 12
    let mortgageROI = (monthlyRevenueMortgage / initialInvestmentMortgage) * 100
    let noMortgageROI = (monthlyRevenueNoMortgage / initialInvestmentNoMortgage) * 100
    currentItem[0].innerHTML = `%${mortgageROI.toFixed(2)} / %${noMortgageROI.toFixed(2)}`
}

export function calculateVacancyRate(home){
    const currentItem = document.getElementsByClassName(`vacancy-rate-value ${home['mls']}`)
    let vacancyRateDays = Math.round(.08 * 365)
    let rent = home['rent'] * 12
    let vaccancyRate = .94 
    let annualRate = (rent * vaccancyRate) / vacancyRateDays
    currentItem[0].innerHTML = `$${annualRate.toFixed(2)}/Day`
}

export function calculateCapitalizationRate(home){
    const currentItem = document.getElementsByClassName(`capitalization-rate-value ${home['mls']}`)
    let noi = 1
    let cost = parseInt(home['price'])
    let capitalizationRate = (noi/cost) * 100
    currentItem[0].innerHTML = `$${capitalizationRate.toFixed(2)}%`
}
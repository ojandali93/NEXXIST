export let defaultYears = 30
export let defaultInterestRate = .0315

export function calculateDownPayment(price){
    let downPayment = price * .2
    return downPayment.toFixed(2)
}

export function calculateLoanAmount(price){
    let downPayment = calculateDownPayment(price)
    let loanAmount = price - downPayment
    return loanAmount.toFixed(2)
}

export function calculateClosingCost(price){
    let loanAmount = calculateLoanAmount(price)
    let closingCost = loanAmount * .03
    return closingCost.toFixed(2)
}

export function calculateInterestRate(){
    return defaultInterestRate * 100;
}

export function calculateMonthlyMortgage(price){
    let loanAmount = calculateLoanAmount(price)
    let interestRate = defaultInterestRate/12
    let poweredRate = Math.pow(1 + interestRate, 360)
    let monthlyPayment = loanAmount * (interestRate * poweredRate) / (poweredRate - 1)
    return monthlyPayment.toFixed(2)
}

export function calculateTotalMortgage(home){
    let principleAndInterest = calculateMonthlyMortgage(home['price'])
    let propertyTax = home['property_tax']
    let homeInsurance = home['home_insurance']
    let hoaFee = home['hoa']
    let additionalCost = home['additional_cost']
    let totalMonthly = parseInt(principleAndInterest) + parseInt(propertyTax) + parseInt(homeInsurance) + parseInt(hoaFee) + parseInt(additionalCost)
    return totalMonthly
}

export function calculateTotalNoMortgage(home){
    let propertyTax = home['property_tax']
    let homeInsurance = home['home_insurance']
    let hoaFee = home['hoa']
    let additionalCost = home['additional_cost']
    let totalMonthly = parseInt(propertyTax) + parseInt(homeInsurance) + parseInt(hoaFee) + parseInt(additionalCost)
    return totalMonthly
}


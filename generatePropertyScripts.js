import { defaultYears } from './calculationScripts.js'
import { calculateDownPayment } from './calculationScripts.js'
import { calculateLoanAmount } from './calculationScripts.js'
import { calculateClosingCost } from './calculationScripts.js'
import { calculateInterestRate } from './calculationScripts.js'
import { calculateMonthlyMortgage } from './calculationScripts.js'
import { calculateTotalMortgage } from './calculationScripts.js'
import { calculateTotalNoMortgage } from './calculationScripts.js'

const contentContainer = document.getElementById('content-container')

const propertyContainer = document.createElement('div')
propertyContainer.className = 'property-container'
propertyContainer.id = 'property-container'

export function addNewHome(home){
    const propertyContainer = document.createElement('div')
    propertyContainer.className = 'property-container'
    propertyContainer.id = 'property-container'

    contentContainer.appendChild(propertyContainer, home)
    generateHomeDetails(propertyContainer, home)
    generateExpensesBreakdown(propertyContainer, home)
    generateRevenueContainer(propertyContainer, home)
    generateInvestmentMetrics(propertyContainer, home)
}

function generateHomeDetails(propertyContainer, home){

    // This div is going to contain the property detail information
    const propertyDetailContainer = document.createElement('div')
    propertyDetailContainer.className = 'property-details-container'
    propertyDetailContainer.id = 'property-details-container'

    // This containes the home property image
    const imageContainer = document.createElement('div')
    imageContainer.className = 'image-container'
    imageContainer.id = 'image-container'

    const mainImage = document.createElement('img')
    mainImage.src = './images/pexels-pixabay-53610.jpg'
    mainImage.className = 'main-image'
    mainImage.id = 'main-image'

    // The follwoing will contain all the divs that will hold
    // different parts of the detail in a column setting
    const detailsContainer = document.createElement('div')
    detailsContainer.className = 'details-container'
    detailsContainer.id = 'details-container'

    // the first section will conain home price and status (row)
    const priceStatusContainer = document.createElement('div')
    priceStatusContainer.className = 'price-status-container'
    priceStatusContainer.id = 'price-status-container'

    const homePrice = document.createElement('p')
    homePrice.className = 'home-price'
    homePrice.id = 'home-price'
    homePrice.innerHTML = `Price: ${home['price']}`

    const homeStatus = document.createElement('p')
    homeStatus.className = 'home-status'
    homeStatus.id = 'home-status'
    homeStatus.innerHTML = `Status: ${home['status']}`

    // the section will conain home beds/baths/sqft/lot (row)
    const bbsqContainer = document.createElement('div')
    bbsqContainer.className = 'bed-bath-sqfr-lot-container'
    bbsqContainer.id = 'bed-bath-sqfr-lot-container'

    const homeBeds = document.createElement('p')
    homeBeds.className = 'home-beds'
    homeBeds.id = 'home-beds'
    homeBeds.innerHTML = `Beds: ${home['beds']}`

    const homeBaths = document.createElement('p')
    homeBaths.className = 'home-baths'
    homeBaths.id = 'home-baths'
    homeBaths.innerHTML = `Baths: ${home['baths']}`

    const homeSqft = document.createElement('p')
    homeSqft.className = 'home-sqft'
    homeSqft.id = 'home-sqft'
    homeSqft.innerHTML = `SqFt: ${home['sqft']}`

    const homeLot = document.createElement('p')
    homeLot.className = 'home-lot'
    homeLot.id = 'home-lot'
    homeLot.innerHTML = `Lot: ${home['lot']}`

    // the section will conain the two parts of the address (column)
    const addressContainer = document.createElement('div')
    addressContainer.className = 'address-container'
    addressContainer.id = 'address-container'

    const homeAddress1 = document.createElement('p')
    homeAddress1.className = 'home-address'
    homeAddress1.id = 'home-address-1'
    homeAddress1.innerHTML = `Address: ${home['address']}`

    // the section will conain the days listed and mls(row)
    const listingContainer = document.createElement('div')
    listingContainer.className = 'listing-container'
    listingContainer.id = 'listing-container'

    const homeDaysListed = document.createElement('p')
    homeDaysListed.className = 'home-days-listed'
    homeDaysListed.id = 'home-days-listed'
    homeDaysListed.innerHTML = `Days: ${home['days']}`

    const homeMLS = document.createElement('p')
    homeMLS.className = 'home-mls'
    homeMLS.id = 'home-mls'
    homeMLS.innerHTML = `MLS: ${home['mls']}`

    // the section will conain the agent and bropker(row)
    const agentBrokerContainer = document.createElement('div')
    agentBrokerContainer.className = 'agent-broker-container'
    agentBrokerContainer.id = 'agent-broker-container'

    const homeAgent = document.createElement('p')
    homeAgent.className = 'home-agent'
    homeAgent.id = 'home-agent'
    homeAgent.innerHTML = `Agent: ${home['agent']}`

    const homeBroker = document.createElement('p')
    homeBroker.className = 'home-broker'
    homeBroker.id = 'home-broker'
    homeBroker.innerHTML = `Broker: ${home['broker']}`

    propertyContainer.appendChild(propertyDetailContainer)

    propertyDetailContainer.appendChild(imageContainer)
    imageContainer.appendChild(mainImage)

    propertyDetailContainer.appendChild(detailsContainer)
    detailsContainer.append(homePrice)
    detailsContainer.append(homeStatus)

    propertyDetailContainer.appendChild(bbsqContainer)
    bbsqContainer.appendChild(homeBeds)
    bbsqContainer.appendChild(homeBaths)
    bbsqContainer.appendChild(homeSqft)
    bbsqContainer.appendChild(homeLot)
  
    propertyDetailContainer.appendChild(addressContainer)
    addressContainer.appendChild(homeAddress1)

    propertyDetailContainer.appendChild(listingContainer)
    listingContainer.appendChild(homeDaysListed)
    listingContainer.appendChild(homeMLS)

    propertyDetailContainer.appendChild(agentBrokerContainer)
    agentBrokerContainer.appendChild(homeAgent)
    agentBrokerContainer.appendChild(homeBroker)
}

function generateExpensesBreakdown(propertyContainer, home){
    // this is going to contain all of the information related
    // to the mayments and stuff
    const propertyPaymentsContainer = document.createElement('div')
    propertyPaymentsContainer.className = 'property-payment-container'
    propertyPaymentsContainer.id = 'property-payment-container'

    // this ection will hold all of the monthly expenses
    const monthlyExpensesContainer = document.createElement('div')
    monthlyExpensesContainer.className = 'monthly-expenses-container'
    monthlyExpensesContainer.id = 'monthly-expenses-container'

    const expensesContainer = document.createElement('div')
    expensesContainer.className = 'expenses-container'
    expensesContainer.id = 'expenses-container'

    const expensesHeader = document.createElement('p')
    expensesHeader.className = 'expenses-header'
    expensesHeader.id = 'expenses-header'
    expensesHeader.innerHTML = 'Monthly Expenses: '

    const expensesBreak = document.createElement('div')
    expensesBreak.className = 'header-break'
    expensesBreak.id = 'header-break'

    // the following div holds the priciple and interest
    const principleAndInterestContainer = document.createElement('div')
    principleAndInterestContainer.className = 'princliple-and-expenses-container'
    principleAndInterestContainer.id = 'princliple-and-expenses-container'

    const principleAndInterestTitle = document.createElement('p')
    principleAndInterestTitle.className = 'princliple-and-expenses-title'
    principleAndInterestTitle.id = 'princliple-and-expenses-title'
    principleAndInterestTitle.innerHTML = 'Principle & Interest: '

    const principleAndInterestValue = document.createElement('p')
    principleAndInterestValue.className = 'princliple-and-expenses-value'
    principleAndInterestValue.id = 'princliple-and-expenses-value'
    principleAndInterestValue.innerHTML = `$${ calculateMonthlyMortgage(home['price']) }`

    // the following div hold the property tax
    const propertyTaxContainer = document.createElement('div')
    propertyTaxContainer.className = 'property-tax-container'
    propertyTaxContainer.id = 'property-tax-container'

    const propertyTaxTitle = document.createElement('p')
    propertyTaxTitle.className = 'property-tax-title'
    propertyTaxTitle.id = 'property-tax-title'
    propertyTaxTitle.innerHTML = 'Property Tax (montly): '

    const propertyTaxValue = document.createElement('p')
    propertyTaxValue.className = 'property-tax-value'
    propertyTaxValue.id = 'property-tax-value'
    propertyTaxValue.innerHTML = `$${home['property_tax']}`

    // the following holds the home insurance
    const homeInsuranceContainer = document.createElement('div')
    homeInsuranceContainer.className = 'home-insurance-container'
    homeInsuranceContainer.id = 'home-insurance-container'

    const homeInsuranceTitle = document.createElement('p')
    homeInsuranceTitle.className = 'home-insurance-title'
    homeInsuranceTitle.id = 'home-insurance-title'
    homeInsuranceTitle.innerHTML = 'Home Insurance (monthly): '

    const homeInsuranceValue = document.createElement('p')
    homeInsuranceValue.className = 'home-insurance-value'
    homeInsuranceValue.id = 'home-insurance-value'
    homeInsuranceValue.innerHTML = `$${home['home_insurance']}`

    // the following hold the hoa
    const hoaContainer = document.createElement('div')
    hoaContainer.className = 'hoa-container'
    hoaContainer.id = 'hoa-container'

    const hoaTitle = document.createElement('p')
    hoaTitle.className = 'hoa-title'
    hoaTitle.id = 'hoa-title'
    hoaTitle.innerHTML = 'HOA: '

    const hoaValue = document.createElement('p')
    hoaValue.className = 'hoa-value'
    hoaValue.id = 'hoa-value'
    hoaValue.innerHTML = `$${home['hoa']}`

    // the following hold the mortgage insurance
    const additionalCostContainer = document.createElement('div')
    additionalCostContainer.className = 'additiona-cost-container'
    additionalCostContainer.id = 'additiona-cost-container'

    const additionalCostTitle = document.createElement('p')
    additionalCostTitle.className = 'additional-cost-title'
    additionalCostTitle.id = 'additiona-cost-title'
    additionalCostTitle.innerHTML = 'Additional Cost (monthly): '

    const additionalCostValue = document.createElement('input')
    additionalCostValue.className = `additional-cost-value ${home['mls']}`
    additionalCostValue.id = `additional-cost-value`
    additionalCostValue.type = 'number'
    additionalCostValue.defaultValue = `0`

    const totalExpensesContainer = document.createElement('div')
    totalExpensesContainer.className = 'total-expenses-container'
    totalExpensesContainer.id = 'total-expenses-container'

    const totalExpensesMortgageContainer = document.createElement('div')
    totalExpensesMortgageContainer.className = 'total-expenses-mortage-container'
    totalExpensesMortgageContainer.id = 'total-expenses-mortage-container'

    const totalExpensesMortgageTitle = document.createElement('p')
    totalExpensesMortgageTitle.className = 'total-expenses-mortage-title'
    totalExpensesMortgageTitle.id = 'total-expenses-mortage-title'
    totalExpensesMortgageTitle.innerHTML = 'Monthly Expense (Mortgage): '

    const totalExpensesMortgageInput = document.createElement('p')
    totalExpensesMortgageInput.className = `total-expenses-mortgage-input ${home['mls']}`
    totalExpensesMortgageInput.id = 'total-expenses-mortgage-input'
    totalExpensesMortgageInput.innerHTML = `$${ calculateTotalMortgage(home) }`

    const totalExpensesNoMortgageContainer = document.createElement('div')
    totalExpensesNoMortgageContainer.className = 'total-expenses-no-mortage-container'
    totalExpensesNoMortgageContainer.id = 'total-expenses-no-mortage-container'

    const totalExpensesNoMortgageTitle = document.createElement('p')
    totalExpensesNoMortgageTitle.className = 'total-expenses-no-mortage-title'
    totalExpensesNoMortgageTitle.id = 'total-expenses-no-mortage-title'
    totalExpensesNoMortgageTitle.innerHTML = 'Monthly Expense (No Mortgage): '

    const totalExpensesNoMortgageInput = document.createElement('p')
    totalExpensesNoMortgageInput.className = `total-expenses-no-mortgage-input ${home['mls']}`
    totalExpensesNoMortgageInput.id = 'total-expenses-no-mortgage-input'
    totalExpensesNoMortgageInput.innerHTML = `$${ calculateTotalNoMortgage(home) }`
    //----------------------------------------------------------------

    const mortgageRentContainer = document.createElement('div')
    mortgageRentContainer.className = 'mortgage-rent-container'
    mortgageRentContainer.id = 'monthly-rent-container'

    const mortgageCalculatorContainer = document.createElement('div')
    mortgageCalculatorContainer.className = 'mortgage-calculator-container'
    mortgageCalculatorContainer.id = 'monthly-expenses-container'
    mortgageCalculatorContainer.innerHTML = 'Mortgage Calculator'

    const mortgageCalculatorHeader = document.createElement('p')
    mortgageCalculatorHeader.className = 'mortgage-calculator-header'
    mortgageCalculatorHeader.id = 'monthly-expenses-header'
    mortgageCalculatorHeader.innerHTML = 'Mortgage Calculator'


    const mortgageBreak = document.createElement('div')
    mortgageBreak.className = 'header-break'
    mortgageBreak.id = 'header-break'

    // the following div holds the priciple and interest
    const mortgageDisclaimerContainer = document.createElement('div')
    mortgageDisclaimerContainer.className = 'mortgage-disclaimer-container'
    mortgageDisclaimerContainer.id = 'mortgage-disclaimer-container'

    const mortgageDisclaimerText = document.createElement('p')
    mortgageDisclaimerText.className = 'mortgage-disclaimer-text'
    mortgageDisclaimerText.id = 'mortgage-disclaimer-text'
    mortgageDisclaimerText.innerHTML = '** 30 year fixed loan at 3.15% w/ 20% down **'

    const loanAmountContainer = document.createElement('div')
    loanAmountContainer.className = 'loan-amount-container'
    loanAmountContainer.id = 'loan-amount-container'

    const loanAmountTitle = document.createElement('p')
    loanAmountTitle.className = 'loan-amount-title'
    loanAmountTitle.id = 'loan-amount-title'
    loanAmountTitle.innerHTML = 'Loan $: '

    const loanAmountInput = document.createElement('p')
    loanAmountInput.className = 'loan-amount-input'
    loanAmountInput.id = 'loan-amount-input'
    loanAmountInput.type = 'number'
    loanAmountInput.innerHTML = `$${ calculateLoanAmount(home['price']) }`

    // the following div holds the down payment
    const downPaymentContainer = document.createElement('div')
    downPaymentContainer.className = 'down-payment-container'
    downPaymentContainer.id = 'down-payment-container'

    const downPaymentTitle = document.createElement('p')
    downPaymentTitle.className = 'down-payment-title'
    downPaymentTitle.id = 'down-payment-title'
    downPaymentTitle.innerHTML = 'Down Payment: '

    const downPaymentInput = document.createElement('p')
    downPaymentInput.className = 'down-payment-input'
    downPaymentInput.id = 'down-payment-input'
    downPaymentInput.type = 'number'
    downPaymentInput.innerHTML = `$${ calculateDownPayment(home['price']) }`

    // the following div holds the closing costs payment
    const closingCostContainer = document.createElement('div')
    closingCostContainer.className = 'closing-cost-container'
    closingCostContainer.id = 'closing-cost-container'

    const closingCostTitle = document.createElement('p')
    closingCostTitle.className = 'closing-cost-title'
    closingCostTitle.id = 'closing-cost-title'
    closingCostTitle.innerHTML = 'Closing Cost: '

    const closingCostInput = document.createElement('p')
    closingCostInput.className = 'closing-cost-input'
    closingCostInput.id = 'closing-cost-input'
    closingCostInput.type = 'number'
    closingCostInput.innerHTML = `$${ calculateClosingCost(home['price']) }`

    // the following div holds the years payment
    const yearContainer = document.createElement('div')
    yearContainer.className = 'year-container'
    yearContainer.id = 'year-container'

    const yearsTitle = document.createElement('p')
    yearsTitle.className = 'year-title'
    yearsTitle.id = 'year-title'
    yearsTitle.innerHTML = 'Loan Years: '

    const yearsInput = document.createElement('p')
    yearsInput.className = 'year-input'
    yearsInput.id = 'year-input'
    yearsInput.type = 'number'
    yearsInput.innerHTML = `$${ defaultYears }`

    // the following div holds the interest rate payment
    const interestRateContainer = document.createElement('div')
    interestRateContainer.className = 'interest-rate-container'
    interestRateContainer.id = 'interest-rate-container'

    const interestRateTitle = document.createElement('p')
    interestRateTitle.className = 'interest-rate-title'
    interestRateTitle.id = 'interest-rate-title'
    interestRateTitle.innerHTML = 'Interest Rate: '

    const interestRateInput = document.createElement('p')
    interestRateInput.className = 'interest-rate-input'
    interestRateInput.id = 'interest-rate-input'
    interestRateInput.type = 'number'
    interestRateInput.innerHTML = `$${ calculateInterestRate(home['price']) }`

    // the following div holds the interest rate payment
    const totalMortgageContainer = document.createElement('div')
    totalMortgageContainer.className = 'total-mortgage-container'
    totalMortgageContainer.id = 'total-mortgage-container'

    const totalMortgageTitle = document.createElement('p')
    totalMortgageTitle.className = 'total-mortgage-title'
    totalMortgageTitle.id = 'total-mortgage-title'
    totalMortgageTitle.innerHTML = 'Total Expenses: '

    const totalMortgageInput = document.createElement('p')
    totalMortgageInput.className = 'total-mortgage-input'
    totalMortgageInput.id = 'total-mortgage-input'
    totalMortgageInput.innerHTML = ``

    propertyContainer.appendChild(propertyPaymentsContainer)

    // this is the part that will hold the grid section
    propertyPaymentsContainer.appendChild(monthlyExpensesContainer)

    // this is the left section of the grid
    monthlyExpensesContainer.appendChild(expensesContainer)

    expensesContainer.appendChild(expensesHeader)
    expensesContainer.appendChild(expensesBreak)

    expensesContainer.appendChild(principleAndInterestContainer)
    principleAndInterestContainer.appendChild(principleAndInterestTitle)
    principleAndInterestContainer.appendChild(principleAndInterestValue)

    expensesContainer.appendChild(propertyTaxContainer)
    propertyTaxContainer.appendChild(propertyTaxTitle)
    propertyTaxContainer.appendChild(propertyTaxValue)

    expensesContainer.appendChild(homeInsuranceContainer)
    homeInsuranceContainer.appendChild(homeInsuranceTitle)
    homeInsuranceContainer.appendChild(homeInsuranceValue)

    expensesContainer.appendChild(hoaContainer)
    hoaContainer.appendChild(hoaTitle)
    hoaContainer.appendChild(hoaValue)

    expensesContainer.appendChild(additionalCostContainer)
    additionalCostContainer.appendChild(additionalCostTitle)
    additionalCostContainer.appendChild(additionalCostValue)

    // expensesContainer.appendChild(totalExpensesContainer)
    // totalExpensesContainer.appendChild(totalExpensesTitle)
    // totalExpensesContainer.appendChild(totalExpensesInput)

    // the follwing will be appended on the right side 
    propertyPaymentsContainer.appendChild(mortgageRentContainer)

    mortgageRentContainer.appendChild(mortgageCalculatorContainer)
    mortgageCalculatorContainer.appendChild(mortgageBreak)

    mortgageCalculatorContainer.appendChild(mortgageDisclaimerContainer)
    mortgageDisclaimerContainer.appendChild(mortgageDisclaimerText)
    
    mortgageCalculatorContainer.appendChild(downPaymentContainer)
    downPaymentContainer.appendChild(downPaymentTitle)
    downPaymentContainer.appendChild(downPaymentInput)

    mortgageCalculatorContainer.appendChild(loanAmountContainer)
    loanAmountContainer.appendChild(loanAmountTitle)
    loanAmountContainer.appendChild(loanAmountInput)

    mortgageCalculatorContainer.appendChild(closingCostContainer)
    closingCostContainer.appendChild(closingCostTitle)
    closingCostContainer.appendChild(closingCostInput)

    mortgageCalculatorContainer.appendChild(yearContainer)
    yearContainer.appendChild(yearsTitle)
    yearContainer.appendChild(yearsInput)

    mortgageCalculatorContainer.appendChild(interestRateContainer)
    interestRateContainer.appendChild(interestRateTitle)
    interestRateContainer.appendChild(interestRateInput)

    propertyContainer.appendChild(totalExpensesContainer)

    totalExpensesContainer.appendChild(totalExpensesMortgageContainer)
    totalExpensesMortgageContainer.appendChild(totalExpensesMortgageTitle)
    totalExpensesMortgageContainer.appendChild(totalExpensesMortgageInput)

    totalExpensesContainer.appendChild(totalExpensesNoMortgageContainer)
    totalExpensesNoMortgageContainer.appendChild(totalExpensesNoMortgageTitle)
    totalExpensesNoMortgageContainer.appendChild(totalExpensesNoMortgageInput)
}

function generateRevenueContainer(propertyContainer, home){
    const rentRevenueContainer = document.createElement('div')
    rentRevenueContainer.className = 'rent-revenue-container'
    rentRevenueContainer.id = 'rent-revenue-container'

    const rentRevenueHeader = document.createElement('p')
    rentRevenueHeader.className = 'rent-revenue-header'
    rentRevenueHeader.id = 'rent-revenue-header'
    rentRevenueHeader.innerHTML = 'Monthly Revenue:'

    const rentRevueBreak = document.createElement('div')
    rentRevueBreak.className = 'header-break'
    rentRevueBreak.id = 'header-break'

    const rentRevueContent = document.createElement('div')
    rentRevueContent.className = 'rent-revenue-content'
    rentRevueContent.id = 'rent-revenue-content'

    // the following is going to contain the rent
    const rentContainer = document.createElement('div')
    rentContainer.className = 'rent-container'
    rentContainer.id = 'rent-container'

    const rentTitle = document.createElement('p')
    rentTitle.className = 'rent-title'
    rentTitle.id = 'rent-title'
    rentTitle.innerHTML = 'Rent: '

    const rentInput = document.createElement('input')
    rentInput.className = `rent-input ${home['mls']}`
    rentInput.id = `rent-input`
    rentInput.type = 'number'
    rentInput.defaultValue = 0

    // the follwoing contains the revenue information
    const revenueContainer = document.createElement('div')
    revenueContainer.className = 'revenue-container'
    revenueContainer.id = 'revenue-container'

    const revenueTitle = document.createElement('p')
    revenueTitle.className = 'revenue-title'
    revenueTitle.id = 'revenue-title'
    revenueTitle.innerHTML = 'Revenue: '

    const revenueInput = document.createElement('input')
    revenueInput.className = `revenue-input ${home['mls']}`
    revenueInput.id = 'revenue-input'
    revenueInput.type = 'number'
    revenueInput.defaultValue = 0

    // the followings contains the total revenue
    const totalRevenueContainer = document.createElement('div')
    totalRevenueContainer.className = 'total-revenue-container'
    totalRevenueContainer.id = 'total-revenue-container'

    const totalRevenueTitle = document.createElement('p')
    totalRevenueTitle.className = 'total-revenue-title'
    totalRevenueTitle.id = 'total-revenue-title'
    totalRevenueTitle.innerHTML = 'Total Revenue: '

    const totalRevenueInput = document.createElement('p')
    totalRevenueInput.className = `total-revenue-input ${home['mls']}`
    totalRevenueInput.id = 'total-revenue-input'
    totalRevenueInput.innerHTML = '$0'

    propertyContainer.appendChild(rentRevenueContainer)
    rentRevenueContainer.appendChild(rentRevenueHeader)
    rentRevenueContainer.appendChild(rentRevueBreak)



    rentRevenueContainer.append(rentRevueContent)
    
    rentRevueContent.appendChild(rentContainer)
    rentContainer.appendChild(rentTitle)
    rentContainer.appendChild(rentInput)

    rentRevueContent.appendChild(revenueContainer)
    revenueContainer.appendChild(revenueTitle)
    revenueContainer.appendChild(revenueInput)

    rentRevenueContainer.appendChild(totalRevenueContainer)
    totalRevenueContainer.appendChild(totalRevenueTitle)
    totalRevenueContainer.appendChild(totalRevenueInput)
}

function generateInvestmentMetrics(propertyContainer, home){

    const investmentMetricsContainer = document.createElement('div')
    investmentMetricsContainer.className = 'investment-metric-container'
    investmentMetricsContainer.id = 'investment-metric-container'

    const metricHeader = document.createElement('p')
    metricHeader.className = 'section-header'
    metricHeader.id = 'section-header' 
    metricHeader.innerHTML = 'Investment Metrics (Mortgage / No Mortgage): '
    
    const metricsBreak = document.createElement('div')
    metricsBreak.className = 'header-break'
    metricsBreak.id = 'header-break'

    // the following div will contain the grid divs
    const metricsSectionContainer = document.createElement('div')
    metricsSectionContainer.className = 'metric-section-container'
    metricsSectionContainer.id = 'metric-section-container'

    const metricsLeftContainer = document.createElement('div')
    metricsLeftContainer.className = 'metric-left-container'
    metricsLeftContainer.id = 'metric-left-container'

    // The following are all of the doc containers for the 7 
    // metrics that will be on the left column
    const cashFlowContainer = document.createElement('div')
    cashFlowContainer.className = 'cash-flow-container'
    cashFlowContainer.id = 'cash-flow-container'

    const cashFlowTitle = document.createElement('p')
    cashFlowTitle.className = 'cash-flow-title'
    cashFlowTitle.id = 'cash-flow-title'
    cashFlowTitle.innerHTML = 'Cash Flow: '

    const cashFlowValue = document.createElement('p')
    cashFlowValue.className = `cash-flow-value ${home['mls']}`
    cashFlowValue.id = 'cash-flow-value'
    cashFlowValue.innerHTML = `$${0}`

    // the following contains the cash on cash
    const cashOnCashContainer = document.createElement('div')
    cashOnCashContainer.className = 'cash-on-cash-container'
    cashOnCashContainer.id = 'cash-on-cash-container'

    const cashOnCashTitle = document.createElement('p')
    cashOnCashTitle.className = 'cash-on-cash-title'
    cashOnCashTitle.id = 'cash-on-cash-title'
    cashOnCashTitle.innerHTML = 'Cash On Cash Flow: '

    const cashOnCashValue = document.createElement('p')
    cashOnCashValue.className = `cash-on-cash-value ${home['mls']}`
    cashOnCashValue.id = 'cash-on-cash-value'
    cashOnCashValue.innerHTML = `$${0}`

    // the following contains the gross operating income
    const grossOperatingIncomeContainer = document.createElement('div')
    grossOperatingIncomeContainer.className = 'gross-operating-income-container'
    grossOperatingIncomeContainer.id = 'gross-operating-income-container'

    const grossOperatingIncomeTitle = document.createElement('p')
    grossOperatingIncomeTitle.className = 'gross-operating-income-title'
    grossOperatingIncomeTitle.id = 'gross-operating-income-title'
    grossOperatingIncomeTitle.innerHTML = 'Gross Operating Income: '

    const grossOperatingIncomeValue = document.createElement('p')
    grossOperatingIncomeValue.className = `gross-operating-income-value ${home['mls']}`
    grossOperatingIncomeValue.id = 'gross-operating-income-value'
    grossOperatingIncomeValue.innerHTML = `$${0}`

    const operatingExpenseRatioContainer = document.createElement('div')
    operatingExpenseRatioContainer.className = 'operating-expense-ratio-container'
    operatingExpenseRatioContainer.id = 'operating-expense-ratio-container'

    const operatingExpenseRatioTitle = document.createElement('p')
    operatingExpenseRatioTitle.className = 'operating-expense-ratio-title'
    operatingExpenseRatioTitle.id = 'operating-expense-ratio-title'
    operatingExpenseRatioTitle.innerHTML = 'Operating Expense Ratio: '

    const operatingExpenseRatioValue = document.createElement('p')
    operatingExpenseRatioValue.className = `operating-expense-ratio-value ${home['mls']}`
    operatingExpenseRatioValue.id = 'operating-expense-ratio-value'
    operatingExpenseRatioValue.innerHTML = `% ${0}`

    // the following contains the net operating income
    const netOperatingIncomeContainer = document.createElement('div')
    netOperatingIncomeContainer.className = 'net-operating-income-container'
    netOperatingIncomeContainer.id = 'net-operating-income-container'

    const netOperatingIncomeTitle = document.createElement('p')
    netOperatingIncomeTitle.className = 'net-operating-income-title'
    netOperatingIncomeTitle.id = 'net-operating-income-title'
    netOperatingIncomeTitle.innerHTML = 'Net Operating Income: '

    const netOperatingIncomeValue = document.createElement('p')
    netOperatingIncomeValue.className = `net-operating-income-value ${home['mls']}`
    netOperatingIncomeValue.id = 'net-operating-income-value'
    netOperatingIncomeValue.innerHTML = `$${0}`

    // the following contains the net operating income
    const capitalizationRateContainer = document.createElement('div')
    capitalizationRateContainer.className = 'capitalization-rate-container'
    capitalizationRateContainer.id = 'capitalization-rate-container'

    const capitalizationRateTitle = document.createElement('p')
    capitalizationRateTitle.className = 'capitalization-rate-title'
    capitalizationRateTitle.id = 'capitalization-rate-title'
    capitalizationRateTitle.innerHTML = 'Capitalization Rate: '

    const capitalizationRateValue = document.createElement('p')
    capitalizationRateValue.className = 'capitalization-rate-value'
    capitalizationRateValue.id = 'capitalization-rate-value'
    capitalizationRateValue.innerHTML = '$$$'

    // the following contains the net operating income
    const internalRateRevenueContainer = document.createElement('div')
    internalRateRevenueContainer.className = 'internal-rate-return-container'
    internalRateRevenueContainer.id = 'internal-rate-return-container'

    const internalRateRevenueTitle = document.createElement('p')
    internalRateRevenueTitle.className = 'internal-rate-return-title'
    internalRateRevenueTitle.id = 'internal-rate-return-title'
    internalRateRevenueTitle.innerHTML = 'Internal Rate of Return: '

    const internalRateRevenueValue = document.createElement('p')
    internalRateRevenueValue.className = 'internal-rate-return-value'
    internalRateRevenueValue.id = 'internal-rate-return-value'
    internalRateRevenueValue.innerHTML = '$$$'

    // the following contains the net operating income
    const investmentScoreContainer = document.createElement('div')
    investmentScoreContainer.className = 'investment-score-container'
    investmentScoreContainer.id = 'investment-score-container'

    const investmentScoreTitle = document.createElement('p')
    investmentScoreTitle.className = 'investment-score-title'
    investmentScoreTitle.id = 'investment-score-title'
    investmentScoreTitle.innerHTML = 'Investment Score: '

    const investmentScoreValue = document.createElement('p')
    investmentScoreValue.className = 'investment-score-value'
    investmentScoreValue.id = 'investment-score-value'
    investmentScoreValue.innerHTML = '$$$'

    //---------------------------------------------------------------------
    const metricsRightContainer = document.createElement('div')
    metricsRightContainer.className = 'metric-right-container'
    metricsRightContainer.id = 'metric-right-container'

    // the following contains the net operating income
    const rentCostRatioContainer = document.createElement('div')
    rentCostRatioContainer.className = 'rent-cost-ratio-container'
    rentCostRatioContainer.id = 'rent-cost-ratio-container'

    const rentCostRatioTitle = document.createElement('p')
    rentCostRatioTitle.className = 'rent-cost-ratio-title'
    rentCostRatioTitle.id = 'rent-cost-ratio-title'
    rentCostRatioTitle.innerHTML = 'Rent Cost Ratio: '

    const rentCostRatioValue = document.createElement('p')
    rentCostRatioValue.className = `rent-cost-ratio-value ${home['mls']}`
    rentCostRatioValue.id = 'rent-cost-ratio-value'
    rentCostRatioValue.innerHTML = `%${0}`

    // The following are all of the doc containers for the 7 
    // metrics that will be on the left column
    const grossRentMultiplierContainer = document.createElement('div')
    grossRentMultiplierContainer.className = 'gross-rent-multiplier-container'
    grossRentMultiplierContainer.id = 'gross-rent-multiplier-container'

    const grossRentMultiplierTitle = document.createElement('p')
    grossRentMultiplierTitle.className = 'gross-rent-multiplier-title'
    grossRentMultiplierTitle.id = 'gross-rent-multiplier-title'
    grossRentMultiplierTitle.innerHTML = 'Gross Rent Multiplier: '

    const grossRentMultiplierValue = document.createElement('p')
    grossRentMultiplierValue.className = `gross-rent-multiplier-value ${home['mls']}`
    grossRentMultiplierValue.id = 'gross-rent-multiplier-value'
    grossRentMultiplierValue.innerHTML = 0

    // the following contains the cash on cash
    const vacancyRateContainer = document.createElement('div')
    vacancyRateContainer.className = 'vacancy-rate-container'
    vacancyRateContainer.id = 'vacancy-rate-container'

    const vacancyRateTitle = document.createElement('p')
    vacancyRateTitle.className = 'vacancy-rate-title'
    vacancyRateTitle.id = 'vacancy-rate-title'
    vacancyRateTitle.innerHTML = 'Vacancy Rate: '

    const vacancyRateValue = document.createElement('p')
    vacancyRateValue.className = `vacancy-rate-value ${home['mls']}`
    vacancyRateValue.id = 'vacancy-rate-value'
    vacancyRateValue.innerHTML = `$${0} @ ${0} Days`

    // the following contains the gross operating income
    const depreciationContainer = document.createElement('div')
    depreciationContainer.className = 'depreciation-container'
    depreciationContainer.id = 'depreciation-container'

    const depreciationTitle = document.createElement('p')
    depreciationTitle.className = 'depreciation-title'
    depreciationTitle.id = 'depreciation-title'
    depreciationTitle.innerHTML = 'Depreciation: '

    const depreciationValue = document.createElement('p')
    depreciationValue.className = `depreciation-value ${home['mls']}`
    depreciationValue.id = 'depreciation-value'
    depreciationValue.innerHTML = `$${(home['price']/27.5).toFixed(2)}`

    // the following contains the net operating income
    const returnOnInvestmentContainer = document.createElement('div')
    returnOnInvestmentContainer.className = 'return-on-investment-container'
    returnOnInvestmentContainer.id = 'return-on-investment-container'

    const returnOnInvestmentTitle = document.createElement('p')
    returnOnInvestmentTitle.className = 'return-on-investment-title'
    returnOnInvestmentTitle.id = 'return-on-investment-title'
    returnOnInvestmentTitle.innerHTML = 'Return On Inv. (Annual): '

    const returnOnInvestmentValue = document.createElement('p')
    returnOnInvestmentValue.className = `return-on-investment-value ${home['mls']}`
    returnOnInvestmentValue.id = 'return-on-investment-value'
    returnOnInvestmentValue.innerHTML = `%${0}`

    // the following contains the net operating income
    const marketValue2Container = document.createElement('div')
    marketValue2Container.className = 'market-value-2-container'
    marketValue2Container.id = 'market-value-2-container'

    const marketValue2Title = document.createElement('p')
    marketValue2Title.className = 'market-value-2-title'
    marketValue2Title.id = 'market-value-2-title'
    marketValue2Title.innerHTML = 'Market Value (2 year): '

    const marketValue2Value = document.createElement('p')
    marketValue2Value.className = 'market-value-2-value'
    marketValue2Value.id = 'market-value-2-value'
    marketValue2Value.innerHTML = '$$$'

    // the following contains the net operating income
    const airbnbContainer = document.createElement('div')
    airbnbContainer.className = 'airbnb-container'
    airbnbContainer.id = 'airbnb-container'

    const airbnbTitle = document.createElement('p')
    airbnbTitle.className = 'airbnb-title'
    airbnbTitle.id = 'airbnb-title'
    airbnbTitle.innerHTML = 'Airbnb Score: '

    const airbnbValue = document.createElement('p')
    airbnbValue.className = 'airbnb-value'
    airbnbValue.id = 'airbnb-value'
    airbnbValue.innerHTML = '$$$'

    propertyContainer.appendChild(investmentMetricsContainer)

    investmentMetricsContainer.appendChild(metricHeader)
    investmentMetricsContainer.appendChild(metricsBreak)
    investmentMetricsContainer.appendChild(metricsSectionContainer)

    metricsSectionContainer.appendChild(metricsLeftContainer)

    metricsLeftContainer.appendChild(cashFlowContainer)
    cashFlowContainer.appendChild(cashFlowTitle)
    cashFlowContainer.appendChild(cashFlowValue)

    metricsLeftContainer.appendChild(cashOnCashContainer)
    cashOnCashContainer.appendChild(cashOnCashTitle)
    cashOnCashContainer.appendChild(cashOnCashValue)

    metricsLeftContainer.appendChild(grossOperatingIncomeContainer)
    grossOperatingIncomeContainer.appendChild(grossOperatingIncomeTitle)
    grossOperatingIncomeContainer.appendChild(grossOperatingIncomeValue)

    metricsLeftContainer.appendChild(operatingExpenseRatioContainer)
    operatingExpenseRatioContainer.appendChild(operatingExpenseRatioTitle)
    operatingExpenseRatioContainer.appendChild(operatingExpenseRatioValue)

    metricsLeftContainer.appendChild(netOperatingIncomeContainer)
    netOperatingIncomeContainer.appendChild(netOperatingIncomeTitle)
    netOperatingIncomeContainer.appendChild(netOperatingIncomeValue)

    metricsLeftContainer.appendChild(capitalizationRateContainer)
    capitalizationRateContainer.appendChild(capitalizationRateTitle)
    capitalizationRateContainer.appendChild(capitalizationRateValue)

    metricsLeftContainer.appendChild(internalRateRevenueContainer)
    internalRateRevenueContainer.appendChild(internalRateRevenueTitle)
    internalRateRevenueContainer.appendChild(internalRateRevenueValue)

    // metricsLeftContainer.appendChild(investmentScoreContainer)
    // investmentScoreContainer.appendChild(investmentScoreTitle)
    // investmentScoreContainer.appendChild(investmentScoreValue)

    metricsSectionContainer.appendChild(metricsRightContainer)

    metricsRightContainer.appendChild(internalRateRevenueContainer)
    internalRateRevenueContainer.appendChild(internalRateRevenueTitle)
    internalRateRevenueContainer.appendChild(internalRateRevenueValue)

    metricsRightContainer.appendChild(rentCostRatioContainer)
    rentCostRatioContainer.appendChild(rentCostRatioTitle)
    rentCostRatioContainer.appendChild(rentCostRatioValue)

    metricsRightContainer.appendChild(grossRentMultiplierContainer)
    grossRentMultiplierContainer.appendChild(grossRentMultiplierTitle)
    grossRentMultiplierContainer.appendChild(grossRentMultiplierValue)

    metricsRightContainer.appendChild(vacancyRateContainer)
    vacancyRateContainer.appendChild(vacancyRateTitle)
    vacancyRateContainer.appendChild(vacancyRateValue)

    metricsRightContainer.appendChild(depreciationContainer)
    depreciationContainer.appendChild(depreciationTitle)
    depreciationContainer.appendChild(depreciationValue)

    metricsRightContainer.appendChild(returnOnInvestmentContainer)
    returnOnInvestmentContainer.appendChild(returnOnInvestmentTitle)
    returnOnInvestmentContainer.appendChild(returnOnInvestmentValue)

    // metricsRightContainer.appendChild(airbnbContainer)
    // airbnbContainer.appendChild(airbnbTitle)
    // airbnbContainer.appendChild(airbnbValue)

}

// function generateProperty(){
//     for(let i = 0; i < 5; i++){
//         addNewHome()
//     }
// }

// generateProperty()

const testHomes = [
    {
        'price': 524000,
        'beds': 3,
        'baths': 2,
        'sqft': 1049,
        'lot': 2645,
        'status': 'Active',
        'address1': "28191 Sorrento",
        'address2': "Laguna Niguel, CA 92677",
        'days_listed': 12,
        'mls_listing': 11022323,
    },
    {
        'price': 949999,
        'beds': 3,
        'baths': 3,
        'sqft': 1605,
        'lot': 2645,
        'status': 'Active',
        'address1': "3 Saint Elizebeth",
        'address2': "Laguna Niguel, CA 92677",
        'days_listed': 17,
        'mls_listing': 17564345,
    },
    {
        'price': 1328000,
        'beds': 4,
        'baths': 4,
        'sqft': 2576,
        'lot': 4122,
        'status': 'Active',
        'address1': "30052 Happy Sparrow Ln",
        'address2': "Laguna Niguel, CA 92677",
        'days_listed': 31,
        'mls_listing': 93857365,
    },
    {
        'price': 2098000,
        'beds': 5,
        'baths': 5,
        'sqft': 3672,
        'lot': 5532,
        'status': 'Active',
        'address1': "28751 Concord Ln",
        'address2': "Laguna Niguel, CA 92677",
        'days_listed': 3,
        'mls_listing': 447385823,
    },
    {
        'price': 3950000,
        'beds': 5,
        'baths': 7,
        'sqft': 5551,
        'lot': 7943,
        'status': 'Active',
        'address1': "2 Ebony Glade",
        'address2': "Laguna Niguel, CA 92677",
        'days_listed': 15,
        'mls_listing': 33425634,
    }
]

const contentContainer = document.getElementById('content-container')

const propertyContainer = document.createElement('div')
propertyContainer.className = 'property-container'
propertyContainer.id = 'property-container'

function generateHomeDetails(){

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
    homePrice.innerHTML = 'Price:'

    const homeStatus = document.createElement('p')
    homeStatus.className = 'home-status'
    homeStatus.id = 'home-status'
    homeStatus.innerHTML = 'Status:'

    // the section will conain home beds/baths/sqft/lot (row)
    const bbsqContainer = document.createElement('div')
    bbsqContainer.className = 'bed-bath-sqfr-lot-container'
    bbsqContainer.id = 'bed-bath-sqfr-lot-container'

    const homeBeds = document.createElement('p')
    homeBeds.className = 'home-beds'
    homeBeds.id = 'home-beds'
    homeBeds.innerHTML = 'Beds:'

    const homeBaths = document.createElement('p')
    homeBaths.className = 'home-baths'
    homeBaths.id = 'home-baths'
    homeBaths.innerHTML = 'Baths:'

    const homeSqft = document.createElement('p')
    homeSqft.className = 'home-sqft'
    homeSqft.id = 'home-sqft'
    homeSqft.innerHTML = 'SqFt:'

    const homeLot = document.createElement('p')
    homeLot.className = 'home-lot'
    homeLot.id = 'home-lot'
    homeLot.innerHTML = 'Lot:'

    // the section will conain the two parts of the address (column)
    const addressContainer = document.createElement('div')
    addressContainer.className = 'address-container'
    addressContainer.id = 'address-container'

    const homeAddress1 = document.createElement('p')
    homeAddress1.className = 'home-address'
    homeAddress1.id = 'home-address-1'
    homeAddress1.innerHTML = 'address1'

    // the section will conain the days listed and mls(row)
    const listingContainer = document.createElement('div')
    listingContainer.className = 'listing-container'
    listingContainer.id = 'listing-container'

    const homeDaysListed = document.createElement('p')
    homeDaysListed.className = 'home-days-listed'
    homeDaysListed.id = 'home-days-listed'
    homeDaysListed.innerHTML = 'Days: '

    const homeMLS = document.createElement('p')
    homeMLS.className = 'home-mls'
    homeMLS.id = 'home-mls'
    homeMLS.innerHTML = 'MLS: '

    // the section will conain the agent and bropker(row)
    const agentBrokerContainer = document.createElement('div')
    agentBrokerContainer.className = 'agent-broker-container'
    agentBrokerContainer.id = 'agent-broker-container'

    const homeAgent = document.createElement('p')
    homeAgent.className = 'home-agent'
    homeAgent.id = 'home-agent'
    homeAgent.innerHTML = 'Agent: '

    const homeBroker = document.createElement('p')
    homeBroker.className = 'home-broker'
    homeBroker.id = 'home-broker'
    homeBroker.innerHTML = 'Broker: '

    contentContainer.appendChild(propertyContainer)

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

function generateExpensesBreakdown(){
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
    principleAndInterestTitle.innerText = 'Principle & Interest: '

    const principleAndInterestValue = document.createElement('p')
    principleAndInterestValue.className = 'princliple-and-expenses-value'
    principleAndInterestValue.id = 'princliple-and-expenses-value'
    principleAndInterestTitle.innerText = '#####'

    // the following div hold the property tax
    const propertyTaxContainer = document.createElement('div')
    propertyTaxContainer.className = 'property-tax-container'
    propertyTaxContainer.id = 'property-tax-container'

    const propertyTaxTitle = document.createElement('p')
    propertyTaxTitle.className = 'property-tax-title'
    propertyTaxTitle.id = 'property-tax-title'
    propertyTaxTitle.innerText = 'Property Tax: '

    const propertyTaxValue = document.createElement('p')
    propertyTaxValue.className = 'property-tax-value'
    propertyTaxValue.id = 'property-tax-value'
    propertyTaxValue.innerText = '#####'

    // the following holds the home insurance
    const homeInsuranceContainer = document.createElement('div')
    homeInsuranceContainer.className = 'home-insurance-container'
    homeInsuranceContainer.id = 'home-insurance-container'

    const homeInsuranceTitle = document.createElement('p')
    homeInsuranceTitle.className = 'home-insurance-title'
    homeInsuranceTitle.id = 'home-insurance-title'
    homeInsuranceTitle.innerText = 'Home Insurance: '

    const homeInsuranceValue = document.createElement('p')
    homeInsuranceValue.className = 'home-insurance-value'
    homeInsuranceValue.id = 'home-insurance-value'
    homeInsuranceValue.innerText = '#####'

    // the following hold the hoa
    const hoaContainer = document.createElement('div')
    hoaContainer.className = 'hoa-container'
    hoaContainer.id = 'hoa-container'

    const hoaTitle = document.createElement('p')
    hoaTitle.className = 'hoa-title'
    hoaTitle.id = 'hoa-title'
    hoaTitle.innerText = 'HOA: '

    const hoaValue = document.createElement('p')
    hoaValue.className = 'hoa-value'
    hoaValue.id = 'hoa-value'
    hoaValue.innerText = '#####'

    // the following hold the mortgage insurance
    const mortgageInsuranceContainer = document.createElement('div')
    mortgageInsuranceContainer.className = 'mortage-insurance-container'
    mortgageInsuranceContainer.id = 'mortage-insurance-container'

    const mortgageInsuranceTitle = document.createElement('p')
    mortgageInsuranceTitle.className = 'mortgage-insurance-title'
    mortgageInsuranceTitle.id = 'mortgage-insurance-title'
    mortgageInsuranceTitle.innerText = 'Mortgage Insurance: '

    const mortgageInsuranceValue = document.createElement('p')
    mortgageInsuranceValue.className = 'mortgage-insurance-value'
    mortgageInsuranceValue.id = 'mortgage-insurance-value'
    mortgageInsuranceValue.innerText = '#####'

    // the following hold the mortgage insurance
    const additionalCostContainer = document.createElement('div')
    additionalCostContainer.className = 'additiona-cost-container'
    additionalCostContainer.id = 'additiona-cost-container'

    const additionalCostTitle = document.createElement('p')
    additionalCostTitle.className = 'additional-cost-title'
    additionalCostTitle.id = 'additiona-cost-title'
    additionalCostTitle.innerText = 'Additional Cost: '

    const additionalCostValue = document.createElement('input')
    additionalCostValue.className = 'additional-cost-value'
    additionalCostValue.id = 'mortgage-insurance-value'
    additionalCostValue.type = 'number'
    additionalCostValue.placeholder = 'cost $'

    const totalExpensesContainer = document.createElement('div')
    totalExpensesContainer.className = 'total-expenses-container'
    totalExpensesContainer.id = 'total-expenses-container'

    const totalExpensesTitle = document.createElement('p')
    totalExpensesTitle.className = 'total-expenses-title'
    totalExpensesTitle.id = 'total-expenses-title'
    totalExpensesTitle.innerHTML = 'Total Monthly Expense: '

    const totalExpensesInput = document.createElement('p')
    totalExpensesInput.className = 'total-expenses-input'
    totalExpensesInput.id = 'total-expenses-input'
    totalExpensesInput.innerHTML = '$$$'
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
    const loanAmountContainer = document.createElement('div')
    loanAmountContainer.className = 'loan-amount-container'
    loanAmountContainer.id = 'loan-amount-container'

    const loanAmountTitle = document.createElement('p')
    loanAmountTitle.className = 'loan-amount-title'
    loanAmountTitle.id = 'loan-amount-title'
    loanAmountTitle.innerHTML = 'Loan $: '

    const loanAmountInput = document.createElement('input')
    loanAmountInput.className = 'loan-amount-input'
    loanAmountInput.id = 'loan-amount-input'
    loanAmountInput.type = 'number'
    loanAmountInput.placeholder = '$' 

    // the following div holds the down payment
    const downPaymentContainer = document.createElement('div')
    downPaymentContainer.className = 'down-payment-container'
    downPaymentContainer.id = 'down-payment-container'
    downPaymentContainer.innerHTML = 'Down Payment: '

    const downPaymentTitle = document.createElement('p')
    downPaymentTitle.className = 'down-payment-title'
    downPaymentTitle.id = 'down-payment-title'

    const downPaymentInput = document.createElement('input')
    downPaymentInput.className = 'down-payment-input'
    downPaymentInput.id = 'down-payment-input'
    downPaymentInput.type = 'number'
    downPaymentInput.placeholder = '$' 

    // the following div holds the closing costs payment
    const closingCostContainer = document.createElement('div')
    closingCostContainer.className = 'closing-cost-container'
    closingCostContainer.id = 'closing-cost-container'

    const closingCostTitle = document.createElement('p')
    closingCostTitle.className = 'closing-cost-title'
    closingCostTitle.id = 'closing-cost-title'
    closingCostTitle.innerHTML = 'Closing Cost: '

    const closingCostInput = document.createElement('input')
    closingCostInput.className = 'closing-cost-input'
    closingCostInput.id = 'closing-cost-input'
    closingCostInput.type = 'number'
    closingCostInput.placeholder = '$' 

    // the following div holds the years payment
    const yearContainer = document.createElement('div')
    yearContainer.className = 'year-container'
    yearContainer.id = 'year-container'

    const yearsTitle = document.createElement('p')
    yearsTitle.className = 'year-title'
    yearsTitle.id = 'year-title'
    yearsTitle.innerHTML = 'Loan Years: '

    const yearsInput = document.createElement('input')
    yearsInput.className = 'year-input'
    yearsInput.id = 'year-input'
    yearsInput.type = 'number'
    yearsInput.placeholder = '$'

    // the following div holds the interest rate payment
    const interestRateContainer = document.createElement('div')
    interestRateContainer.className = 'interest-rate-container'
    interestRateContainer.id = 'interest-rate-container'

    const interestRateTitle = document.createElement('p')
    interestRateTitle.className = 'interest-rate-title'
    interestRateTitle.id = 'interest-rate-title'
    interestRateTitle.innerHTML = 'Interest Rate: '

    const interestRateInput = document.createElement('input')
    interestRateInput.className = 'interest-rate-input'
    interestRateInput.id = 'interest-rate-input'
    interestRateInput.type = 'number'
    interestRateInput.placeholder = '$'

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
    totalMortgageInput.innerHTML = '$$$'

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

    expensesContainer.appendChild(mortgageInsuranceContainer)
    mortgageInsuranceContainer.appendChild(mortgageInsuranceTitle)
    mortgageInsuranceContainer.appendChild(mortgageInsuranceValue)

    expensesContainer.appendChild(additionalCostContainer)
    additionalCostContainer.appendChild(additionalCostTitle)
    additionalCostContainer.appendChild(additionalCostValue)

    expensesContainer.appendChild(totalExpensesContainer)
    totalExpensesContainer.appendChild(totalExpensesTitle)
    totalExpensesContainer.appendChild(totalExpensesInput)

    // the follwing will be appended on the right side 
    propertyPaymentsContainer.appendChild(mortgageRentContainer)

    mortgageRentContainer.appendChild(mortgageCalculatorContainer)
    mortgageCalculatorContainer.appendChild(mortgageBreak)
    mortgageCalculatorContainer.appendChild(mortgageBreak)

    mortgageCalculatorContainer.appendChild(loanAmountContainer)
    loanAmountContainer.appendChild(loanAmountTitle)
    loanAmountContainer.appendChild(loanAmountInput)
    
    mortgageCalculatorContainer.appendChild(downPaymentContainer)
    downPaymentContainer.appendChild(downPaymentTitle)
    downPaymentContainer.appendChild(downPaymentInput)

    mortgageCalculatorContainer.appendChild(closingCostContainer)
    closingCostContainer.appendChild(closingCostTitle)
    closingCostContainer.appendChild(closingCostInput)

    mortgageCalculatorContainer.appendChild(yearContainer)
    yearContainer.appendChild(yearsTitle)
    yearContainer.appendChild(yearsInput)

    mortgageCalculatorContainer.appendChild(interestRateContainer)
    interestRateContainer.appendChild(interestRateTitle)
    interestRateContainer.appendChild(interestRateInput)

    mortgageCalculatorContainer.appendChild(totalMortgageContainer)
    totalMortgageContainer.appendChild(totalMortgageTitle)
    totalMortgageContainer.appendChild(totalMortgageInput)
}

function generateRevenueContainer(){
    const rentRevenueContainer = document.createElement('div')
    rentRevenueContainer.className = 'rent-container'
    rentRevenueContainer.id = 'rent-container'

    const rentRevenueHeader = document.createElement('p')
    rentRevenueHeader.className = 'rent-revenue-header'
    rentRevenueHeader.id = 'rent-revenue-header'
    rentRevenueHeader.innerHTML = 'Monthly Revenue:'

    const rentRevueBreak = document.createElement('div')
    rentRevueBreak.className = 'header-break'
    rentRevueBreak.id = 'header-break'

    // the following is going to contain the rent
    const rentContainer = document.createElement('div')
    rentContainer.className = 'rent-container'
    rentContainer.id = 'rent-container'

    const rentTitle = document.createElement('p')
    rentTitle.className = 'rent-title'
    rentTitle.id = 'rent-title'
    rentTitle.innerHTML = 'Rent: '

    const rentInput = document.createElement('input')
    rentInput.className = 'rent-input'
    rentInput.id = 'rent-input'
    rentInput.type = 'number'
    rentInput.placeholder = '$' 

    // the follwoing contains the revenue information
    const revenueContainer = document.createElement('div')
    revenueContainer.className = 'revenue-container'
    revenueContainer.id = 'revenue-container'

    const revenueTitle = document.createElement('p')
    revenueTitle.className = 'revenue-title'
    revenueTitle.id = 'revenue-title'
    revenueTitle.innerHTML = 'Revenue: '

    const revenueInput = document.createElement('input')
    revenueInput.className = 'revenue-input'
    revenueInput.id = 'revenue-input'
    revenueInput.type = 'number'
    revenueInput.placeholder = '$'

    // the followings contains the total revenue
    const totalRevenueContainer = document.createElement('div')
    totalRevenueContainer.className = 'total-revenue-container'
    totalRevenueContainer.id = 'total-revenue-container'

    const totalRevenueTitle = document.createElement('p')
    totalRevenueTitle.className = 'total-revenue-title'
    totalRevenueTitle.id = 'total-revenue-title'
    totalRevenueTitle.innerHTML = 'Total Revenue: '

    const totalRevenueInput = document.createElement('p')
    totalRevenueInput.className = 'total-revenue-input'
    totalRevenueInput.id = 'total-revenue-input'
    totalRevenueInput.innerHTML = '$$$'

    propertyContainer.appendChild(rentRevenueContainer)
    rentRevenueContainer.appendChild(rentRevenueHeader)
    rentRevenueContainer.appendChild(rentRevueBreak)

    rentRevenueContainer.appendChild(rentContainer)
    rentContainer.appendChild(rentTitle)
    rentContainer.appendChild(rentInput)

    rentRevenueContainer.appendChild(revenueContainer)
    revenueContainer.appendChild(revenueTitle)
    revenueContainer.appendChild(revenueInput)

    rentRevenueContainer.appendChild(totalRevenueContainer)
    totalRevenueContainer.appendChild(totalRevenueTitle)
    totalRevenueContainer.appendChild(totalRevenueInput)
}

function generateProperty(){
    generateHomeDetails()
    generateExpensesBreakdown()
    generateRevenueContainer()
}

generateProperty()
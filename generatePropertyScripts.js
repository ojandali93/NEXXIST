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

function generateProperty(currentProperty) {
    // create elements
    // create image carousel
    const propertyContainer = document.createElement('div')
    propertyContainer.className = 'property-container'
    propertyContainer.id = 'property-container'

    const mainCarouselSection = document.createElement('div')
    mainCarouselSection.className = 'section-container carousel'
    mainCarouselSection.id = 'main-carousel'

    const mainImage = document.createElement('img')
    mainImage.src = './images/pexels-pixabay-53610.jpg'
    mainImage.className = 'main-image'
    mainImage.id = 'main-image'

    const imageCarousel = document.createElement('div')
    imageCarousel.className = 'image-carousel'
    imageCarousel.id = 'image-carousel'

    const image1 = document.createElement('img')
    image1.src = './images/pexels-pixabay-53610.jpg'
    image1.className = 'carousel-image'
    image1.id = 'image'
    const image2 = document.createElement('img')
    image2.src = './images/pexels-pixabay-53610.jpg'
    image2.className = 'carousel-image'
    image2.id = 'image'
    const image3 = document.createElement('img')
    image3.src = './images/pexels-pixabay-53610.jpg'
    image3.className = 'carousel-image'
    image3.id = 'image'
    const image4 = document.createElement('img')
    image4.src = './images/pexels-pixabay-53610.jpg'
    image4.className = 'carousel-image'
    image4.id = 'image'

    // compile product dev
    // every section will be appended to propertyContainer
    contentContainer.appendChild(propertyContainer)
    propertyContainer.appendChild(mainCarouselSection)
    mainCarouselSection.appendChild(mainImage)
    mainCarouselSection.appendChild(imageCarousel)
    // imageCarousel.appendChild(image1)
    // imageCarousel.appendChild(image2)
    // imageCarousel.appendChild(image3)
    // imageCarousel.appendChild(image4)

    // the following section is going to create the detail section
    const mainDetailsSection = document.createElement('div')
    mainDetailsSection.className = 'section-container'

    const homePrice = document.createElement('p')
    homePrice.className = 'home-price'
    homePrice.id = 'home-price'
    homePrice.innerHTML = `$ ${currentProperty['price']}`

    const bbslContainer = document.createElement('div')
    bbslContainer.className = 'bed-bath-sqft-lot-container'

    const homeBeds = document.createElement('p')
    homeBeds.className = 'home-detail-bbsl'
    homeBeds.id = 'home-beds'
    homeBeds.innerHTML = `Beds: ${currentProperty['beds']}`
    const homeBaths = document.createElement('p')
    homeBaths.className = 'home-detail-bbsl'
    homeBaths.id = 'home-baths'
    homeBaths.innerHTML = `Baths: ${currentProperty['baths']}`
    const homeSqft = document.createElement('p')
    homeSqft.className = 'home-detail-bbsl'
    homeSqft.id = 'home-sqfr'
    homeSqft.innerHTML = `Sqft: ${currentProperty['sqft']}`
    const homeLot = document.createElement('p')
    homeLot.className = 'home-detail-bbsl'
    homeLot.id = 'home-lot'
    homeLot.innerHTML = `Lot: ${currentProperty['lot']}`

    const addressContainer = document.createElement('div')
    addressContainer.className = 'address-container'

    const address1 = document.createElement('p')
    address1.id = 'address1'
    address1.innerHTML = `${currentProperty['address1']}`
    const address2 = document.createElement('p')
    address2.id = 'address2'
    address2.innerHTML = `${currentProperty['address2']}`

    const listingContainer = document.createElement('div')
    listingContainer.className = 'listing-container'

    const daysListed = document.createElement('p')
    daysListed.className = 'listing-detail'
    daysListed.id = 'days-listed'
    daysListed.innerHTML = `Days Listed: ${currentProperty['days_listed']}`
    const status = document.createElement('p')
    status.className = 'listing-detail'
    status.id = 'status'
    status.innerHTML = `Status: ${currentProperty['status']}`
    const mls = document.createElement('p')
    mls.className = 'listing-detail'
    mls.id = 'mls'
    mls.innerHTML = `MLS#: ${currentProperty['mls_listing']}`

    propertyContainer.appendChild(mainDetailsSection)
    mainDetailsSection.appendChild(homePrice)
    mainDetailsSection.appendChild(bbslContainer)
    bbslContainer.appendChild(homeBeds)
    bbslContainer.appendChild(homeBaths)
    bbslContainer.appendChild(homeSqft)
    bbslContainer.appendChild(homeLot)
    mainDetailsSection.appendChild(addressContainer)
    addressContainer.appendChild(address1)
    addressContainer.appendChild(address2)
    mainDetailsSection.appendChild(listingContainer)
    listingContainer.appendChild(daysListed)
    listingContainer.appendChild(status)
    mainDetailsSection.appendChild(mls)

    // the following is the investment metric section of the property
    const metricsContainer = document.createElement('div')
    metricsContainer.className = 'section-container'

    const metricsHeader = document.createElement('p')
    metricsHeader.className = 'investment-header'
    metricsHeader.innerHTML = `Investment Metrics: `

    const investmentMetricContainer = document.createElement('div')
    investmentMetricContainer.className = 'inv-metric-container'

    const leftColumnMetrics = document.createElement('div')
    
    const cashFlowMetric = document.createElement('p')
    cashFlowMetric.className = 'inv-metric'
    cashFlowMetric.innerHTML = `Cash Flow: ###`
    const cashOnCashReturn = document.createElement('p')
    cashOnCashReturn.className = 'inv-metric'
    cashOnCashReturn.innerHTML = `Cash-Cash Return: ###`
    const grossOperatingIncome = document.createElement('p')
    grossOperatingIncome.className = 'inv-metric'
    grossOperatingIncome.innerHTML = `Gross Operating Income: ###`
    const operatingExpenseRatioMetric = document.createElement('p')
    operatingExpenseRatioMetric.className = 'inv-metric'
    operatingExpenseRatioMetric.innerHTML = `Operating Expnense Ratio: ###`
    const netOperatingIncomeMetric = document.createElement('p')
    netOperatingIncomeMetric.className = 'inv-metric'
    netOperatingIncomeMetric.innerHTML = `Net Operating Income: ###`
    const capiralizationRateMetric = document.createElement('p')
    capiralizationRateMetric.className = 'inv-metric'
    capiralizationRateMetric.innerHTML = `Capitalization Rate: ###`
    const internalRateOfReturnMetric = document.createElement('p')
    internalRateOfReturnMetric.className = 'inv-metric'
    internalRateOfReturnMetric.innerHTML = `Internal Rate of Return: ###`
    const rentControlRatioMetric = document.createElement('p')
    rentControlRatioMetric.className = 'inv-metric'
    rentControlRatioMetric.innerHTML = `Rent/Cost Ratio: ###`
    
    const rightColumnMetric = document.createElement('div')

    const grossRentMultiplierMetric = document.createElement('p')
    grossRentMultiplierMetric.className = 'inv-metric'
    grossRentMultiplierMetric.innerHTML = `Gross Rent Multiplier: ###`
    const mv1Metric = document.createElement('p')
    mv1Metric.className = 'inv-metric'
    mv1Metric.innerHTML = `Market Value (1 Year): ###`
    const mv3Metric = document.createElement('p')
    mv3Metric.className = 'inv-metric'
    mv3Metric.innerHTML = `Market Value (3 Year): ###`
    const vacacyRateMetric = document.createElement('p')
    vacacyRateMetric.className = 'inv-metric'
    vacacyRateMetric.innerHTML = `Vacancy Rate: ###`
    const debtServieCoverageaRatioMetric = document.createElement('p')
    debtServieCoverageaRatioMetric.className = 'inv-metric'
    debtServieCoverageaRatioMetric.innerHTML = `Debt Service Coverage Ratio: ###`
    const depreciationMetric = document.createElement('p')
    depreciationMetric.className = 'inv-metric'
    depreciationMetric.innerHTML = `Depreciation (year): ###`
    const airbnbMetric = document.createElement('p')
    airbnbMetric.className = 'inv-metric'
    airbnbMetric.innerHTML = `Airbnb Rate: ###`
    const investmentScoreMetric = document.createElement('p')
    investmentScoreMetric.className = 'inv-metric'
    investmentScoreMetric.innerHTML = `Inv. Score: ###`

    propertyContainer.appendChild(metricsContainer)
    metricsContainer.appendChild(metricsHeader)
    metricsContainer.appendChild(investmentMetricContainer)
    investmentMetricContainer.appendChild(leftColumnMetrics)
    leftColumnMetrics.appendChild(cashFlowMetric)
    leftColumnMetrics.appendChild(cashOnCashReturn)
    leftColumnMetrics.appendChild(grossOperatingIncome)
    leftColumnMetrics.appendChild(operatingExpenseRatioMetric)
    leftColumnMetrics.appendChild(netOperatingIncomeMetric)
    leftColumnMetrics.appendChild(capiralizationRateMetric)
    leftColumnMetrics.appendChild(internalRateOfReturnMetric)
    leftColumnMetrics.appendChild(rentControlRatioMetric)
    investmentMetricContainer.appendChild(rightColumnMetric)
    rightColumnMetric.appendChild(grossRentMultiplierMetric)
    rightColumnMetric.appendChild(vacacyRateMetric)
    rightColumnMetric.appendChild(debtServieCoverageaRatioMetric)
    rightColumnMetric.appendChild(depreciationMetric)
    rightColumnMetric.appendChild(mv1Metric)
    rightColumnMetric.appendChild(mv3Metric)
    rightColumnMetric.appendChild(airbnbMetric)
    rightColumnMetric.appendChild(investmentScoreMetric)

    // the follwing is the purchase detail section of the propery section
    const purchaseContainer = document.createElement('div')
    purchaseContainer.className = 'section-container'

    const purchaseHeader = document.createElement('p')
    purchaseHeader.className = 'purchase-details'
    purchaseHeader.innerHTML = 'Purchase Details: '

    const purchaseSubContainer = document.createElement('div')

    const purchaseCashAmount = document.createElement('div')
    purchaseCashAmount.className = 'purchase-user-input-container'
    const cashLabel = document.createElement('p')
    cashLabel.innerHTML = 'Cash $: '
    const cashInput = document.createElement('input')
    cashInput.type = 'number'
    cashInput.id = 'cash-input'
    cashInput.placeholder = ''

    const purchaseLoanAmount = document.createElement('div')
    purchaseLoanAmount.className = 'purchase-user-input-container'
    const loanLabel = document.createElement('p')
    loanLabel.innerHTML = 'Loan $: '
    const loanInput = document.createElement('input')
    loanInput.type = 'number'
    loanInput.id = 'load-input'
    loanInput.placeholder = ''

    const purchaseDownAmount = document.createElement('div')
    purchaseDownAmount.className = 'purchase-user-input-container'
    const downLabel = document.createElement('p')
    downLabel.innerHTML = 'Down Payment $: '
    const downInput = document.createElement('input')
    downInput.type = 'number'
    downInput.id = 'down-input'
    downInput.placeholder = ''

    const purchaseClosingAmount = document.createElement('div')
    purchaseClosingAmount.className = 'purchase-user-input-container'
    const closingLabel = document.createElement('p')
    closingLabel.innerHTML = 'Closing Cost $: '
    const closingInput = document.createElement('input')
    closingInput.type = 'number'
    closingInput.id = 'closing-input'
    closingInput.placeholder = ''

    const interestRateAmount = document.createElement('div')
    interestRateAmount.className = 'purchase-user-input-container'
    const irLabel = document.createElement('p')
    irLabel.innerHTML = 'Interest Rate: '
    const irInput = document.createElement('input')
    irInput.type = 'number'
    irInput.id = 'ir-input'
    irInput.placeholder = ''
    const yearsLabel = document.createElement('p')
    yearsLabel.innerHTML = 'Years: '
    const yearsInput = document.createElement('input')
    yearsInput.type = 'number'
    yearsInput.id = 'years-input'
    yearsInput.placeholder = ''
    
    const expensesContainer = document.createElement('p')
    expensesContainer.className = 'purchase-details'
    expensesContainer.innerHTML = 'Additional Expenses:'

    const expensesSubContainer = document.createElement('div')
    expensesSubContainer.className = 'additional-exp-container'

    const rennovationsLabel = document.createElement('p')
    rennovationsLabel.innerHTML = 'Rennovation Costs: '
    const rennovationsInput = document.createElement('input')
    rennovationsInput.type = 'number'
    rennovationsInput.id = 'rennovation-input'
    rennovationsInput.placeholder = ''

    const additionalLabel = document.createElement('p')
    additionalLabel.innerHTML = 'Additional Costs: '
    const additionalInput = document.createElement('input')
    additionalInput.type = 'number'
    additionalInput.id = 'additional-input'
    additionalInput.placeholder = ''

    const rentLabel = document.createElement('p')
    rentLabel.innerHTML = 'Monthly Rent: '
    const rentInput = document.createElement('input')
    rentInput.type = 'number'
    rentInput.id = 'monthly-rent'
    rentInput.placeholder = ''
    
    const monthlyLabel = document.createElement('p')
    monthlyLabel.innerHTML = 'Monthly Costs: '
    const monthlyInput = document.createElement('input')
    monthlyInput.type = 'number'
    monthlyInput.id = 'monthly-input'
    monthlyInput.placeholder = ''

    propertyContainer.appendChild(purchaseContainer)
    purchaseContainer.appendChild(purchaseHeader)
    purchaseContainer.appendChild(purchaseSubContainer)
    purchaseSubContainer.appendChild(purchaseLoanAmount)
    purchaseLoanAmount.appendChild(cashLabel)
    purchaseLoanAmount.appendChild(cashInput)
    purchaseSubContainer.appendChild(purchaseLoanAmount)
    purchaseLoanAmount.appendChild(loanLabel)
    purchaseLoanAmount.appendChild(loanInput)
    purchaseSubContainer.appendChild(purchaseDownAmount)
    purchaseDownAmount.appendChild(downLabel)
    purchaseDownAmount.appendChild(downInput)
    purchaseSubContainer.appendChild(purchaseClosingAmount)
    purchaseDownAmount.appendChild(closingLabel)
    purchaseDownAmount.appendChild(closingInput)
    purchaseSubContainer.appendChild(interestRateAmount)
    interestRateAmount.appendChild(irLabel)
    interestRateAmount.appendChild(irInput)
    interestRateAmount.appendChild(yearsLabel)
    interestRateAmount.appendChild(yearsInput)
    purchaseContainer.appendChild(expensesContainer)
    purchaseContainer.appendChild(expensesSubContainer)
    expensesSubContainer.appendChild(rennovationsLabel)
    expensesSubContainer.appendChild(rennovationsInput)
    expensesSubContainer.appendChild(additionalLabel)
    expensesSubContainer.appendChild(additionalInput)
    expensesSubContainer.appendChild(monthlyLabel)
    expensesSubContainer.appendChild(monthlyInput)
    expensesSubContainer.appendChild(rentLabel)
    expensesSubContainer.appendChild(rentInput)

}

function generatePropertyList(){

    for(let i = 0; i < testHomes.length; i++){
        let currentProperty = testHomes[i]
        generateProperty(currentProperty)
    }
}

generatePropertyList()
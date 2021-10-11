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
    imageCarousel.appendChild(image1)
    imageCarousel.appendChild(image2)
    imageCarousel.appendChild(image3)
    imageCarousel.appendChild(image4)

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

    const metricsContainer = document.createElement('div')
    metricsContainer.className = 'section-container'

    const metricsHeader = document.createElement('p')
    metricsHeader.className = 'investment-header'
    metricsHeader.innerHTML = `Investment Metrics: `

    const investmentMetricContainer = document.createElement('div')
    investmentMetricContainer.className = 'inv-metric-container'

    const leftColumnMetrics = document.createElement('div')
    
    const noiMetric = document.createElement('p')
    noiMetric.className = 'inv-metric'
    noiMetric.innerHTML = `NOI: ###`
    const crMetric = document.createElement('p')
    crMetric.className = 'inv-metric'
    crMetric.innerHTML = `CR: ###`
    const cfMetric = document.createElement('p')
    cfMetric.className = 'inv-metric'
    cfMetric.innerHTML = `CF: ###`
    const ccrMetric = document.createElement('p')
    ccrMetric.className = 'inv-metric'
    ccrMetric.innerHTML = `CRR: ###`
    const lotMetric = document.createElement('p')
    lotMetric.className = 'inv-metric'
    lotMetric.innerHTML = `LOT: ###`
    const grmMetric = document.createElement('p')
    grmMetric.className = 'inv-metric'
    grmMetric.innerHTML = `GRM: ###`
    
    const rightColumnMetric = document.createElement('div')

    const roiMetric = document.createElement('p')
    roiMetric.className = 'inv-metric'
    roiMetric.innerHTML = `ROI: ###`
    const mv1Metric = document.createElement('p')
    mv1Metric.className = 'inv-metric'
    mv1Metric.innerHTML = `MV1: ###`
    const mv3Metric = document.createElement('p')
    mv3Metric.className = 'inv-metric'
    mv3Metric.innerHTML = `MV3: ###`
    const occrMetric = document.createElement('p')
    occrMetric.className = 'inv-metric'
    occrMetric.innerHTML = `OCC R: ###`
    const crrMetric = document.createElement('p')
    crrMetric.className = 'inv-metric'
    crrMetric.innerHTML = `CP R: ###`
    const investmentScoreMetric = document.createElement('p')
    investmentScoreMetric.className = 'inv-metric'
    investmentScoreMetric.innerHTML = `Inv. Score: ###`

    propertyContainer.appendChild(metricsContainer)
    metricsContainer.appendChild(metricsHeader)
    metricsContainer.appendChild(investmentMetricContainer)
    investmentMetricContainer.appendChild(leftColumnMetrics)
    leftColumnMetrics.appendChild(noiMetric)
    leftColumnMetrics.appendChild(crMetric)
    leftColumnMetrics.appendChild(cfMetric)
    leftColumnMetrics.appendChild(ccrMetric)
    leftColumnMetrics.appendChild(lotMetric)
    leftColumnMetrics.appendChild(grmMetric)
    investmentMetricContainer.appendChild(rightColumnMetric)
    rightColumnMetric.appendChild(roiMetric)
    rightColumnMetric.appendChild(mv1Metric)
    rightColumnMetric.appendChild(mv3Metric)
    rightColumnMetric.appendChild(occrMetric)
    rightColumnMetric.appendChild(crrMetric)
    rightColumnMetric.appendChild(investmentScoreMetric)


}

function generatePropertyList(){

    for(let i = 0; i < testHomes.length; i++){
        let currentProperty = testHomes[i]
        generateProperty(currentProperty)
    }
}

generatePropertyList()
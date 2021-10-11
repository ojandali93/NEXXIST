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

function generateTemplate(){
    // created the parent property container
    // will be generated with each property as the overall container
    const propertyContainer = document.createElement('div')
    propertyContainer.className = 'property-container'
    propertyContainer.id = 'property-container'

    // This div is going to contain the property detail information
    const propertyDetailContainer = document.createElement('div')
    propertyDetailContainer.classname = 'property-details-container'
    propertyDetailContainer.id = 'property-details-container'

    // This containes the home property image
    const imageContainer = document.createElement('div')
    imageContainer.classname = 'image-container'
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
    homeAddress1.className = 'home-address-1'
    homeAddress1.id = 'home-address-1'
    homeAddress1.innerHTML = 'address1'

    const homeAddress2 = document.createElement('p')
    homeAddress2.className = 'home-address-2'
    homeAddress2.id = 'home-address-2'
    homeAddress2.innerHTML = 'address2'

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
    addressContainer.appendChild(homeAddress2)

    propertyDetailContainer.appendChild(listingContainer)
    listingContainer.appendChild(homeDaysListed)
    listingContainer.appendChild(homeMLS)

    propertyDetailContainer.appendChild(agentBrokerContainer)
    agentBrokerContainer.appendChild(homeAgent)
    agentBrokerContainer.appendChild(homeBroker)
}

generateTemplate()
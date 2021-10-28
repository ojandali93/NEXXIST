function generatePrice(){
    let price = Math.round(Math.random() * (550 - 150) + 150)
    // let finalPrice = price * 1000
    // console.log(finalPrice)
    let finalPrice = 850000
    return finalPrice
}

function generateStatus(){
    const statuses = ['Active', 'Pending', 'Contingent']
    let randomNum = Math.round(Math.random() * (2 - 0) + 0)
    let status = statuses[randomNum]
    // console.log(status)
    return status
}

function generateBeds(){
    let beds = Math.round(Math.random() * (4 - 1) + 1)
    // console.log(beds)
    return beds
}

function generateBaths(){
    let baths = Math.round(Math.random() * (4 - 1) + 1)
    // console.log(baths)
    return baths
}

function generateSqft(){
    let sqft = Math.round(Math.random() * (2000 - 1000))
    // console.log(sqft)
    return sqft
}

function generateLot(){
    let lot = Math.round(Math.random() * (3500 - 1800))
    // console.log(lot)
    return lot
}

function generateDays(){
    let days = Math.round(Math.random() * (150 - 15))
    // console.log(days)
    return days
}

function generateMls(){
    let mlsKey = Math.round(Math.random() * (99999999 - 111111111))
    let mls = 'OC' + mlsKey.toString()
    // console.log(mls)
    return mls
}

function generatePropertyTax(){
    let propTax = 489
    // console.log(propTax)
    return propTax
}

function generateHomeInsurance(){
    let homeInsurance = 298
    // console.log(homeInsurance)
    return homeInsurance
}

function generateHOA(){
    let hoa = 394
    // console.log(hoa)
    return hoa
}

export function generatePropertyObject(){
    const home = {}
    home['price'] = generatePrice()
    home['status'] = generateStatus()
    home['beds'] = generateBeds()
    home['baths'] = generateBaths()
    home['sqft'] = generateSqft()
    home['lot'] = generateLot()
    home['address'] = '111 E Washington Blvd. Sunnyvale, CA 94087'
    home['days'] = generateDays()
    home['mls'] = generateMls()
    home['agent'] = 'John Doe'
    home['broker'] = 'JD Realty'
    home['property_tax'] = generatePropertyTax()
    home['home_insurance'] = generateHomeInsurance()
    home['hoa'] = generateHOA()
    home['additional_cost'] = 0
    home['rent'] = 0
    home['revenue'] = 0
    home['total_revenue'] = 0
    return home
}
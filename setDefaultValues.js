import { addNewHome } from './generatePropertyScripts.js'

export const testHomes = [
    {
        'price': 2795000,
        'status':'Active (new)',
        'beds': 2,
        'baths': 3,
        'sqft': 2264,
        'lot': 1260,
        'address':'365 Forest Ave Apt 4E, Palo Alto, CA 94301',
        'days': 117,
        'mls': 'OC1145354654',
        'agent': 'Howard Bloom',
        'broker': 'Intero Real Estate Service',
        'property_tax': 2911,
        'home_insurance': 699,
        'hoa': 885,
        'additional_cost': 0
    },
    {
        'price': 14000000,
        'status':'Active (new)',
        'beds': 5,
        'baths': 5.5,
        'sqft': 5535,
        'lot': .23,
        'address':'935 Scott St., Palo Alto, CA 94301',
        'days': 7,
        'mls': 'OC993843743',
        'agent': 'Brent Cullixons',
        'broker': 'Compass Real Estate',
        'property_tax': 14583,
        'home_insurance': 3500,
        'hoa': 0,
        'additional_cost': 0
    },
    {
        'price': 5988000,
        'status':'Pending',
        'beds': 7,
        'baths': 5,
        'sqft': 3838,
        'lot': .32,
        'address':'1080 Palo Alto Ave, Palo Alto, CA 94301',
        'days': 13,
        'mls': 'OC22324242',
        'agent': 'Ken Deleon',
        'broker': 'Deleon Realty',
        'property_tax': 6238,
        'home_insurance': 1497,
        'hoa': 0,
        'additional_cost': 0
    },
]

export function createHomes() {
    for(let i = 0; i < testHomes.length; i++){
        const currentHome = testHomes[i]
        addNewHome(currentHome)
    }
}

createHomes()
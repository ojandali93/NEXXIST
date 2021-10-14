import { addNewHome } from './generatePropertyScripts.js'
import { generatePropertyObject } from './generatePropertyData.js'

export const testHomes = []

export function createHomes() {
    for(let j = 0; j < 6; j++){
        testHomes.push(generatePropertyObject())
    }
    for(let i = 0; i < testHomes.length; i++){
        const currentHome = testHomes[i]
        addNewHome(currentHome)
    }
}

createHomes()
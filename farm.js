// opbrengst van een enkele plant
const getYieldForPlant = (plant) => {
    return plant.yield
}

// opbrengst van één gewas 
const getYieldForCrop = (input) => {
    return input.numCrops * input.crop.yield
}

// opbrengst van alle gewassen bij elkaar
const getTotalYield = ({crops}) => {
    return crops.reduce((partial_sum, crop) => { // partial_sum is gedeeltelijke som
        return partial_sum + getYieldForCrop(crop)
    }, 0)
};

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield
 }
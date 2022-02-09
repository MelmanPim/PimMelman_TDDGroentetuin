const checkEnvironment = (factor) => {
    return ((100 + factor) / 100)
}

// yield from one plant
const getYieldForPlant = (input, environmentFactors) => {
    return input.yield * checkEnvironment(input.factor.sun[environmentFactors.sun]) * checkEnvironment(input.factor.wind[environmentFactors.wind])

    // 30 * -50 = -1500 moet 15 zijn
    // (100+ -50)  = 50
    // 50 / 100 = 0.5
    // 15 * 1.3 = 19,5
};

// yield from one crop
const getYieldForCrop = (input, environmentFactors) => {
    return getYieldForPlant(input.crop, environmentFactors) * input.numCrops;
};

// total yield form all crops combined
const getTotalYield = ({crops}, environmentFactors) => {
    return crops.reduce((partial_sum, crop) => { // partial_sum adds all the numbers
        return partial_sum + getYieldForCrop(crop, environmentFactors)
    }, 0)
};

//calculate the cost for a crop
const getCostForCrop = (input) => {
    return input.numCrops * input.crop.price
};

// get revenue with environmental factors
const getRevenueForCrop = (input, environmentFactors) => {
    return getYieldForCrop(input, environmentFactors) * input.crop.value
};

// get profit with environmental factors
const getProfitForCrop = (input, environmentFactors) => {
    return getRevenueForCrop(input, environmentFactors) - getCostForCrop(input)
};

// get total profit without environmental factors
const getTotalProfit = ({crops}, environmentFactors) => {
    return crops.reduce((partial_sum, crop) => { // partial_sum adds all the numbers
        return partial_sum + getProfitForCrop(crop, environmentFactors)
    }, 0)
};


module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};
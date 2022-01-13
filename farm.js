// yield from one plant
const getYieldForPlant = (plant, environmentFactors) => {
    return plant.yield * ((100 + plant.factor.sun[environmentFactors.sun]) / 100)

    // 30 * -50 = -1500 moet 15 zijn
    // (100+ -50)  = 50
    // 50 / 100 = 0.5
};

// yield from one crop
const getYieldForCrop = (input) => {
    return input.numCrops * input.crop.yield
};

// total yield form all crops combined
const getTotalYield = ({crops}) => {
    return crops.reduce((partial_sum, crop) => { // partial_sum adds all the numbers
        return partial_sum + getYieldForCrop(crop)
    }, 0)
};

//calculate the cost for a crop
const getCostForCrop = (input) => {
    return input.numCrops * input.crop.cost
};

// get revenue without environmental factors
const getRevenueForCrop = (input) => {
    return getYieldForCrop(input) * input.crop.value
};

// get profit without environmental factors
const getProfitForCrop = (input) => {
    return getRevenueForCrop(input) - getCostForCrop(input)
};

// get total profit without environmental factors
const getTotalProfit = ({crops}) => {
    return crops.reduce((partial_sum, crop) => { // partial_sum adds all the numbers
        return partial_sum + getProfitForCrop(crop)
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
const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
} = require("./farm.js");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -30,
                medium: 0,
                high: 30,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(19.5);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -30,
                    medium: 0,
                    high: 30,
                },
            },
        }; 

        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(195);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -30,
                    medium: 0,
                    high: 30,
                },
            },
        }; 

        const pumpkin = {
            name: "pumpkin",
            yield: 10,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -25,
                    medium: 0,
                    high: 25,
                },
            },
        }; 

        const crops = [{
                crop: corn,
                numCrops: 5
            },
            {
                crop: pumpkin,
                numCrops: 2
            },
        ];

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        expect(getTotalYield({
            crops
        }, environmentFactors)).toBe(110);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -30,
                    medium: 0,
                    high: 30,
                },
            },
        }; 

        const pumpkin = {
            name: "pumpkin",
            yield: 10,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -25,
                    medium: 0,
                    high: 25,
                },
            },
        }; 

        const crops = [{
                crop: corn,
                numCrops: 0
            },
            {
                crop: pumpkin,
                numCrops: 0
            },
        ];

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };


        expect(getTotalYield({
            crops
        }, environmentFactors)).toBe(0);
    });
});

describe("getCostForCrop", () => {
    test("Get cost for crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -30,
                    medium: 0,
                    high: 30,
                },
            },
        }; 

        const pumpkin = {
            name: "pumpkin",
            yield: 10,
            cost: 2,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -25,
                    medium: 0,
                    high: 25,
                },
            },
        }; 

        const input = [{
                crop: corn,
                numCrops: 0
            },
            {
                crop: pumpkin,
                numCrops: 0
            },
        ];

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };



        expect(getCostForCrop(input, environmentFactors)).toBe(5);
    });
});


// get revenue without environmental factors
describe("getRevenueForCrop", () => {
    test("Get profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            value: 2,
        };
        const input = {
            crop: corn,
            numCrops: 5,
        };
        expect(getRevenueForCrop(input)).toBe(30);
    });
});

// get revenue without environmental factors
describe("getProfitForCrop", () => {
    test("Get profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            value: 2,
        };
        const input = {
            crop: corn,
            numCrops: 5,
        };
        expect(getProfitForCrop(input)).toBe(25);
    });
});

// get total profit of all the crops
describe("getTotalProfit", () => {
    test("Get total profit of all the crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            value: 2,
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 2,
            cost: 2,
            value: 4,
        };

        const crops = [{
            crop: corn,
            numCrops: 5,
        }, {
            crop: pumpkin,
            numCrops: 3,
        }];
        expect(getTotalProfit({
            crops
        })).toBe(43);
    });
});
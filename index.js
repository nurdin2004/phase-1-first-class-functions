const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiply) {
    return function(fare) {
        return fare * multiply
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers)
}

function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return returnsANamedFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}
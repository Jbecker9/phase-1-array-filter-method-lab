const findMatching = function(arr){
    for (const drivers of arr) {
        if (findMatching(drivers)){
            return arr.drivers
        }
    }
}
findMatching(drivers, function(drivers){
    if(drivers === 'Bobby' && drivers === 'Sammy'){
    return drivers
    }
})
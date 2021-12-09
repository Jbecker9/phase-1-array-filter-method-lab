function findMatching(drivers, index){
    return drivers.filter(x => x.toLowerCase() === index.toLowerCase())
}

function fuzzyMatch(drivers, index){
    return drivers.filter(x => x.startsWith(index))
}
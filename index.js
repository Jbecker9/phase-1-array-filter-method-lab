function findMatching(drivers, index){
    return drivers.filter(x => x.toLowerCase() === index.toLowerCase())
}

// const findMatching = function(arr){
//     for (const drivers of arr) {
//         if (findMatching(drivers)){
//             return arr.drivers
//         }
//     }
// }
// findMatching(drivers, drivers.filter(drivers === 'Bobby' && drivers === 'Sammy'))
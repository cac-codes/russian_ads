const {array} = require("./server.js")


console.log(
    array.flat()
        .filter (ad => ad.state === req.params.state)
        .map(ad => ad.ad_spend)
        .reduce((total, spent) => total + spent)
)
console.log(
    array.flat()
        .filter (ad => ad.state === req.params.state)
        .map(ad => ad.impressions)
        .reduce((total, impression) => total + impression)
)


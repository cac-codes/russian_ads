
// const {adsWithState} = require("./adsWithState.js")


// var array = []

// let data = Object.entries(adsWithState)
// for (let i = 0; i < data.length; i++){
//     const isState = data[i][1].state
//     if (isState && isState === req.params.state) {
//         array.push(data[i])
//     }
// }

// res.send(array.flat())


// console.log(
//     array.flat()
//         .filter (ad => ad.state === req.params.state)
//         .map(ad => ad.ad_spend)
//         .reduce((total, spent) => total + spent)
// )
// console.log(
//     array.flat()
//         .filter (ad => ad.state === req.params.state)
//         .map(ad => ad.impressions)
//         .reduce((total, impression) => total + impression)
// )
// var fs = require("fs")

// fs.readFile("adsWithState.js", function (error, content){
//     var testArray = JSON.parse(content)

//     console.log(testArray.data)
    
//     // var moneyAndImpressionTotalByState = {}
//     // console.log(content)

//     // var adDataByState = (content)
//     // adDataByState.data.forEach( ad => {
//     //     if (ad.ad_spend != null) {
//     //         if(ad.impressions != null) {
//     //             var id = ad.ad_id
//     //             moneyAndImpressionTotalByState[id] = {
//     //                 totalSpent: ad.ad_spend,
//     //                 totalImpression: ad.impressions
//     //             }
//     //         }
//     //     }
//     // })
//     // console.log(moneyAndImpressionTotalByState)
// })
var fs = require("fs")
const adsWithState = require("./adsWithState")

fs.readFile("data.json", function (error, content){
    
    var allAdsWithState = {}

    var allTotals = {}

    var adSpend = {}

    var stateData = JSON.parse(content)

   
    var counter = 0

    stateData.data.forEach( ad => {
        if(ad.location_living != null){
            if(ad.location_living[0].state != undefined)
            // console.log(ad.location_living)
            counter++;
            var id = ad.ad_id
            allAdsWithState[id] = 
            {
                state: ad.location_living[0].state,
                ad_spend: ad.ad_spend,
                impressions: ad.impressions,
                ad_currency: ad.ad_spend_currency
            }

        }
        return allAdsWithState
    });

    // var totalSpentInUS= []
    // var totalImpressionInUS = []
    // this gets for all of US

    // let monies = allAdsWithState
    //     .map(ad => ad.ad_spend)
    //     .reduce((total, spent) => total + spent)
    // totalSpentInUS.push(monies)

        
    // total impressions for all US
 
    // var impressMe = allAdsWithState
    //     .map(ad => ad.impressions)
    //     .reduce((total, impression) => total + impression)

    // totalImpressionInUS.push(impressMe)

   
    fs.writeFileSync("totals.js", JSON.stringify(allAdsWithState))
})




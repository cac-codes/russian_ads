const express = require('express');
const app = express();
const axios = require('axios')
const {adsWithState} = require("./adsWithState.js")
const {allAdsWithState} = require("./allAdsWithState.js")
const {allAdsUSA} = require("./allAdsUSA.js")
const targetGroups = require("./targetGroups.js")
app.use(express.static('public'))

app.get('/api/ads/:state/:profile', (req, res) => {
    
    let profile = '';
    if(req.params.profile == "blackPower"){
        profile =  targetGroups.blackPower
    }else if(req.params.profile == "antiMuslim"){
        profile = targetGroups.antiMuslim
    }else if(req.params.profile == "whiteNationalist"){
        profile = targetGroups.whiteNationalist
    }else if(req.params.profile == "Hispanic"){
        profile = targetGroups.Hispanic
    }else if(req.params.profile == "lgbtq"){
        profile = targetGroups.lgbtq
    }else if(req.params.profile == "muslim"){
        profile = targetGroups.muslim
    }else if(req.params.profile == "prisoners"){
        profile = targetGroups.prisoners
    }else if(req.params.profile == "concervativeGunOwners"){
        profile = targetGroups.concervativeGunOwners
    }else if(req.params.profile == "libertarians"){
        profile = targetGroups.libertarians
    }else if(req.params.profile == "policeForce"){
        profile = targetGroups.policeForce
    }

    function adsByProfile(targetGroup){
        var adsInState = [];
        let data = Object.entries(allAdsWithState)
        for (let i = 0; i < data.length; i++){
            const isState = data[i][1].state
            if (isState && isState === req.params.state) {
                adsInState.push(data[i])
            }
        }
        var newArray = []
        adsInState.forEach(ad => {
            if(ad[1].interests != null){
                targetGroup.forEach(interest => {
                    if(ad[1].interests.includes(interest)){
                        if(!newArray.includes(ad)){
                        newArray.push(ad)}
                    }

                })
            }
        })
        adsInState.forEach(ad => {
            if(ad[1].interests_also_match != null){
                targetGroup.forEach(interest => {
                    if(ad[1].interests_also_match.includes(interest)){
                        if(!newArray.includes(ad)){
                        newArray.push(ad)}
                    }
                })
            }
        })
        return newArray
    }
    res.send(adsByProfile(profile).flat())
})




app.get('/api/ads/:state', (req, res) => {
    var array = []

    let data = Object.entries(allAdsWithState)
    for (let i = 0; i < data.length; i++){
        const isState = data[i][1].state
        if (isState && isState === req.params.state) {
            array.push(data[i])
        }
    }


    res.send(array.flat())

})

app.get('/api/ads/totals/:state', (req, res) => {

    // let totals = Object.entries(adTotals).forEach([key, value], index) => {
    //     for (let j = 0; j < totals.length; i++){
    //         totalImpressions += impressions
    //     }
    //     console.log(totals)
    // })
    var totalImpressions = 0

    // for (const [index, [key, value]] of Object.entries(Object.entries(adTotals))) {
    //     console.log(`${index}: ${key} = ${value}`)
    // }

//  Object.entries(adTotals).forEach(ad => {
//         for (let j = 0; j < totals.length; j++){

//             if (ad.impressions != null){
//             totalImpressions += ad.impressions
//             }
//         }
//         console.log(ad.impressions)
//     })

    // let totals = Object.entries(adTotals)
    // console.log(totals)
    // for(let j = 0; j < totals.length; j++) {
    //     const isTotal = totals[i][0]
    //     if (isTotal && isTotal.impressions != null){
    //         totalImpressions += isTotal.impressions
    //     }
    // }


    // for (let j = 0; j< totals.length; )j++){
    //     const aState = totals[i][1].state
    //     if (aState && aState === req.params.state) {

    //     }
    
    // }
//     res.send(totalImpressions)

})






app.get('/api/ads', (req, res) => {
    var allAds = [];
    let data = Object.entries(allAdsUSA)
    for (let i = 0; i < data.length; i++){
            allAds.push(data[i])
    }
    console.log(data.length)
    res.send(allAds.flat())
})

app.listen(4567, () => {
    console.log('listening on port 4567')
});


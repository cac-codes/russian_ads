const express = require('express');
const app = express();
const axios = require('axios')
const {adsWithState} = require("./adsWithState.js")
const {allAdsWithState} = require("./allAdsWithState.js")
const {allAdsUSA} = require("./allAdsUSA.js")
const targetGroups = require("./targetGroups.js")
const {adTotals} = require("./totals.js");
const { test } = require('picomatch');
app.use(express.static('public'))


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

app.get('/api/ads', (req, res) => {
    var allAds = [];
    let data = Object.entries(allAdsUSA)
    for (let i = 0; i < data.length; i++){
            allAds.push(data[i])
    }
    console.log(data.length)
    res.send(allAds.flat())
})

app.get('/api/:profile', (req, res) => {
     
    // policeForceJobtitle,
    // antPoliceInterests,
    let interests = '';
    let likes = '';
    let culturalAfinity = '';

    if(req.params.profile == "blackPride"){
        interests =  targetGroups.blackPowerInterests
        likes = targetGroups.blackPowerLikes
        culturalAfinity = targetGroups.blackPowerCulturalAfinity
    }else if(req.params.profile == "antiMuslim"){
        interests = targetGroups.antiMuslimInterests
        likes = targetGroups.antiMuslimLikes
    }else if(req.params.profile == "whitePride"){
        interests = targetGroups.whiteNationalistInterests
    }else if(req.params.profile == "hispanics"){
        interests = targetGroups.HispanicInterests
    }else if(req.params.profile == "lgbtq"){
        interests = targetGroups.lgbtqInterests
    }else if(req.params.profile == "muslims"){
        interests = targetGroups.muslimInterests
    }else if(req.params.profile == "incarcerated"){
        interests = targetGroups.prisonersInterests
    }else if(req.params.profile == "gunOwners"){
        interests = targetGroups.gunOwnersInterests
    }else if(req.params.profile == "libertarians"){
        interests = targetGroups.libertariansInterests
    }
    // else if(req.params.profile == "policeOfficers"){
    //     profile = targetGroups.policeForce
    // }
    else if(req.params.profile == "veterans"){
        interests = targetGroups.veteransInterests
    }else if(req.params.profile == "leftWing"){
        interests = targetGroups.leftWingInterests
        likes = targetGroups.leftWingInterests
    }else if(req.params.profile == "rightWing"){
        interests = targetGroups.rightWingInterests
    }else if(req.params.profile == "christians"){
        interests = targetGroups.christianInterests
    }else if(req.params.profile == "firstNations"){
        interests = targetGroups.firstNationInterests
    }

    function adsByProfile(groupInterests, groupLikes){
        // console.log(groupInterests)
        var ads = [];
        let data = Object.entries(allAdsUSA)
        for (let i = 0; i < data.length; i++){
            ads.push(data[i])
        }
        var newArray = []
        ads.forEach(ad => {
            if(ad[1].interests != null){
                groupInterests.forEach(interest => {
                    if(ad[1].interests.includes(interest)){
                        if(!newArray.includes(ad)){
                        newArray.push(ad)}
                    }
                })
            }
        })
        ads.forEach(ad => {
            if(ad[1].interests_also_match != null){
                groupInterests.forEach(interest => {
                    if(ad[1].interests_also_match.includes(interest)){
                        if(!newArray.includes(ad)){
                        newArray.push(ad)}
                    }
                })
            }
        })
        if(groupLikes != ''){
            ads.forEach(ad => {
                if(ad[1].likes != null){
                    groupLikes.forEach(interest => {
                        if(ad[1].likes.includes(interest)){
                            if(!newArray.includes(ad)){
                            newArray.push(ad)}
                        }
                    })
                }
            })
        }
        return newArray
    }
    res.send(adsByProfile(interests, likes))
})


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


function totalForState(oneState){
    
    var thisState = Object.entries(allAdsWithState)
    var spendingTotal = 0
    var impressionTotal = 0
    var testSpendArray = []
    thisState.forEach((element, index, array) => {
 

        const isState = element[1].state

        if (isState && isState === oneState) {
            const stateSpend = element[1].ad_spend
            const stateImpression = element[1].impressions
            if (stateSpend && stateSpend > 0){
            spendingTotal += stateSpend
            }
            impressionTotal += stateImpression
        }   
        
    })


    return new Array(spendingTotal, impressionTotal)
}

app.get('/api/totals/:state', (req, res) => {

    var oneState = req.params.state
    console.log("Test")
  
    totalForState(oneState)
    
    res.send(totalForState(oneState))
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


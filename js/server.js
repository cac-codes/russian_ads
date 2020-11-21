const express = require('express');
const app = express();

const {allAdsWithState} = require("./allAdsWithState.js")
const {allAdsUSA} = require("./allAdsUSA.js")
const targetGroups = require("./targetGroups.js")

app.use(express.static('public'))

function adsByProfile(ads, groupInterests, groupLikes){
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

function totalForState(oneState){
    
    var thisState = Object.entries(allAdsWithState)
    var spendingTotal = {"total_spent": 0 }
    var impressionTotal = {"impression_total": 0}
    var adCounter = {"ad_count": 0}

    thisState.forEach((element, index, array) => {
        const isState = element[1].state
        const isID = element[0]
        if (isState && isState === oneState) {
            const stateSpend = element[1].ad_spend
            const stateImpression = element[1].impressions
            if (stateSpend && stateSpend > 0){
                spendingTotal['total_spent'] = Math.floor(spendingTotal.total_spent += stateSpend)
            }if (isID){
                let counter = 0
                counter ++; 
                adCounter.ad_count += counter 
            }
            impressionTotal.impression_total += stateImpression
        }
    })  
    return new Array(spendingTotal, impressionTotal, adCounter)
}

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
    res.send(allAds.flat())
})

app.get('/api/:profile', (req, res) => {
     
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
    }else if(req.params.profile == "policeOfficers"){
        interests = targetGroups.policeInterests
    }else if(req.params.profile == "veterans"){
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

    var ads = [];
    let data = Object.entries(allAdsUSA)
    for (let i = 0; i < data.length; i++){
        ads.push(data[i])
    }

    res.send(adsByProfile(ads, interests, likes))
})

app.get('/api/ads/:state/:profile', (req, res) => {
 
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
    }else if(req.params.profile == "policeOfficers"){
        interests = targetGroups.policeInterests
    }else if(req.params.profile == "veterans"){
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

    var ads = [];
    let data = Object.entries(allAdsUSA)
    for (let i = 0; i < data.length; i++){
        const isState = data[i][1].state
        if (isState && isState === req.params.state) {
            ads.push(data[i])
        }
    }

    res.send(adsByProfile(ads, interests, likes).flat())

})

app.get('/api/totals/:state', (req, res) => {
    var oneState = req.params.state

    totalForState(oneState)
    
    let result = totalForState(oneState)
    res.send(result)
})

app.listen(4567, () => {
    console.log('listening on port 4567')
});
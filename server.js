const express = require('express');
const app = express();
const axios = require('axios')

const {adsWithState} = require("./adsWithState.js")
const {allAdsWithState} = require("./allAdsWithState.js")
const targetGroups = require("./targetGroups.js")
app.use(express.static('public'))

app.get('/api/:profile', (req, res) => {
    
    let profile = '';
    if(req.params.profile == "blackPower"){
        profile =  targetGroups.blackPower
    }else if(req.params.profile == "antiMuslim"){
        profile = targetGroups.antiMuslim
    }else if(req.params.profile == "whiteNationalist"){
        profile = targetGroups.whiteNationalist
    }else if(req.params.profile == "hispanic"){
        profile = targetGroups.hispanic
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
        var ads = [];
        let data = Object.entries(allAdsWithState)
        for (let i = 0; i < data.length; i++){
                ads.push(data[i])
        }
        var targetedGroupAds = []
        ads.forEach(ad => {
            if(ad[1].interests != null){
                targetGroup.forEach(interest => {
                    if(ad[1].interests.includes(interest)){
                        if(!targetedGroupAds.includes(ad)){
                        targetedGroupAds.push(ad)}
                    }

                })
            }
        })
        ads.forEach(ad => {
            if(ad[1].interests_also_match != null){
                targetGroup.forEach(interest => {
                    if(ad[1].interests_also_match.includes(interest)){
                        if(!targetedGroupAds.includes(ad)){
                        targetedGroupAds.push(ad)}
                    }
                })
            }
        })
        return targetedGroupAds
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

app.get('/api/ads', (req, res) => {
    var allAds = [];
    let data = Object.entries(allAdsWithState)
    let data2 = Object.entries(adsWithState)
    for (let i = 0; i < data.length; i++){
            allAds.push(data[i])
    }
    console.log(data.length)
    console.log(data.length)
    res.send(allAds.flat())
})

app.listen(4567, () => {
    console.log('listening on port 4567')
});

// module.exports = {array}

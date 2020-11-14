const express = require('express');
const app = express();
const axios = require('axios')

const {adsWithState} = require("./adsWithState.js")
app.use(express.static('public'))

app.get('/api/ads/:state/:profile', (req, res) => {
    var adsInState = [];
    const blackPower = ["Understanding racial segregation in the united states",
    "American Black Film Festival",
    "Cop Block",
    "HuffPost Black Voices", "Pan-Africanism", "Black Panther Party", "Black panther", "Black (Color)"];
    const antiMuslim = [];
    const whiteNationalist = [];
    const Hispanic = [];
    const lgbtq = [];
    const musilm = [];
    const prisoners = [];
    const concervativeGunOwners = [];
    const libertarians = [];
    const policeForce = [];

    let data = Object.entries(adsWithState)
    for (let i = 0; i < data.length; i++){
        const isState = data[i][1].state
        if (isState && isState === req.params.state) {
            adsInState.push(data[i])
        }
    }
    const profile = req.params.profile

    var newArray = []
    adsInState.forEach(ad => {
        if(ad[1].interests != null){
            blackPower.forEach(interest => {
                if(ad[1].interests.includes(interest)){
                    if(!newArray.includes(ad)){
                    newArray.push(ad)}
                }

            })
        }
    })
    adsInState.forEach(ad => {
        if(ad[1].interests_also_match != null){
            blackPower.forEach(interest => {
                if(ad[1].interests_also_match.includes(interest)){
                    if(!newArray.includes(ad)){
                    newArray.push(ad)}
                }
            })
        }
    })
    res.send(newArray.flat())
})

app.get('/api/ads/:state', (req, res) => {
    var array = []

    let data = Object.entries(adsWithState)
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
    let data = Object.entries(adsWithState)
    for (let i = 0; i < data.length; i++){
            allAds.push(data[i])
    }
    res.send(allAds.flat())
})


app.listen(4567, () => {
    console.log('listening on port 4567')
});

// module.exports = {array}
